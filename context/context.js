import { useState } from "react"
import { createContext, useEffect } from "react"

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
    const [viewCount, setViewCount] = useState(0)
    const [fullname, setFullname] = useState("")
    const [title, setTitle] = useState("")
    const [about, setAbout] = useState("")

    const maxViewCount = 2

    const next = () => {
        setViewCount(viewCount + 1)
        console.log('next', viewCount)
    }

    const previous = () => {
        setViewCount(viewCount - 1)
        console.log('previous', viewCount)
    }

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