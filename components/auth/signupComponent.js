import { useRouter } from "next/dist/client/router"
import { useContext, useState } from "react"
import { AppContext } from "../../context/context"
import Loader from "../loader"

const styles = {
    // main: `w-screen h-screen flex flex-col items-center justify-center`,
    main: `w-screen h-screen flex flex-col items-center justify-center bg-gradient-to-tl from-rose-100 to-teal-100`,
    inputContainer: `flex flex-col mb-5`,
    input: `outline-none w-full border p-2 rounded-md`,
    label: `mb-2 flex items-center justify-between font-medium text-gray-600`,
    title: `text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-pink-600`,
    // title: `font-bold text-3xl text-center text-white`,
    mainInputBox: `p-5 rounded-md w-11/12 sm:max-w-lg px-5 bg-white border`,
    subtext: `text-center mt-3 mb-10`,
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

    else return <div className={styles.main}>
        <p className={styles.title}>Yooo whats up?</p>
        <p className={styles.subtext}>You new? enter your username and choose a password 🤠</p>
        <div className={styles.mainInputBox}>
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