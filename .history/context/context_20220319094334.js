import { createContext, useEffect } from "react"

export const AppContext = createContext()

export const AppProvider = ({ children }) => {

    useEffect(() => {

    }, [])

    /* insert user data into sanity */

    const createAccount = () => { }

    const connectMoralisWallet = async (connectorId) => {

        try {

            // createAccount()
        }

        catch (e) {
            console.log(e.message)
        }
    }

    return <AppContext.Provider value={{
        createAccount,
        connectMoralisWallet
    }}>
        {children}
    </AppContext.Provider>
}