import { useContext, useEffect } from "react";
import { useRouter } from 'next/router'
import SideNav from "../../components/side-nav/sideNav";
import { AppContext } from "../../context/context";
import { useSession } from "next-auth/react";
import { mainLayoutStyles } from "../../components/styles/mainLayoutStyles";
import ComingSoon from "../../components/comingSoon";
import Header from "../../components/header/header";

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
                <p className={mainLayoutStyles.mainTitle}>Analytics</p>
                <div>
                    <div className="border border-[#eaeaea] rounded-md bg-white text-xl p-2 w-max">
                        {views} views
                    </div>
                </div>

                <ComingSoon />
            </div>
        </div>
    return <></>
}