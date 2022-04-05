import { useEffect } from "react"
import { useRouter } from 'next/router'
import EditView from "../components/editView"
import Header from "../components/header"
import SideNav from "../components/side-nav/sideNav"
import { mainStyles } from "../components/styles/mainStyles"
import { useSession } from 'next-auth/react'

const Edit = () => {
    const router = useRouter()
    const { data: session } = useSession();

    useEffect(() => {
        if (!session) {
            router.replace("/auth")
            return
        }
    }, [session])

    if (session) return <div className={mainStyles.main}>
        <Header />
        <SideNav />
        <div className={mainStyles.mainContentView}>
            <EditView />
        </div>
    </div>

    return <></>

    // const { isAuthenticated, showLogin, readDataFromStorage } = useContext(AppContext)

    // useEffect(() => {
    //     if (isAuthenticated) readDataFromStorage()
    // }, [isAuthenticated])

    // if (!isAuthenticated && showLogin) return <LoginComponent />
    // if (!isAuthenticated && !showLogin) return <SignupComponent />

    // else return <div className={mainStyles.main}>
    //     <SideNav />
    //     <div className={mainStyles.mainContentView}>
    //         <EditView />
    //     </div>
    // </div>
}

export default Edit

// const Edit = () => {
//     // const router = useRouter()
//     // const { isAuthenticated, readDataFromStorage } = useContext(AppContext)

//     // useEffect(() => {

//     //     readDataFromStorage()
//     //     if (!isAuthenticated) router.push("/")

//     // }, [isAuthenticated])

    // const { isAuthenticated, showLogin, readDataFromStorage } = useContext(AppContext)

    // useEffect(() => {
    //     if (isAuthenticated) readDataFromStorage()
    // }, [isAuthenticated])

    // if (!isAuthenticated && showLogin) return <LoginComponent />
    // if (!isAuthenticated && !showLogin) return <SignupComponent />

//     else return <div>
//         {/* <Header /> */}
//         <EditView />
//     </div>
// }

// export default Edit