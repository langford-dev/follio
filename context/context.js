import { useState } from "react"
import { createContext, useEffect } from "react"

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
    let [viewCount, setViewCount] = useState(0)
    let [fullname, setFullname] = useState("")
    let [title, setTitle] = useState("")
    let [about, setAbout] = useState("")
    let maxViewCount = 2

    useEffect(() => {
        // const _fullname = sessionStorage.getItem("fullname")
        // const _title = sessionStorage.getItem("title")
        // const _about = sessionStorage.getItem("about")

        // if (_fullname) setFullname(_fullname)
        // if (_title) setTitle(_title)
        // if (_about) setAbout(_about)

        // console.log(fullname, title, about)

    }, [fullname, title, about])

    const saveIntroValues = (_fullname, _title, _about) => {
        // sessionStorage.setItem("fullname", _fullname)
        // sessionStorage.setItem("title", _title)
        // sessionStorage.setItem("about", _about)

        // console.log(fullname, title, about)
        // console.log("_", fullname, title, about)
    }

    const next = () => setViewCount(viewCount + 1)

    const previous = () => setViewCount(viewCount - 1)

    return <AppContext.Provider value={{
        viewCount,
        next,
        previous,
        maxViewCount,
        fullname, setFullname,
        title, setTitle,
        about, setAbout
    }}>
        {children}
    </AppContext.Provider>
}