import { createContext, useEffect } from "react"

export const BFContext = createContext()

export const BFProvider = ({ children }) => {

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

    return <BFContext.Provider value={{
        createAccount,
        connectMoralisWallet
    }}>
        {children}
    </BFContext.Provider>
}