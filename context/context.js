import { useRouter } from "next/dist/client/router"
import { useState, useEffect } from "react"
import { createContext } from "react"
import { getProviders, signIn, signOut, useSession } from "next-auth/react"

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
    const { data: session } = useSession()

    const [viewCount, setViewCount] = useState(0)
    const [fullname, setFullname] = useState("")
    const [email, setEmail] = useState("")
    const [tagline, setTagline] = useState("")
    const [username, setUsername] = useState("")
    const [work, setWork] = useState("")
    const [views, setViews] = useState(0)
    const [about, setAbout] = useState("")
    const [themeColor, setThemeColor] = useState("#ffffff")
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
    const [showSettingsModal, setShowSettingsModal] = useState(false)
    const [showProjectModal, setShowProjectModal] = useState(false)
    const [coverPhotoPreview, setCoverPhotoPreview] = useState("")
    const [profilePhotoPreview, setProfilePhotoPreview] = useState("")
    const [projects, setProjects] = useState([])
    const [socials, setSocials] = useState({})
    const [theme, setTheme] = useState(1)
    const [gradient, setGradient] = useState({ 'from': "#07B5D4", 'to': "#3884F4" })
    const [isGradient, setIsGradient] = useState(false)
    const [cv, setCv] = useState("")
    const router = useRouter()

    const maxViewCount = 6

    const next = () => setViewCount(viewCount + 1)
    const previous = () => setViewCount(viewCount - 1)

    const toggleIsAuthenticated = (val) => {
        sessionStorage.setItem('isAuth', val)
        setIsAuthenticated(eval(val))
    }

    useEffect(() => {
        setShowPreview(true)
        // checkAuthStatus()

        // console.log(window.location.hostname.split(".")[0])
        // console.warn("setting projects")

        // if ((screen.width <= 640) ||
        //     (window.matchMedia &&
        //         window.matchMedia('only screen and (max-width: 640px)').matches
        //     )) {
        //     setShowPreview(false)
        // }

        // else setShowPreview(true)

        // console.log(session.user)

        // const _authSessionValue = sessionStorage.getItem("isAuth")

        // if (!_authSessionValue) {
        //     sessionStorage.setItem("isAuth", false)
        //     setIsAuthenticated(false)
        //     console.log('null_', false)
        //     return
        // }

        // setIsAuthenticated(eval(_authSessionValue))

        // console.log('_authSessionValue', eval(_authSessionValue))

    }, [session])

    const saveNewChangesToStorage = (data) => {

        sessionStorage.setItem("data", JSON.stringify(data))
    }

    const increasePageViewCount = async (data) => {
        data.views++
        await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/user/update-user`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
    }

    const copyLink = async () => {
        try {
            await navigator.clipboard.writeText(`${process.env.NEXT_PUBLIC_APP_URL}/${username}`)
            alert("✅ Link copied")
        }

        catch (e) {
            console.log(e.message)
        }
    }

    const shareLink = async () => {
        try {
            await navigator.share({
                title: `Folio | ${fullname}`,
                text: 'Check out my Folio',
                url: `${process.env.NEXT_PUBLIC_APP_URL}/${username}`,
            })
        }

        catch (e) {
            console.log(e.message)
            // alert("Your browser doesn't support sharing")
        }
    }

    const uploadImage = async (_file) => {

        try {

            // const data = new FormData()
            // data.append("file", _file)
            // data.append("upload_preset", "follio_preset")
            // data.append("cloud_name", "follio")

            // const res = await fetch("https://api.cloudinary.com/v1_1/follio/image/upload", {
            //     method: "POST",
            //     mode: 'no-cors',
            //     body: data
            // })

            const data = new FormData()
            data.append("file", _file)
            data.append("upload_preset", "tutorial")
            data.append("cloud_name", "breellz")

            const res = await fetch("https://api.cloudinary.com/v1_1/breellz/image/upload", {
                method: "POST",
                body: data
            })

            const resData = await res.json()
            // console.log(res)

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

            console.log('updating username', username)

            let _body = {
                "gradient": gradient,
                "isGradient": isGradient,
                "cv": cv,
                "fullname": fullname,
                "username": username,
                "email": email,
                "tagline": tagline,
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
                "views": views,
                "themeColor": themeColor,
                "socials": socials,
            }

            const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/user/update-user`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(_body),
            })

            if (res.status !== 200) {
                setShowLoader(false)
                alert("An error occured. Please try again later.")
                return
            }

            setShowLoader(false)
            saveNewChangesToStorage(_body)

        } catch (e) {

            setShowLoader(false)
            alert("An error occured. Please try again later.")
            console.log(e.message)
        }
    }

    const saveAccountDataToStorage = async (data) => {

        try {

            sessionStorage.setItem("data", JSON.stringify(data))
            if (data.isGradient && data.isGradient) {
                setGradient(data.gradient)
                setIsGradient(data.isGradient)
            }
            setEmail(data.email)
            setFullname(data.fullname)
            setUsername(data.username)
            setTagline(data.tagline)
            setViews(data.views)
            setWork(data.work)
            setAbout(data.about)
            setProfilePhoto(data.profilePhoto)
            setCoverPhoto(data.coverPhoto)
            setShowGithubStats(data.showGithubStats)
            setSkills(data.skills)
            setWorkplaces(data.workplaces)
            setProjects(data.projects)
            setIsPremiumAccount(data.isPremiumAccount)
            setWorkplaces(data.workplaces)
            setSocials(data.socials)
            setTheme(data.theme)
            setThemeColor(data.themeColor)

        } catch (e) {

            console.log(e.message)
        }
    }

    const prefillFromSession = () => {

        // console.warn("prefilling", sessionStorage.getItem("data"))

        if (!sessionStorage.getItem("data")) {
            alert("No data found in storage. Please sign in again.")
            return
        }

        let sessionStorageData = JSON.parse(sessionStorage.getItem("data"))
        if (sessionStorageData.isGradient && sessionStorageData.isGradient) {
            setGradient(sessionStorageData.gradient)
            setIsGradient(sessionStorageData.isGradient)
        }
        setFullname(sessionStorageData.fullname)
        setEmail(sessionStorageData.email)
        setUsername(sessionStorageData.username)
        setTagline(sessionStorageData.tagline)
        setWork(sessionStorageData.work)
        setViews(sessionStorageData.views)
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
    }

    const changeThemeInSessionStorage = (index) => {
        console.log('New theme index, ', index)
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

    const logout = () => {
        sessionStorage.removeItem("data")
        setIsNewUser(false)
        signOut()
    }

    const formatUsername = (name) => {
        return (name.split(/\s+/).join("")).toLocaleLowerCase()
    }

    const setSuggestedThemeColor = (tailwindColor) => {
        let hex = tailwindColor.replace("bg-", "").replace("[", "").replace("]", "")
        saveThemeColorToStorage(hex)
        setThemeColor(hex)
    }

    const setIsNewUser = (status) => {
        sessionStorage.setItem('new-user', status)
    }

    const changeUsername = async () => {
        try {
            setShowLoader(true)

            const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/user/check-username-exists/${username}`, { method: "GET" })
            const data = await res.json()
            // console.log(data)

            if (data.payload) {
                alert("username already exists")
                setShowLoader(false)
                return
            }

            await updateAccount()
            setShowLoader(false)
        }

        catch (e) {
            console.log(e.message)
        }
    }

    /** Create Account */
    const createAccount = async () => {

        console.warn('Creating new account...🦄', session)

        setIsNewUser(true)

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/user/add-user`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: formatUsername(session.user.name),
                email: session.user.email,
                fullname: session.user.name,
                profilePhoto: session.user.image,
                coverPhoto: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80'
            }),
        })

        const data = await res.json()

        if (!data.status) {
            alert(data.error)
            return
        }

        fetchDataFromDB(session.user.email)
    }

    const checkAuthStatus = async () => {

        if (!session) {
            /** When no user logged in */
            console.warn("not logged in at all")
            return false
        }

        if (session && session.user && !sessionStorage.getItem("data")) {
            /** Is logged in but no data */
            console.warn("session, no data")
            await fetchDataFromDB(session.user.email)
            return true
        }

        if (session && session.user && sessionStorage.getItem("data")) {
            /** when user is fully logged in */
            console.warn("logged in, data")
            return true
        }

        return false
    }

    const fetchDataFromDB = async (_email) => {
        try {
            console.warn("fetching data from DB", _email)
            const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/user/get-user/${_email}`, { method: "GET" })
            const data = await res.json()

            /** When account is not in DB, create new account */
            if (!data.status) {
                console.error("no user data in DB", data)
                await createAccount()
                return
            }

            /** When account exists */
            // console.log("got data", data.payload)
            saveAccountDataToStorage(data.payload)
            prefillFromSession()
            router.push("/account/edit")
        }

        catch (e) {
            console.log(e.message)
            alert("An error occured please try again later")
        }
    }

    const initAuthentication = async () => {
        try {

            if (!await checkAuthStatus()) {
                console.warn("logging in")
                await signIn("google")
                return
            }

            router.replace("/account/edit")

        } catch (e) {

            // setShowLoader(false)
            alert("An error occured. Please try again later.")
            console.log(e.message)
        }
    }

    const getAllUsers = async () => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/user/get-all-users`, { method: "GET" })
            const data = await res.json()
            return data.payload
        }

        catch (e) {
            console.log(e.message)
            return []
        }
    }

    return <AppContext.Provider value={{
        viewCount, setViewCount,
        next,
        previous,
        getAllUsers,
        maxViewCount,
        fullname, setFullname,
        work, setWork,
        about, setAbout,
        themeColor, setThemeColor,
        skills, setSkills, email,
        isAuthenticated, toggleIsAuthenticated,
        showGithubStats, setShowGithubStats,
        showPreview, setShowPreview,
        isPremiumAccount,
        updateAccount, username,
        saveAccountDataToStorage, initAuthentication,
        showLogin, setShowLogin,
        prefillFromSession,
        showLoader, setShowLoader,
        coverPhotoPreview, setCoverPhotoPreview,
        coverPhoto, profilePhoto,
        profilePhotoPreview, setProfilePhotoPreview,
        theme, changeThemeInSessionStorage,
        saveThemeColorToStorage,
        socials, setSocials,
        projects, setProjects,
        uploadImage,
        tagline, setTagline,
        increasePageViewCount,
        views, shareLink, logout, copyLink,
        setSuggestedThemeColor,
        setIsNewUser, username, setUsername,
        formatUsername,
        changeUsername, checkAuthStatus,
        gradient, isGradient, cv, setIsGradient, setGradient,
        showSettingsModal, setShowSettingsModal,
        showProjectModal, setShowProjectModal,
    }}>
        {children}
    </AppContext.Provider>
}