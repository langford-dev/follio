import { useEffect } from "react";
import { useRouter } from 'next/router'
import { useSession } from "next-auth/react";
// import { mainLayoutStyles } from "../../components/styles/mainLayoutStyles";
import Header from "../../components/header";
import SideNav from "../../components/side-nav/sideNav";
import UpdateFeature from "../../components/updateFeature";
import ComingSoon from "../../components/comingSoon";
import { mainLayoutStyles } from "../../components/styles/mainLayoutStyles";

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
                <div className="flex items-center justify-center">
                    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 w-full">
                        <UpdateFeature label="Dope themes" icon="🎨" />
                        <UpdateFeature label="Page analytics" icon="📈" />
                        <UpdateFeature label="Color customization" icon="💅" />
                        <UpdateFeature label="Responsive design" icon="📱" />
                        <UpdateFeature label="Tips/donations" icon="💰" />
                        <UpdateFeature label="meeting scheduling" icon="📆" />
                        <UpdateFeature label="Submitting your design" icon="😎" />
                        <UpdateFeature label="Custom domain" icon="🌟" />
                        <UpdateFeature label="... More coming soon" icon="🎁" />
                    </div>
                </div>
                <ComingSoon />
            </div>
        </div >

    return <></>
}

export default Upgrade