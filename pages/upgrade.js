import { useEffect } from "react";
import { useRouter } from 'next/router'
import { useSession } from "next-auth/react";
import { mainLayoutStyles } from "../components/styles/mainLayoutStyles";
import Header from "../components/header";
import SideNav from "../components/side-nav/sideNav";
import UpdateFeature from "../components/updateFeature";
import ComingSoon from "../components/comingSoon";

const styles = {
    title: `text-3xl font-bold mb-3`,
    themeCardContainer: `pb-56 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2`,
}

const Upgrade = () => {
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
                <p className={mainLayoutStyles.mainTitle}>Upgrade</p>
                <p className="mt-3 mb-5 text-gray-500">Get access to premium theme content</p>
                <div className="flex flex-wrap sm:w-3/5">
                    <UpdateFeature label="Dope themes" icon="🎨" />
                    <UpdateFeature label="Page analytics" icon="📈" />
                    <UpdateFeature label="Color customization" icon="🌴" />
                    <UpdateFeature label="Tips/donations" icon="💰" />
                    <UpdateFeature label="Meeting setup" icon="📆" />
                    <UpdateFeature label="Custom domain" icon="🌟" />
                    <UpdateFeature label="... More coming soon" icon="🎁" />
                </div>
                <ComingSoon />
            </div>
        </div >

    return <></>
}

export default Upgrade