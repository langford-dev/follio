import { useRouter } from "next/dist/client/router"
import { useContext, useState } from "react"
import { AppContext } from "../../context/context"

const styles = {
    inputContainer: `flex flex-col mb-10`,
    input: `outline-none w-full border px-3 py-2`,
    label: `mb-2 flex items-center justify-between`,
    button: `select-none bg bg-blue-600 text-white h-10 px-5 flex items-center justify-center rounded-md cursor-pointer`,
}

const Login = () => {
    const { login, setShowLogin } = useContext(AppContext)

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    return <div className="w-screen h-screen flex items-center justify-center">
        <div className="p-5 rounded-md w-full sm:w-4/12">
            <p className="font-bold text-4xl mb-10">Welcome back :)</p>

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

            <p className="mt-3 font-bold cursor-pointer" onClick={() => setShowLogin(false)}>Sign me up yo!</p>
        </div>
    </div>
}

export default Login