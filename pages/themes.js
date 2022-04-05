import { useEffect } from "react";
import { useRouter } from 'next/router'
import Header from "../components/header";
import ThemeCard from "../components/themeCard";
import theme1 from "../assets/themes/1.png"
import theme2 from "../assets/themes/2.png"
import SideNav from "../components/side-nav/sideNav";
import { useSession } from "next-auth/react";
import { mainLayoutStyles } from "../components/styles/mainLayoutStyles";

const styles = {
    title: `text-3xl font-bold mb-3`,
    themeCardContainer: `pb-56 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2`,
}

// const mainLayoutStyles = {
//     mainTitle: `text-2xl sm:text-4xl font-bold mb-3`,
//     main: `flex w-screen min-h-screen m-auto`,
//     mainContentView: `p-5 w-full bg-white mt-16 sm:mt-0`,
// }

const Themes = () => {
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
                <p className={mainLayoutStyles.mainTitle}>Themes</p>
                <p className="mt-3 mb-5 text-gray-500">Pick a theme that fits your style</p>

                <div className={styles.themeCardContainer}>
                    <ThemeCard index={1} thumbnail={theme1} />
                    <ThemeCard index={2} thumbnail={theme2} />
                </div>
            </div>
        </div>

    // if (session) return <div className={mainLayoutStyles.main}>
    //     {/* {showLoader ? <Loader /> : <div></div>} */}
    //     <Header />
    //     <SideNav />
    //     <div className={mainLayoutStyles.mainContentView}>
    // <p className={mainLayoutStyles.mainTitle}>Themes</p>
    // <p className="mt-3 mb-5 text-gray-500">Pick a theme that fits your style</p>

    // <div className={styles.themeCardContainer}>
    //     <ThemeCard index={1} thumbnail={theme1} />
    //     <ThemeCard index={2} thumbnail={theme2} />
    // </div>
    //     </div>
    //     {/* <BottomNavigation /> */}
    // </div>

    return <></>
}

export default Themes