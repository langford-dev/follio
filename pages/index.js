import { useContext } from "react";
import LoginComponent from "../components/auth/loginComponent";
import SignupComponent from "../components/auth/signupComponent";
import BottomNavigation from "../components/bottomNavigation";
import Header from "../components/header";
import SideNav from "../components/sideNav";
import { AppContext } from "../context/context";

const mainStyles = {
  mainTitle: `text-2xl sm:text-4xl font-bold mb-3`,
  main: `flex w-screen min-h-screen max-w-screen-2xl m-auto`,
  mainContentView: `p-5 w-full border border-t-0 bg-white mt-16 sm:mt-0`,
}

export default function Home() {
  const { isAuthenticated, showLogin } = useContext(AppContext)

  if (!isAuthenticated && showLogin) return <LoginComponent />
  if (!isAuthenticated && !showLogin) return <SignupComponent />

  else return <div className={mainStyles.main}>
    <Header />
    <SideNav />
    <div className={mainStyles.mainContentView}>
      <p className={mainStyles.mainTitle}>Dashboard</p>
    </div>
    <BottomNavigation />
  </div>
}