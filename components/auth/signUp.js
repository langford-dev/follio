import { useRouter } from "next/dist/client/router"
import { useContext, useState } from "react"
import { AppContext } from "../../context/context"

const styles = {
    inputContainer: `flex flex-col mb-10`,
    input: `outline-none w-full border px-3 py-2`,
    label: `mb-2 flex items-center justify-between`,
    button: `select-none bg bg-blue-600 text-white h-10 px-5 flex items-center justify-center rounded-md cursor-pointer`,
}

const SignUp = () => {
    const { toggleIsAuthenticated, getAccountData } = useContext(AppContext)

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [usernameExists, setsernameExists] = useState(null)
    const [error, setError] = useState("")

    const checkUsernameExists = async (str) => {

        try {

            const res = await fetch(`http://localhost:2003/user/check-username-exists/${str}`, { method: "GET" })
            const data = await res.json()
            if (data.status) setsernameExists(data.payload)

        } catch (e) {
            console.log(e.message)
        }
    }

    const signup = async () => {

        try {

            console.log(username, password)

            if (username.trim() === "" || password.trim() === "") return

            const res = await fetch("http://localhost:2003/user/add-user", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            })

            const data = await res.json()

            if (!data.status) {

                setError(data.error)
                return
            }

            getAccountData(username)

        } catch (e) {

            console.log(e.message)
        }
    }

    return <div className="w-screen h-screen flex items-center justify-center">
        <div className="p-5 rounded-md w-full sm:w-4/12">
            <p className="font-bold text-4xl mb-10">Heyoo 👋 Lets go!</p>

            <div className={styles.inputContainer}>
                <label className={styles.label}>Username
                    <span>
                        {
                            usernameExists ? <span className="text-red-700">Not available</span> : <span className="text-green-600">Available</span>
                        }
                    </span> </label>
                <input className={styles.input} value={username} onChange={e => {
                    setUsername((e.target.value).split(/\s+/).join("").toLocaleLowerCase().trim())
                    checkUsernameExists(e.target.value)
                }} />
            </div>

            <div className={styles.inputContainer}>
                <label className={styles.label}>Password</label>
                <input type="password" value={password} className={styles.input} onChange={e => setPassword(e.target.value)} />
            </div>

            <p className="mb-3 -mt-3 text-red-700">{error}</p>

            <div className={styles.button} onClick={signup}>Lets go🚀</div>
        </div>
    </div>
}

export default SignUp