import { useState, useEffect } from "react"
import { createContext } from "react"

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
    let [viewCount, setViewCount] = useState(0)
    let [fullname, setFullname] = useState("")
    let [username, setUsername] = useState("")
    let [work, setWork] = useState("")
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

    const [profilePhoto, setProfilePhoto] = useState("")
    const [coverPhoto, setCoverPhoto] = useState(true)

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

    const saveNewChangesToStorage = (data) => {

        sessionStorage.setItem("data", JSON.stringify(data))

        // console.log("newData >> ", data)

        // setFullname(data.payload.fullname)
        // setUsername(data.payload.username)
        // setWork(data.payload.work)
        // setAbout(data.payload.about)
        // setProfilePhoto(data.payload.coverPhoto)
        // setCoverPhoto(data.payload.profilePhoto)
        // setShowGithubStats(data.payload.showGithubStats)
        // setSkills(data.payload.skills)
        // setWorkplaces(data.payload.workplaces)
        // setProjects(data.payload.projects)
        // setIsPremiumAccount(data.payload.isPremiumAccount)
        // setWorkplaces(data.payload.workplaces)
        // setTwitter(data.payload.socials.twitter)
        // setFacebook(data.payload.socials.facebook)
        // setInstagram(data.payload.socials.instagram)
        // setLinkedin(data.payload.socials.linkedin)
        // setGithub(data.payload.socials.github)
        // setCoffee(data.payload.socials.coffee)
        // setEthAddress(data.payload.ethAddress)
    }

    const updateAccount = async () => {

        /* check if user is auth */
        /* check if username is present */

        try {

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

            const res = await fetch("http://localhost:2003/user/update-user", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(_body),
            })

            const data = await res.json()

            console.log(data)

            saveNewChangesToStorage(_body)

        } catch (e) {
            console.log(e.message)
        }
    }

    const getAccountData = async (_username) => {

        try {

            const res = await fetch(`http://localhost:2003/user/get-user/${_username}`, { method: "GET" })
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
        usernames: { twitter, facebook, instagram, linkedin, github, coffee, ethAddress }
    }}>
        {children}
    </AppContext.Provider>
}