import { useRouter } from "next/dist/client/router"
import { useContext, useEffect, useState } from "react"
import google from "../assets/svg/google.svg"
import logo from "../assets/logo.png"
// import Button from "../button"
// import Loader from "../loader"

import { useSession, signIn, signOut } from 'next-auth/react'
import { AppContext } from "../context/context"
// import Logo from "../components/logo"
import GoogleButton from "../components/buttons/googleButton"
import Logo from "../components/logo"
import Button from "../components/buttons/button"
import DarkButton from "../components/buttons/darkButton"
import GhostButton from "../components/buttons/ghostButton"
// import GoogleButtton from "../components/buttons/googleButton"

const styles = {
    title: `text-3xl sm:text-6xl mb-2 font-extrabold text-center`,
    mainInputBox: `bg-white p-5 rounded-md text-center sm:w-6/12`,
    main: `w-screen h-screen flex flex-col items-center justify-center bg-[#fff]`,
    // mainInputBox: `p-5 rounded-xl w-11/12 sm:max-w-lg px-5 bg-white shadow-xl`,
}

const Auth = () => {
    const { initAuthentication, prefillFromSession, checkAuthStatus } = useContext(AppContext)
    const { data: session } = useSession()
    const router = useRouter()
    // const [isChecked, setIsChecked] = useState(false)

    useEffect(() => {
        // if (window.sessionStorage.getItem('data')) {
        //     console.log("user exists in session")
        //     prefillFromSession()
        //     router.push("/account/edit")
        //     return
        // }

        // if (session) {
        //     console.warn('session 🐛', session.user)
        //     initAuthentication(session)
        // }

        // console.log(session.ussser)
        // console.warn('❎ No user session')

        // initAuthentication()

        onload()

    }, [session])

    const onload = async () => {
        console.warn("auth status", await checkAuthStatus())
        // if (!await checkAuthStatus())
    }

    // if (!session) return <div className={styles.main}>

    return <div className={styles.main}>
        <div className={styles.mainInputBox}>
            {/* add logo here */}
            {/* <img src={logo.src} style={{ width: "30px", margin: "auto", marginBottom: "20px" }} /> */}
            {/* <p className={styles.title}>Website building made simple</p> */}
            <div className="flex items-center justify-center">
                <Logo />
            </div>
            <p className="sm:mt-5 sm:text-2xl opacity-50">Ship your portfolio in less than 2 minutes</p>


            {
                session && session.user && sessionStorage.getItem("data") ?
                    <div>
                        <p className="mt-10">Logged in as {session.user.email}</p>

                        <div className="flex justify-center items-center mt-10">
                            <DarkButton label="Go home" action={
                                async () => {
                                    await prefillFromSession()
                                    router.push("/account/edit")
                                }
                            } />
                            <GhostButton label="Logout" action={signOut} />
                        </div>
                    </div>
                    : <div>
                        <div className="my-10 mb-3">
                            <GoogleButton
                                label="Continue with Google"
                                icon={google.src}
                                action={initAuthentication}
                            />
                        </div>
                    </div>
            }

            {/* <div className="flex justify-center items-center">
                <input type="checkbox" checked={isChecked} onChange={e => setIsChecked(e.target.checked)} className="mr-2 cursor-pointer" />
                There are no terms and conditions haha
            </div> */}
        </div>

    </div>

}

export default Auth