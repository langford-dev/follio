import Link from "next/link"
import { useContext, useEffect, useState } from "react"
import { AppContext } from "../context/context"
import Button from "./button"
import { navStyles } from "./styles/navStyles"
import ViewsTracker from "./viewsTracker"

// const styles = {
//     navLink: `p-5 pb-3 hover:bg-gray-100 hover:cursor-pointer rounded-lg uppercase`,
//     activeNavLink: `p-5 pb-3 hover:bg-gray-100 hover:cursor-pointer rounded-lg uppercase`,
// description: `pl-5 pt-10 font-bold opacity-50`,
// sideNav: `p-5 w-2/12 min-h-screen`,
// }

const SideNav = () => {
    const { updateAccount, showLoader } = useContext(AppContext)
    const [route, setRoute] = useState('')

    useEffect(() => {
        console.log(window.location.pathname)
        setRoute(window.location.pathname)
    }, [route])

    return <div className={navStyles.sideNav}>
        <div className="border-b pb-5">
            <Link passHref={true} href="/"><p className={route === "/" ? navStyles.activeNavLink : navStyles.navLink}>Dashboard</p></Link>
            <Link passHref={true} href="/edit"><p className={route === "/edit" ? navStyles.activeNavLink : navStyles.navLink}>Appearance</p></Link>
            <Link passHref={true} href="/themes"><p className={route === "/themes" ? navStyles.activeNavLink : navStyles.navLink}>Themes</p></Link>
            <Link passHref={true} href="/"><p className={route === "/settings" ? navStyles.activeNavLink : navStyles.navLink}>Settings</p></Link>
            <Link passHref={true} href="/"><p className={route === "/upgrade" ? navStyles.activeNavLink : navStyles.navLink}>Upgrade</p></Link>
            <Link passHref={true} href="/"><p className={route === "/donate" ? navStyles.activeNavLink : navStyles.navLink}>Donate</p></Link>
            <div className="flex items-center mt-3">
                {!showLoader ? <Button label="Save &amp; publish" onPress={() => {
                    updateAccount()
                }} /> : <></>}
            </div>
        </div>

        <div className={route === "/edit" ? "" : "hidden"}>
            <p className={navStyles.description}>SECTIONS</p>
            <div className="border-b pb-5"><ViewsTracker /></div>
            <p className={navStyles.description}>{new Date().getFullYear()} &copy; Folio</p>
        </div>
    </div>
}

export default SideNav