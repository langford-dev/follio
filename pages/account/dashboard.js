import { useContext, useEffect } from "react";
import Header from "../../components/header";
import { useRouter } from 'next/router'
import SideNav from "../../components/side-nav/sideNav";
import { AppContext } from "../../context/context";
import { useSession } from "next-auth/react";
import { mainLayoutStyles } from "../../components/styles/mainLayoutStyles";
import ComingSoon from "../../components/comingSoon";

// const mainLayoutStyles = {
//     mainTitle: `text-2xl sm:text-4xl font-bold mb-3`,
//     main: `flex w-screen min-h-screen m-auto`,
//     mainContentView: `p-5 w-full bg-white mt-16 sm:mt-0`,
// }

export default function Home() {
    const { views } = useContext(AppContext)
    const router = useRouter()
    const { data: session } = useSession();

    useEffect(() => {
        if (!session) {
            router.replace("/auth")
            return
        }
    }, [session])

    if (session)
        return <div className={mainLayoutStyles.main}>
            <Header />
            <SideNav />
            <div className={mainLayoutStyles.mainContentView}>
                <p className={mainLayoutStyles.mainTitle}>Dashboard</p>
                <div>
                    <div className="border p-2 w-max">
                        Views - {views}
                    </div>
                </div>

                <ComingSoon />
            </div>
        </div>

    // if (session) return <div className={mainLayoutStyles.main}>
    //     <Header />
    //     <SideNav />
    //     <div className={mainLayoutStyles.mainContentView}>
    //         <p className={mainLayoutStyles.mainTitle}>Dashboard</p>
    {/* <p className="mt-3 mb-5 text-gray-500">Pick a theme that fits your style</p> */ }
    //         <div>
    // <div className="border p-2 w-max  ">
    //     Views - {views}
    // </div>
    //         </div>
    //     </div>
    //     {/* <BottomNavigation /> */}
    // </div>

    return <></>
}