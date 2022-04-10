import { useRouter } from "next/dist/client/router"
import { useState, useEffect } from "react"
import { createContext } from "react"
import { getProviders, signIn, signOut, useSession } from "next-auth/react"

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
    const { data: session } = useSession()

    const [viewCount, setViewCount] = useState(0)
    const [fullname, setFullname] = useState("")
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
    const router = useRouter()

    const maxViewCount = 6

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

            const data = await res.json()

            // console.log(data)

            setShowLoader(false)

            saveNewChangesToStorage(_body)

            // readDataFromStorage()

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

    const readDataFromStorage = () => {

        if (!sessionStorage.getItem("data")) {
            alert("No data found in storage. Please sign in again.")
            return
        }

        let sessionStorageData = JSON.parse(sessionStorage.getItem("data"))

        setFullname(sessionStorageData.fullname)
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

    /** Create Account */
    const createAccount = async (_session) => {
        console.warn('Creating new account...🦄', formatUsername(_session.user.name))
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

        // console.log(data)

        if (!data.status) {
            alert(data.error)
            return
        }

        fetchUserData(_session)
    }

    const fetchUserData = async (_session) => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/user/get-user/${_session.user.email}`, { method: "GET" })
            const data = await res.json()

            /** When account is not in DB */
            if (!data.status) {
                await createAccount(_session);
                return
            }

            /** When account exists */
            // console.log(data.payload)
            saveAccountDataToStorage(data.payload)
            readDataFromStorage()
            router.push("/")


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
        saveAccountDataToStorage, fetchUserData,
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
        tagline, setTagline,
        increasePageViewCount,
        views, shareLink, logout, copyLink,
        setSuggestedThemeColor,
        showProjectModal, setShowProjectModal,
    }}>
        {children}
    </AppContext.Provider>
}