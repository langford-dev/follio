import { useState, useEffect } from "react"
import { createContext } from "react"

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
    const [viewCount, setViewCount] = useState(0)
    const [fullname, setFullname] = useState("")
    const [username, setUsername] = useState("")
    const [work, setWork] = useState("")
    const [about, setAbout] = useState("")
    const [themeColor, setThemeColor] = useState("")
    const [showGithubStats, setShowGithubStats] = useState(false)
    const [skills, setSkills] = useState([])
    const [workplaces, setWorkplaces] = useState([])
    const [projects, setProjects] = useState([])
    const [coverPhoto, setCoverPhoto] = useState(true)
    const [profilePhoto, setProfilePhoto] = useState("")
    const [isPremiumAccount, setIsPremiumAccount] = useState(false)
    const [showPreview, setShowPreview] = useState(false)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [showLogin, setShowLogin] = useState(true)
    const [showLoader, setShowLoader] = useState(false)

    const [twitter, setTwitter] = useState("")
    const [facebook, setFacebook] = useState("")
    const [instagram, setInstagram] = useState("")
    const [linkedin, setLinkedin] = useState("")
    const [github, setGithub] = useState("")
    const [coffee, setCoffee] = useState("")
    const [ethAddress, setEthAddress] = useState("")

    const maxViewCount = 4

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

    const saveNewChangesToStorage = (data) => {

        sessionStorage.setItem("data", JSON.stringify(data))
    }

    const updateAccount = async () => {

        /* check if user is auth */
        /* check if username is present */

        try {

            let proceed = confirm("Do you want to save your changes?")

            if (!proceed) return

            let _body = {
                "fullname": fullname,
                "username": username,
                "work": work,
                "about": about,
                "showGithubStats": showGithubStats,
                "skills": skills,
                "isPremiumAccount": isPremiumAccount,
                "socials": { twitter, facebook, instagram, linkedin, github, coffee, ethAddress },
                "profilePhoto": profilePhoto,
                "coverPhoto": coverPhoto,
                "workplaces": workplaces,
                "projects": projects,
            }

            console.log(_body)

            setShowLoader(true)

            const res = await fetch("https://folio-backend-server.herokuapp.com/user/update-user", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(_body),
            })

            const data = await res.json()

            console.log(data)

            setShowLoader(false)

            saveNewChangesToStorage(_body)

        } catch (e) {

            setShowLoader(false)
            console.log(e.message)
        }
    }

    const getAccountData = async (_username) => {

        try {

            const res = await fetch(`https://folio-backend-server.herokuapp.com/user/get-user/${_username}`, { method: "GET" })
            const data = await res.json()

            delete data.payload["password"];

            toggleIsAuthenticated(true)

            sessionStorage.setItem("data", JSON.stringify(data.payload))

            setFullname(data.payload.fullname)
            setUsername(data.payload.username)
            setWork(data.payload.work)
            setAbout(data.payload.about)
            setProfilePhoto(data.payload.coverPhoto)
            setCoverPhoto(data.payload.profilePhoto)
            setShowGithubStats(data.payload.showGithubStats)
            setSkills(data.payload.skills)
            setWorkplaces(data.payload.workplaces)
            setProjects(data.payload.projects)
            setIsPremiumAccount(data.payload.isPremiumAccount)
            setWorkplaces(data.payload.workplaces)
            setTwitter(data.payload.socials.twitter)
            setFacebook(data.payload.socials.facebook)
            setInstagram(data.payload.socials.instagram)
            setLinkedin(data.payload.socials.linkedin)
            setGithub(data.payload.socials.github)
            setCoffee(data.payload.socials.coffee)
            setEthAddress(data.payload.ethAddress)

        } catch (e) {

            console.log(e.message)
        }
    }

    const readDataFromStorage = () => {

        if (!sessionStorage.getItem("data")) return

        let sessionStorageData = JSON.parse(sessionStorage.getItem("data"))

        setFullname(sessionStorageData.fullname)
        setUsername(sessionStorageData.username)
        setWork(sessionStorageData.work)
        setAbout(sessionStorageData.about)
        setProfilePhoto(sessionStorageData.coverPhoto)
        setCoverPhoto(sessionStorageData.profilePhoto)
        setShowGithubStats(sessionStorageData.showGithubStats)
        setSkills(sessionStorageData.skills)
        setWorkplaces(sessionStorageData.workplaces)
        setProjects(sessionStorageData.projects)
        setIsPremiumAccount(sessionStorageData.isPremiumAccount)
        setWorkplaces(sessionStorageData.workplaces)
        setTwitter(sessionStorageData.socials.twitter)
        setFacebook(sessionStorageData.socials.facebook)
        setInstagram(sessionStorageData.socials.instagram)
        setLinkedin(sessionStorageData.socials.linkedin)
        setGithub(sessionStorageData.socials.github)
        setCoffee(sessionStorageData.socials.coffee)
        setEthAddress(sessionStorageData.ethAddress)

    }

    const login = async (_username, _password) => {

        try {

            setShowLoader(true)

            const res = await fetch(`https://folio-backend-server.herokuapp.com/user/get-user/${_username}`, { method: "GET" })
            const data = await res.json()


            if (data.payload.password === _password) {

                console.log("correct password", data)

                await getAccountData(_username)

                setShowLoader(false)

                return
            }

            alert("Wrong password provided")

            toggleIsAuthenticated(false)

            setShowLoader(false)


        } catch (e) {

            setShowLoader(false)
            alert("Account doesn not exist")
            console.log(e.message)
        }
    }

    return <AppContext.Provider value={{
        viewCount, setViewCount,
        next,
        previous,
        maxViewCount,
        fullname, setFullname,
        work, setWork,
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
        updateAccount,
        getAccountData, login,
        showLogin, setShowLogin,
        readDataFromStorage,
        showLoader, setShowLoader,
        usernames: { twitter, facebook, instagram, linkedin, github, coffee, ethAddress }
    }}>
        {children}
    </AppContext.Provider>
}