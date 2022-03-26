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
import theme3 from "../assets/themes/3.png"

const styles = {
    title: `text-3xl font-bold mb-3`,
    themeCardContainer: `pb-56 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2`,
}

const Themes = () => {
    const { isAuthenticated, showLogin, readDataFromStorage, showLoader } = useContext(AppContext)

    useEffect(() => {
        if (isAuthenticated) readDataFromStorage()
    }, [isAuthenticated])

    if (!isAuthenticated && showLogin) return <LoginComponent />
    if (!isAuthenticated && !showLogin) return <SignupComponent />

    else return <div>
        <Header />

        {showLoader ? <Loader /> : <div></div>}

        <div className='mt-20 p-5 sm:p-10 max-w-screen-2xl m-auto border border-t-0 bg-white'>
            <div>
                <p className={styles.title}>Themes</p>
                <p className="mt-3 mb-5 text-gray-500">Pick a theme that fits your style</p>
            </div>

            <div className={styles.themeCardContainer}>
                <ThemeCard index={1} thumbnail={theme1} />
                <ThemeCard index={2} thumbnail={theme2} />
                <ThemeCard index={3} thumbnail={theme3} />
            </div>
            <BottomNavigation />
        </div>
    </div>
}

export default Themes