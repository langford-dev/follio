import { createContext, useEffect } from "react"

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
    const 
    return <AppContext.Provider>
        {children}
    </AppContext.Provider>
}