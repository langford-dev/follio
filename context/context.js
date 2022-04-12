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
            // console.log("Your browser does not support clipboard")
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
            console.log(res)

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
            // 055862247 - abigail nani
            console.log('updating username', username)

            let _body = {
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

            // const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/user/get-user/${_username}`, { method: "GET" })
            // const data = await res.json()
            // delete data.payload["password"];
            // toggleIsAuthenticated(true)

            sessionStorage.setItem("data", JSON.stringify(data))

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

        if (!sessionStorage.getItem("data")) {
            alert("No data found in storage. Please sign in again.")
            return
        }

        let sessionStorageData = JSON.parse(sessionStorage.getItem("data"))

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
            console.log(data)

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
    const createAccount = async (_session) => {
        console.warn('Creating new account...🦄', formatUsername(_session.user.name))

        setIsNewUser(true)

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/user/add-user`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: formatUsername(_session.user.name),
                email: _session.user.email,
                fullname: _session.user.name,
                profilePhoto: _session.user.image,
                coverPhoto: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80'
            }),
        })

        const data = await res.json()

        if (!data.status) {
            alert(data.error)
            return
        }

        initAccount(_session)
    }

    const initAccount = async (_session) => {
        try {
            console.log("initAccount>", initAccount)

            const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/user/get-user/${_session.user.email}`, { method: "GET" })
            const data = await res.json()

            /** When account is not in DB */
            if (!data.status) {
                console.error("doesnt have an account in DB")
                await createAccount(_session);
                return
            }

            /** When account exists */
            saveAccountDataToStorage(data.payload)
            prefillFromSession()
            router.push("/account/edit")


        } catch (e) {

            // setShowLoader(false)
            // alert("An error occured. Please try again later.")
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
        saveAccountDataToStorage, initAccount,
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
        changeUsername,
        showSettingsModal, setShowSettingsModal,
        showProjectModal, setShowProjectModal,
    }}>
        {children}
    </AppContext.Provider>
}