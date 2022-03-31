import { useRouter } from "next/dist/client/router"
import { useContext, useState } from "react"
import { AppContext } from "../../context/context"
import Button from "../button"
import Loader from "../loader"

const styles = {
    // main: `w-screen h-screen flex flex-col items-center justify-center`,
    // main: `w-screen h-screen flex flex-col items-center justify-center bg-gradient-to-r from-rose-100 to-teal-100`,
    main: `w-screen h-screen flex flex-col items-center justify-center bg-yellow-300`,
    inputContainer: `flex flex-col mb-5`,
    input: `outline-none w-full border p-2 rounded-xl`,
    label: `mb-2 flex items-center justify-between font-medium text-gray-600`,
    title: `text-3xl sm:text-5xl font-extrabold overflow-hidden`,
    mainInputBox: `p-5 rounded-xl w-11/12 sm:max-w-lg px-5 bg-white shadow-xl`,
    subtext: `-mt-3 mb-10`,
    inputBoxLabel: `text-3xl font-extrabold mb-5`
}

const LoginComponent = () => {
    const { login, setShowLogin, showLoader } = useContext(AppContext)

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    if (showLoader) return <Loader />

    else return <div className={styles.main}>
        {/* <p className={styles.title}>Welcome back</p>
        <p className={styles.subtext}>ayee! nice to see you again 😋</p> */}
        <div className={styles.mainInputBox}>
            <p className={styles.inputBoxLabel}>Sign in</p>
            <p className={styles.subtext}>ayee! nice to see you again 😋</p>
            <div className={styles.inputContainer}>
                {/* <label className={styles.label}>Username</label> */}
                <input className={styles.input} value={username} placeholder="Username" onChange={e => {
                    setUsername((e.target.value).split(/\s+/).join("").toLocaleLowerCase().trim())
                }} />
            </div>

            <div className={styles.inputContainer}>
                {/* <label className={styles.label}>Password</label> */}
                <input type="password" value={password} placeholder="Password" className={styles.input} onChange={e => setPassword(e.target.value)} />
            </div>

            <p className="mb-3 -mt-3 text-red-700">{error}</p>

            <div className="mt-3">
                <Button label="Lets go🚀" onPress={() => login(username, password)} />
            </div>

            <p className="mt-5 font-bold cursor-pointer text-center" onClick={() => setShowLogin(false)}>Sign me up yo!</p>
        </div>
    </div>
}

export default LoginComponent