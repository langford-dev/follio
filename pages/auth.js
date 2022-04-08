import { useRouter } from "next/dist/client/router"
import { useContext, useEffect } from "react"
import google from "../assets/svg/google.svg"
// import Button from "../button"
// import Loader from "../loader"

import { useSession, signIn } from 'next-auth/react'
import { AppContext } from "../context/context"

const styles = {
    title: `text-3xl font-extrabold mb-5 text-center`,
    main: `w-screen h-screen flex flex-col items-center justify-center bg-yellow-300`,
    // mainInputBox: `p-5 rounded-xl w-11/12 sm:max-w-lg px-5 bg-white shadow-xl`,
}

const Auth = () => {
    const { fetchUserData, readDataFromStorage } = useContext(AppContext)
    const { data: session } = useSession()
    const router = useRouter()

    useEffect(() => {
        if (window.sessionStorage.getItem('data')) {
            readDataFromStorage()
            router.push("/edit")
            return
        }

        if (session) {
            console.warn('session 🐛', session.user)
            fetchUserData(session)
        }

        console.warn('❎ No user session')
    }, [session])

    if (!session) return <div className={styles.main}>
        <div className={styles.mainInputBox}>
            <p className={styles.title}>Nice to meet you</p>
            <p onClick={() => signIn("google")} className="bg-white border-dark hover:opacity-70 flex items-center justify-center cursor-pointer font-bold border rounded-md px-3 py-1">
                <img src={google.src} className="w-10" />
                Continue with Google
            </p>
        </div>
    </div>

    return <></>
}

export default Auth