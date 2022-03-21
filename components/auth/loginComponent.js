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

const LoginComponent = () => {
    const { login, setShowLogin, showLoader } = useContext(AppContext)

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    if (showLoader) return <Loader />

    else return <div className="w-screen h-screen flex items-center justify-center bg-white">
        <div className="p-5 rounded-md w-full sm:max-w-lg px-10">
            <p className="font-bold text-2xl mb-1 text-center">Welcome back 😋</p>
            <p className="text-center mb-5 text-gray-500">ayee! nice to see you again :)</p>

            <div className={styles.inputContainer}>
                <label className={styles.label}>Username</label>
                <input className={styles.input} value={username} onChange={e => {
                    setUsername((e.target.value).split(/\s+/).join("").toLocaleLowerCase().trim())
                }} />
            </div>

            <div className={styles.inputContainer}>
                <label className={styles.label}>Password</label>
                <input type="password" value={password} className={styles.input} onChange={e => setPassword(e.target.value)} />
            </div>

            <p className="mb-3 -mt-3 text-red-700">{error}</p>

            <div className={styles.button} onClick={() => login(username, password)}>Lets go🚀</div>

            <p className="mt-5 font-bold cursor-pointer text-center" onClick={() => setShowLogin(false)}>Sign me up yo!</p>
        </div>
    </div>
}

export default LoginComponent