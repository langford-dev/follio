import { useState } from "react/cjs/react.production.min"
import { createContext, useEffect } from "react"

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
    const [viewCount, setViewCount] = useState(0)

    return <AppContext.Provider>
        {children}
    </AppContext.Provider>
}