import { useState, useEffect } from "react"
import { createContext } from "react"

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
    const [viewCount, setViewCount] = useState(0)
    const [fullname, setFullname] = useState("")
    const [username, setUsername] = useState("")
    const [work, setWork] = useState("")
    const [about, setAbout] = useState("")
    const [themeColor, setThemeColor] = useState("#fffff")
    const [showGithubStats, setShowGithubStats] = useState(false)
    const [skills, setSkills] = useState([])
    const [workplaces, setWorkplaces] = useState([])
    const [coverPhoto, setCoverPhoto] = useState('')
    const [profilePhoto, setProfilePhoto] = useState("")
    const [isPremiumAccount, setIsPremiumAccount] = useState(false)
    const [showPreview, setShowPreview] = useState(false)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [showLogin, setShowLogin] = useState(true)
    const [showLoader, setShowLoader] = useState(false)
    const [showProjectModal, setShowProjectModal] = useState(false)

    const [coverPhotoPreview, setCoverPhotoPreview] = useState("")
    const [profilePhotoPreview, setProfilePhotoPreview] = useState("")

    const [projects, setProjects] = useState([])

    // const [twitter, setTwitter] = useState("")
    // const [facebook, setFacebook] = useState("")
    // const [instagram, setInstagram] = useState("")
    // const [linkedin, setLinkedin] = useState("")
    // const [github, setGithub] = useState("")
    // const [coffee, setCoffee] = useState("")
    // const [ethAddress, setEthAddress] = useState("")

    const [socials, setSocials] = useState({})

    const [theme, setTheme] = useState(1)

    const maxViewCount = 5

    const next = () => setViewCount(viewCount + 1)
    const previous = () => setViewCount(viewCount - 1)

    const toggleIsAuthenticated = (val) => {
        sessionStorage.setItem('isAuth', val)
        setIsAuthenticated(eval(val))
    }

    useEffect(() => {

        // console.log(window.location.hostname.split(".")[0])
        // console.warn("setting projects")

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

        // console.log('_authSessionValue', eval(_authSessionValue))

    }, [])

    const saveNewChangesToStorage = (data) => {

        sessionStorage.setItem("data", JSON.stringify(data))
    }

    const uploadImage = async (_file) => {

        try {

            const data = new FormData()
            data.append("file", _file)
            data.append("upload_preset", "tutorial")
            data.append("cloud_name", "breellz")

            const res = await fetch("https://api.cloudinary.com/v1_1/breellz/image/upload", {
                method: "POST",
                body: data
            })

            const resData = await res.json()

            return resData.url
        }

        catch (e) {

            console.log('ERR_', e.message)
        }
    }

    const updateAccount = async () => {

        /* check if user is auth */
        /* check if username is present */

        try {

            let proceed = confirm("Do you want to save your changes?")
            let _profilePhoto = profilePhoto;
            let _coverPhoto = coverPhoto;

            if (!proceed) return

            setShowLoader(true)

            if (coverPhotoPreview) {
                console.log('cover changes')
                _coverPhoto = await uploadImage(coverPhotoPreview)
            }

            if (profilePhotoPreview) {
                console.log('profile changed')
                _profilePhoto = await uploadImage(profilePhotoPreview)
            }

            let _body = {
                "fullname": fullname,
                "username": username,
                "work": work,
                "about": about,
                "showGithubStats": showGithubStats,
                "skills": skills,
                "isPremiumAccount": isPremiumAccount,
                "profilePhoto": _profilePhoto,
                "coverPhoto": _coverPhoto,
                "workplaces": workplaces,
                "projects": projects,
                "theme": theme,
                "themeColor": themeColor,
                "socials": socials,
            }

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

            // readDataFromStorage()

        } catch (e) {

            setShowLoader(false)
            alert("An error occured. Please try again later.")
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
            setProfilePhoto(data.payload.profilePhoto)
            setCoverPhoto(data.payload.coverPhoto)
            setShowGithubStats(data.payload.showGithubStats)
            setSkills(data.payload.skills)
            setWorkplaces(data.payload.workplaces)
            setProjects(data.payload.projects)
            setIsPremiumAccount(data.payload.isPremiumAccount)
            setWorkplaces(data.payload.workplaces)
            setSocials(data.payload.socials)
            // setTwitter(data.payload.socials.twitter)
            // setFacebook(data.payload.socials.facebook)
            // setInstagram(data.payload.socials.instagram)
            // setLinkedin(data.payload.socials.linkedin)
            // setGithub(data.payload.socials.github)
            // setCoffee(data.payload.socials.coffee)
            // setEthAddress(data.payload.ethAddress)
            setTheme(data.payload.theme)
            setThemeColor(data.payload.themeColor)

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
        setProfilePhoto(sessionStorageData.profilePhoto)
        setCoverPhoto(sessionStorageData.coverPhoto)
        setShowGithubStats(sessionStorageData.showGithubStats)
        setSkills(sessionStorageData.skills)
        setWorkplaces(sessionStorageData.workplaces)
        setProjects(sessionStorageData.projects)
        setIsPremiumAccount(sessionStorageData.isPremiumAccount)
        setWorkplaces(sessionStorageData.workplaces)
        setSocials(sessionStorageData.socials)
        setTheme(sessionStorageData.theme)
        setThemeColor(sessionStorageData.themeColor)


        // setProjects([{
        //     name: "Google Tech",
        //     link: "https://google.com",
        //     description: "Google Tech is a Google-powered website that provides information about Google's products and services. It is a part of Google's Tech Blog.",
        //     thumbnail: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
        // }])
    }

    const changeThemeInSessionStorage = (index) => {
        let _sessionData = JSON.parse(sessionStorage.getItem("data"))
        _sessionData.theme = index
        setTheme(index)
        saveNewChangesToStorage(_sessionData)
    }

    const saveThemeColorToStorage = (color) => {
        let _sessionData = JSON.parse(sessionStorage.getItem("data"))
        _sessionData.themeColor = color
        setThemeColor(color)
        saveNewChangesToStorage(_sessionData)
    }

    const login = async (_username, _password) => {

        try {

            if (_username.trim() === "" || _password.trim() === "") return

            setShowLoader(true)

            const res = await fetch(`https://folio-backend-server.herokuapp.com/user/get-user/${_username}`, { method: "GET" })
            const data = await res.json()


            if (data.payload.password === _password) {

                console.log("correct password", data)

                await getAccountData(_username)

                readDataFromStorage()

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
        isAuthenticated, toggleIsAuthenticated,
        showGithubStats, setShowGithubStats,
        showPreview, setShowPreview,
        isPremiumAccount,
        updateAccount, username,
        getAccountData, login,
        showLogin, setShowLogin,
        readDataFromStorage,
        showLoader, setShowLoader,
        coverPhotoPreview, setCoverPhotoPreview,
        coverPhoto, profilePhoto,
        profilePhotoPreview, setProfilePhotoPreview,
        theme, changeThemeInSessionStorage,
        saveThemeColorToStorage,
        socials, setSocials,
        projects, setProjects,
        uploadImage,
        showProjectModal, setShowProjectModal,
    }}>
        {children}
    </AppContext.Provider>
}