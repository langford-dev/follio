import { useRouter } from "next/dist/client/router"
import { useContext, useEffect, useState } from "react"
import google from "../assets/svg/google.svg"
import logo from "../assets/logo.png"
import { useSession, signIn, signOut } from 'next-auth/react'
import { AppContext } from "../context/context"
import GoogleButton from "../components/buttons/googleButton"
import Logo from "../components/logo"
import DarkButton from "../components/buttons/darkButton"
import GhostButton from "../components/buttons/ghostButton"

const styles = {
    title: `text-3xl sm:text-6xl mb-2 font-extrabold text-center`,
    mainInputBox: ` p-5 rounded-md text-center sm:w-6/12`,
    main: `w-screen h-screen flex flex-col items-center justify-center`,
}

const Auth = () => {
    const { initAuthentication, prefill, logout, isNewUser, checkAuthStatus } = useContext(AppContext)
    const { data: session } = useSession()
    const router = useRouter()

    useEffect(() => {
        onload()
    }, [session])

    const onload = async () => {
        console.warn("auth status", await checkAuthStatus())
        console.log('isNewUser', isNewUser)
        // console.log(session)
        // console.log("Auth", sessionStorage.getItem("data"))
    }

    return <div className={styles.main}>
        <div className={styles.mainInputBox}>
            <div className="flex items-center justify-center mb-5">
                <Logo />
            </div>
            {/* <p className="sm:mt-5 sm:text-5xl font-extrabold text-brand max-w-2xl leading-tight m-auto">Ship your portfolio in less than 2 minutes</p> */}
            <p className="sm:mt-5 text-2xl sm:text-3xl leading-tight m-auto">Sign up/Log in</p>
            {
                (session && session) && (session.user && sessionStorage.getItem("data")) ?
                    <div>
                        <p className="mt-10 opacity-50">Logged in as {session.user.email}</p>

                        <div className="flex justify-center items-center mt-10">
                            <DarkButton label="Go home" action={
                                async () => {
                                    await prefill(JSON.parse(sessionStorage.getItem("data")))
                                    if (isNewUser) router.push("/account/edit")
                                    else router.push("/account/edit")
                                }
                            } />
                            <GhostButton label="Logout" action={logout} />
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
        </div>

    </div>

}

export default Auth