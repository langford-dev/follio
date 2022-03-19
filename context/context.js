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

    let maxViewCount = 2

    console.log(`${themeColor}`)

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
        skills, setSkills
    }}>
        {children}
    </AppContext.Provider>
}