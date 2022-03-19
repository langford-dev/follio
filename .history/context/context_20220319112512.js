import { useState } from "react"
import { createContext, useEffect } from "react"

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
    const [viewCount, setViewCount] = useState(0)

    const next = () => {
        setViewCount(viewCount + 1)
        console.log('next', viewCount)
    }

    const previous = () => {
        {
            setViewCount(viewCount + 1)
            console.log('next', viewCount)
        }
    }

    return <AppContext.Provider value={{
        viewCount,
        next,
        previous
    }}>
        {children}
    </AppContext.Provider>
}