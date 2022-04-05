import { useRouter } from "next/dist/client/router"
import { useContext, useEffect, useState } from "react"
import google from "../assets/svg/google.svg"
// import Button from "../button"
// import Loader from "../loader"

import { useSession, signIn } from 'next-auth/react'
import { AppContext } from "../context/context"

const styles = {
    // main: `w-screen h-screen flex flex-col items-center justify-center`,
    // main: `w-screen h-screen flex flex-col items-center justify-center bg-gradient-to-r from-rose-100 to-teal-100`,
    main: `w-screen h-screen flex flex-col items-center justify-center bg-yellow-300`,
    inputContainer: `flex flex-col mb-5`,
    input: `outline-none w-full border p-2 rounded-xl`,
    label: `mb-2 flex items-center justify-between font-medium text-gray-600`,
    title: `text-3xl font-extrabold mb-5`,
    mainInputBox: ``,
    // mainInputBox: `p-5 rounded-xl w-11/12 sm:max-w-lg px-5 bg-white shadow-xl`,
    subtext: `-mt-3 mb-10`,
    inputBoxLabel: `text-3xl font-extrabold mb-5`
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

    // const [username, setUsername] = useState("")
    // const [password, setPassword] = useState("")
    // const [error, setError] = useState("")
    // if (showLoader) return <Loader />

    if (!session) return <div className={styles.main}>
        <p className={styles.title}>Nice to meet you</p>
        <div className={styles.mainInputBox}>
            <p onClick={() => signIn("google")} className="bg-white shadow-xl w-full border-black hover:opacity-70 flex items-center justify-center cursor-pointer font-bold border rounded-md px-3 py-1">
                <img src={google.src} className="w-10" />
                Continue with Google
            </p>
        </div>
    </div>

    return <></>
}

export default Auth
// import Link from 'next/link'
// import { useSession, signIn, signOut } from 'next-auth/react'

// export default function Header() {
//     const { data: session } = useSession();

//     console.log(session)

//     const handleSignin = (e) => {
//         e.preventDefault()
//         signIn()
//     }

//     const handleSignout = (e) => {
//         e.preventDefault()
//         signOut()
//     }

//     return (
//         <div className='header'>
//             <Link href='/'>
//                 <a className='logo'>NextAuth.js</a>
//             </Link>
//             {session && <a href="#" onClick={handleSignout} className="btn-signin">Sign out</a>}
//             {!session && <a href="#" onClick={handleSignin} className="btn-signin">Sign in</a>}
//         </div>
//     )
// }