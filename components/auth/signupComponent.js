import { useRouter } from "next/dist/client/router"
import { useContext, useState } from "react"
import { AppContext } from "../../context/context"
import Loader from "../loader"

const styles = {
    inputContainer: `flex flex-col mb-5`,
    input: `outline-none w-full border py-2 px-5 rounded-md`,
    label: `mb-2 flex items-center justify-between font-medium text-gray-600`,
    button: `mt-10 select-none bg bg-blue-600 text-white h-10 px-5 flex items-center justify-center rounded-md cursor-pointer`,
}

const SignupComponent = () => {
    const { getAccountData, setShowLogin, showLoader, setShowLoader, readDataFromStorage } = useContext(AppContext)

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [usernameExists, setsernameExists] = useState(null)
    const [error, setError] = useState("")

    const checkUsernameExists = async (str) => {

        try {

            const res = await fetch(`https://folio-backend-server.herokuapp.com/user/check-username-exists/${str}`, { method: "GET" })
            const data = await res.json()
            if (data.status) setsernameExists(data.payload)

        } catch (e) {
            console.log(e.message)
        }
    }

    const signupUser = async () => {

        try {

            console.log(username, password)

            if (username.trim() === "" || password.trim() === "") return

            setShowLoader(true)

            const res = await fetch("https://folio-backend-server.herokuapp.com/user/add-user", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            })

            const data = await res.json()

            if (!data.status) {

                setShowLoader(false)
                setError(data.error)
                return
            }

            await getAccountData(username)

            await readDataFromStorage()

            setShowLoader(false)

        } catch (e) {

            setShowLoader(false)
            console.log(e.message)
        }
    }

    if (showLoader) return <Loader />

    else return <div className="w-screen h-screen flex items-center justify-center bg-white">
        <div className="p-5 rounded-md w-full sm:max-w-lg px-10">
            <p className="font-bold text-2xl mb-1 text-center">Yooo whats up? 👋</p>
            <p className="text-center mb-5 text-gray-500">You new? enter your username and choose a password</p>

            <div className={styles.inputContainer}>
                <label className={styles.label}>Username
                    <span>
                        {
                            usernameExists === true ? <span className="text-red-700">Not available</span> : <span className="text-green-600">Available</span>
                        }
                    </span>
                </label>
                <input className={styles.input} value={username} onChange={e => {
                    setUsername((e.target.value).split(/\s+/).join("").toLocaleLowerCase().trim())
                    checkUsernameExists(e.target.value)
                }} />
            </div>

            <div className={styles.inputContainer}>
                <label className={styles.label}>Password</label>
                <input type="password" value={password} className={styles.input} onChange={e => setPassword(e.target.value)} />
            </div>

            <p className="-mb-5 mt-5 text-red-700">{error}</p>

            <div className={styles.button} onClick={signupUser}>Lets go🚀</div>

            <p className="mt-5 font-bold cursor-pointer text-center" onClick={() => setShowLogin(true)}>Login me in</p>
        </div>
    </div>
}

export default SignupComponent