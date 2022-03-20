import { useState, useEffect } from "react"
import { createContext } from "react"

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
    let [viewCount, setViewCount] = useState(0)
    let [fullname, setFullname] = useState("")
    let [title, setTitle] = useState("")
    let [about, setAbout] = useState("")
    let [themeColor, setThemeColor] = useState("")
    let [showGithubStats, setShowGithubStats] = useState(false)
    let [skills, setSkills] = useState([])
    let [workplaces, setWorkplaces] = useState([])
    let [projects, setProjects] = useState([])
    const [isPremiumAccount, setIsPremiumAccount] = useState(false)
    const [showPreview, setShowPreview] = useState(false)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [showLogin, setShowLogin] = useState(true)

    const [twitter, setTwitter] = useState("")
    const [facebook, setFacebook] = useState("")
    const [instagram, setInstagram] = useState("")
    const [linkedin, setLinkedin] = useState("")
    const [github, setGithub] = useState("")
    const [coffee, setCoffee] = useState("")
    const [ethAddress, setEthAddress] = useState("")

    const maxViewCount = 3

    const next = () => setViewCount(viewCount + 1)
    const previous = () => setViewCount(viewCount - 1)

    const toggleIsAuthenticated = (val) => {
        sessionStorage.setItem('isAuth', val)
        setIsAuthenticated(eval(val))
    }

    useEffect(() => {

        console.log(window.location.hostname.split(".")[0])

        if ((screen.width <= 640) ||
            (window.matchMedia &&
                window.matchMedia('only screen and (max-width: 640px)').matches
            )) {
            setShowPreview(false)
        }

        else setShowPreview(true)

        const _authSessionValue = sessionStorage.getItem("isAuth")

        if (!_authSessionValue) {
            sessionStorage.setItem("isAuth", false)
            setIsAuthenticated(false)
            console.log('null_', false)
            return
        }

        setIsAuthenticated(eval(_authSessionValue))

        console.log('_authSessionValue', eval(_authSessionValue))

    }, [])

    const save = async () => {

        /* check if user is auth */
        /* check if username is present */

        try {

            let _body = {
                fullname: fullname,
                work: work,
                about: about,
                showGithubStats: showGithubStats,
                skills: skills,
                isPremiumAccount: isPremiumAccount,
                socials: { twitter, facebook, instagram, linkedin, github, coffee, ethAddress },
                profilePhoto: "",
                coverPhoto: "",
                workplaces: workplaces,
                projects: projects,
            }

            await fetch(`http://localhost:2003/user/update-user`, { method: "POST", body: _body })

        } catch (e) {
            console.log(e.message)
        }
    }

    const getAccountData = async (_username) => {

        try {

            const res = await fetch(`http://localhost:2003/user/get-user/${_username}`, { method: "GET" })
            const data = await res.json()

            console.log("getting data", data.payload)

            toggleIsAuthenticated(true)

        } catch (e) {

            console.log(e.message)
        }
    }

    const login = async (_username, _password) => {

        try {

            console.log("_username, _password", _username, _password)

            const res = await fetch(`http://localhost:2003/user/get-user/${_username}`, { method: "GET" })
            const data = await res.json()

            if (data.payload.password === _password) {

                console.log("correct password", data)

                getAccountData(_username)

                return
            }

            alert("Wrong password provided")

            toggleIsAuthenticated(false)

        } catch (e) {

            console.log(e.message)
        }
    }

    return <AppContext.Provider value={{
        viewCount, setViewCount,
        next,
        previous,
        maxViewCount,
        fullname, setFullname,
        title, setTitle,
        about, setAbout,
        themeColor, setThemeColor,
        skills, setSkills,
        setTwitter,
        setFacebook,
        setInstagram,
        setLinkedin,
        setGithub,
        setCoffee,
        // isAuthenticated, toggleIsAuthenticated,
        isAuthenticated, toggleIsAuthenticated,
        showGithubStats, setShowGithubStats,
        showPreview, setShowPreview,
        isPremiumAccount,
        setEthAddress,
        save,
        getAccountData, login,
        showLogin, setShowLogin,
        usernames: { twitter, facebook, instagram, linkedin, github, coffee, ethAddress }
    }}>
        {children}
    </AppContext.Provider>
}