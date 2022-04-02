import { useContext, useEffect, useState } from "react"
import { AppContext } from "../context/context"
import { navStyles } from "./styles/navStyles"
import Link from "next/link"
import Button from "./button"
import Logo from "./logo"
import graph from "../assets/svg/graph.svg"
import brush from "../assets/svg/brush.svg"
import theme from "../assets/svg/theme.svg"
import settings from "../assets/svg/settings.svg"
import shield from "../assets/svg/shield.svg"
import coin from "../assets/svg/coin.svg"
import ViewsTracker from "./viewsTracker"

const SideNav = () => {
    const { updateAccount, showLoader } = useContext(AppContext)
    const [route, setRoute] = useState('')

    useEffect(() => {
        console.log(window.location.pathname)
        setRoute(window.location.pathname)
    }, [route])

    return <div className={navStyles.sideNav}>
        <div className="border-b pb-5">
            <div className="flex items-center justify-center mr-10 mb-5"><Logo /></div>
            <Link passHref={true} href="/">
                <p className={route === "/" ? navStyles.activeNavLink : navStyles.navLink}>
                    <img className={navStyles.navLinkIcon} src={graph.src} />
                    Dashboard
                </p>
            </Link>
            <Link passHref={true} href="/edit">
                <p className={route === "/edit" ? navStyles.activeNavLink : navStyles.navLink}>
                    <img className={navStyles.navLinkIcon} src={brush.src} />
                    Appearance
                </p>
            </Link>
            <Link passHref={true} href="/themes">
                <p className={route === "/themes" ? navStyles.activeNavLink : navStyles.navLink}>
                    <img className={navStyles.navLinkIcon} src={theme.src} />
                    Themes
                </p>
            </Link>
            <Link passHref={true} href="/">
                <p className={route === "/settings" ? navStyles.activeNavLink : navStyles.navLink}>
                    <img className={navStyles.navLinkIcon} src={settings.src} />
                    Settings
                </p>
            </Link>
            <Link passHref={true} href="/">
                <p className={route === "/upgrade" ? navStyles.activeNavLink : navStyles.navLink}>
                    <img className={navStyles.navLinkIcon} src={shield.src} />
                    Upgrade
                </p>
            </Link>
            <Link passHref={true} href="/">
                <p className={route === "/donate" ? navStyles.activeNavLink : navStyles.navLink}>
                    <img className={navStyles.navLinkIcon} src={coin.src} />
                    Donate
                </p>
            </Link>
            <div className="flex items-center mt-3">
                {!showLoader ? <Button label="Save &amp; publish" onPress={() => {
                    updateAccount()
                }} /> : <></>}
            </div>
        </div>

        <div className={route === "/edit" ? "" : "hidden"}>
            <p className={navStyles.description} />
            <div className="border-b pb-5"><ViewsTracker /></div>
            <p className={navStyles.description}>{new Date().getFullYear()} &copy; Folio</p>
        </div>
    </div>
}

export default SideNav