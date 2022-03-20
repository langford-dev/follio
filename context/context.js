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
    const [isPremiumAccount, setIsPremiumAccount] = useState(false)
    const [showPreview, setShowPreview] = useState(false)
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const [twitter, setTwitter] = useState("")
    const [facebook, setFacebook] = useState("")
    const [instagram, setInstagram] = useState("")
    const [linkedin, setLinkedin] = useState("")
    const [github, setGithub] = useState("")
    const [coffee, setCoffee] = useState("")
    const [ethAddress, setEthAddress] = useState("")

    const maxViewCount = 3
    // const isAuthenticated = sessionStorage.getItem('isAuth')

    const next = () => setViewCount(viewCount + 1)
    const previous = () => setViewCount(viewCount - 1)

    const toggleIsAuthenticated = (val) => {
        sessionStorage.setItem('isAuth', val)
        setIsAuthenticated(eval(val))
    }

    // console.log('eval(val)', eval(val))

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
        usernames: { twitter, facebook, instagram, linkedin, github, coffee, ethAddress }
    }}>
        {children}
    </AppContext.Provider>
}