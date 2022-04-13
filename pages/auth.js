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
    mainInputBox: `bg-white p-5 rounded-md text-center sm:w-6/12`,
    main: `w-screen h-screen flex flex-col items-center justify-center bg-[#fff]`,
}

const Auth = () => {
    const { initAuthentication, prefillFromSession, logout, checkAuthStatus } = useContext(AppContext)
    const { data: session } = useSession()
    const router = useRouter()

    useEffect(() => {
        onload()
    }, [session])

    const onload = async () => {
        console.warn("auth status", await checkAuthStatus())
    }

    return <div className={styles.main}>
        <div className={styles.mainInputBox}>
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