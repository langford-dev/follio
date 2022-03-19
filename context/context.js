import { useState } from "react"
import { createContext } from "react"

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
    let [viewCount, setViewCount] = useState(0)
    let [fullname, setFullname] = useState("")
    let [title, setTitle] = useState("")
    let [about, setAbout] = useState("")
    let [themeColor, setThemeColor] = useState("")
    let [skills, setSkills] = useState([])

    const [twitter, setTwitter] = useState("")
    const [facebook, setFacebook] = useState("")
    const [instagram, setInstagram] = useState("")
    const [linkedin, setLinkedin] = useState("")
    const [github, setGithub] = useState("")
    const [coffee, setCoffee] = useState("")

    let maxViewCount = 2

    // const _usernames = {
    //     twitter: 'https://twitter.com/' + twitter,
    //     facebook: 'https://facebook.com/' + facebook,
    //     linkedin: 'https://linkedin.com/' + linkedin,
    //     github: 'https://github.com/' + github,
    //     instagram: 'https://instagram.com/' + instagram,
    // }

    const next = () => setViewCount(viewCount + 1)

    const previous = () => setViewCount(viewCount - 1)

    return <AppContext.Provider value={{
        viewCount,
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
        usernames: { twitter, facebook, instagram, linkedin, github, coffee }
    }}>
        {children}
    </AppContext.Provider>
}