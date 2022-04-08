import { useRouter } from "next/dist/client/router"
import { useContext, useEffect, useState } from "react"
import google from "../assets/svg/google.svg"
// import Button from "../button"
// import Loader from "../loader"

import { useSession, signIn } from 'next-auth/react'
import { AppContext } from "../context/context"
import Logo from "../components/logo"
import GoogleButton from "../components/buttons/googleButton"
// import GoogleButtton from "../components/buttons/googleButton"

const styles = {
    title: `text-3xl sm:text-5xl mb-2 font-extrabold text-center`,
    mainInputBox: `bg-white p-5 rounded-md`,
    main: `w-screen h-screen flex flex-col items-center justify-center bg-[#fff]`,
    // mainInputBox: `p-5 rounded-xl w-11/12 sm:max-w-lg px-5 bg-white shadow-xl`,
}

const Auth = () => {
    const { fetchUserData, readDataFromStorage } = useContext(AppContext)
    const { data: session } = useSession()
    const [isChecked, setIsChecked] = useState(false)
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

    const authenticate = () => {

        if (!isChecked) {
            alert("Please accept terms and conditions")
            return
        }

        signIn("google")
    }

    if (!session) return <div className={styles.main}>
        <div className={styles.mainInputBox}>
            {/* add logo here */}
            <p className={styles.title}>Welcome 🚀</p>
            <p>Enter a new world of possibilities</p>
            <div className="my-10 mb-3">
                <GoogleButton
                    label="Continue with Google"
                    icon={google.src}
                    onPressed={() => authenticate()}
                />
            </div>
            <div className="flex items-center">
                <input type="checkbox" checked={isChecked} onChange={e => setIsChecked(e.target.checked)} className="mr-2 cursor-pointer" />
                There are no terms and conditions haha
            </div>
        </div>
    </div>

    return <></>
}

export default Auth