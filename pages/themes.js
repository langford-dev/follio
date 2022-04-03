import { useContext, useEffect } from "react";
import { AppContext } from "../context/context";
import LoginComponent from "../components/auth/loginComponent";
import SignupComponent from "../components/auth/signupComponent";
import BottomNavigation from "../components/bottomNavigation";
import Header from "../components/header";
import Loader from "../components/loader";
import ThemeCard from "../components/themeCard";
import theme1 from "../assets/themes/1.png"
import theme2 from "../assets/themes/2.png"
import SideNav from "../components/sideNav";

const styles = {
    title: `text-3xl font-bold mb-3`,
    themeCardContainer: `pb-56 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2`,
}

const mainStyles = {
    mainTitle: `text-2xl sm:text-4xl font-bold mb-3`,
    main: `flex w-screen min-h-screen max-w-screen-2xl m-auto`,
    mainContentView: `p-5 w-full border border-t-0 bg-white mt-16 sm:mt-0`,
}

const Themes = () => {
    const { isAuthenticated, showLogin, readDataFromStorage, showLoader } = useContext(AppContext)

    useEffect(() => {
        if (isAuthenticated) readDataFromStorage()
    }, [isAuthenticated])

    if (!isAuthenticated && showLogin) return <LoginComponent />
    if (!isAuthenticated && !showLogin) return <SignupComponent />

    else return <div className={mainStyles.main}>
        {showLoader ? <Loader /> : <div></div>}
        <Header />
        <SideNav />
        <div className={mainStyles.mainContentView}>
            <p className={mainStyles.mainTitle}>Themes</p>
            <p className="mt-3 mb-5 text-gray-500">Pick a theme that fits your style</p>

            <div className={styles.themeCardContainer}>
                <ThemeCard index={1} thumbnail={theme1} />
                <ThemeCard index={2} thumbnail={theme2} />
            </div>
        </div>
        {/* <BottomNavigation /> */}
    </div>
}

export default Themes