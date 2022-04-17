import { useEffect } from "react"
import { useRouter } from 'next/router'
import EditView from "../../components/editView"
// import Header from "../../components/header"
import SideNav from "../../components/side-nav/sideNav"
import { mainLayoutStyles } from "../../components/styles/mainLayoutStyles"
import { useSession } from 'next-auth/react'
import Header from "../../components/header/header"

const Edit = () => {
    const router = useRouter()
    const { data: session } = useSession();

    useEffect(() => {
        if (!session) {
            router.replace("/auth")
            return
        }
    }, [session])

    if (session) return <div className={mainLayoutStyles.main}>
        <Header />
        <SideNav />
        <div className={mainLayoutStyles.mainContentView}>
            <EditView />
        </div>
    </div>

    return <></>

    // const { isAuthenticated, showLogin, prefill } = useContext(AppContext)

    // useEffect(() => {
    //     if (isAuthenticated) prefill(JSON.parse(sessionStorage.getItem("data")))
    // }, [isAuthenticated])

    // if (!isAuthenticated && showLogin) return <LoginComponent />
    // if (!isAuthenticated && !showLogin) return <SignupComponent />

    // else return <div className={mainLayoutStyles.main}>
    //     <SideNav />
    //     <div className={mainLayoutStyles.mainContentView}>
    //         <EditView />
    //     </div>
    // </div>
}

export default Edit

// const Edit = () => {
//     // const router = useRouter()
//     // const { isAuthenticated, prefill } = useContext(AppContext)

//     // useEffect(() => {

//     //     prefill(JSON.parse(sessionStorage.getItem("data")))
//     //     if (!isAuthenticated) router.push("/")

//     // }, [isAuthenticated])

    // const { isAuthenticated, showLogin, prefill } = useContext(AppContext)

    // useEffect(() => {
    //     if (isAuthenticated) prefill(JSON.parse(sessionStorage.getItem("data")))
    // }, [isAuthenticated])

    // if (!isAuthenticated && showLogin) return <LoginComponent />
    // if (!isAuthenticated && !showLogin) return <SignupComponent />

//     else return <div>
//         {/* <Header /> */}
//         <EditView />
//     </div>
// }

// export default Edit