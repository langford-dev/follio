import { useState } from "react"
import { createContext, useEffect } from "react"

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
    const [viewCount, setViewCount] = useState(0)

    const next = () => setViewCount(viewCount + 1)
    const previous = () => setViewCount(viewCount - 1)

    return <AppContext.Provider value={{
        viewCount,
        next,
        previous
    }}>
        {children}
    </AppContext.Provider>
}