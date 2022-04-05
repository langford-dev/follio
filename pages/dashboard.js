import { useContext, useEffect } from "react";
import LoginComponent from "../components/auth/loginComponent";
import SignupComponent from "../components/auth/signupComponent";
import BottomNavigation from "../components/bottomNavigation";
import Header from "../components/header";
import { useRouter } from 'next/router'
import SideNav from "../components/side-nav/sideNav";
import { AppContext } from "../context/context";
import { useSession } from "next-auth/react";

const mainStyles = {
    mainTitle: `text-2xl sm:text-4xl font-bold mb-3`,
    main: `flex w-screen min-h-screen m-auto`,
    mainContentView: `p-5 w-full bg-white mt-16 sm:mt-0`,
}

export default function Home() {
    const { isAuthenticated, showLogin, views } = useContext(AppContext)
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
            <p className={mainStyles.mainTitle}>Dashboard</p>
            <div>
                <div className="border p-2 w-max  ">
                    Views - {views}
                </div>
            </div>
        </div>
        {/* <BottomNavigation /> */}
    </div>

    return <></>
}