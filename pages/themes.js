import { useContext } from "react";
import LoginComponent from "../components/auth/loginComponent";
import SignupComponent from "../components/auth/signupComponent";
import Header from "../components/header";
import ThemeCard from "../components/themeCard";
import ViewTitle from "../components/viewTitle";
import { AppContext } from "../context/context";

const styles = {
    title: `text-3xl font-bold mb-3`,
}

const Themes = () => {
    const { isAuthenticated, showLogin } = useContext(AppContext)

    if (!isAuthenticated && showLogin) return <LoginComponent />
    if (!isAuthenticated && !showLogin) return <SignupComponent />

    else return <div>
        <Header />
        <div className='mt-20 p-10 max-w-screen-2xl m-auto border border-t-0 bg-white'>
            <div>
                <p className={styles.title}>Themes</p>
                <p className="mt-3 mb-5 text-gray-500">Pick a theme that fits your style</p>
            </div>

            <div className="flex flex-wrap">
                <ThemeCard index={0} />
                <ThemeCard index={1} />
                <ThemeCard index={2} />
                <ThemeCard index={3} />
                <ThemeCard index={4} />
                <ThemeCard index={5} />
                <ThemeCard index={6} />
                <ThemeCard index={7} />
                <ThemeCard index={8} />
                <ThemeCard index={9} />
            </div>

        </div>
    </div>
}

export default Themes