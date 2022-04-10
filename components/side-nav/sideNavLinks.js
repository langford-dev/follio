import Link from "next/link"
import graph from "../../assets/svg/graph.svg"
import brush from "../../assets/svg/brush.svg"
import theme from "../../assets/svg/theme.svg"
import settings from "../../assets/svg/settings.svg"
import shield from "../../assets/svg/shield.svg"
import share from "../../assets/svg/share.svg"
import copy from "../../assets/svg/copy.svg"
import logoutIcon from "../../assets/svg/logoutIcon.svg"
import coin from "../../assets/svg/coin.svg"
import feedback from "../../assets/svg/feedback.svg"
import { useContext, useEffect, useState } from "react"
import { AppContext } from "../../context/context"
import Button from "../button"
import { navStyles } from "../styles/navStyles"

const SideNavLinks = () => {
    const { updateAccount, showLoader, shareLink, copyLink, logout } = useContext(AppContext)
    const [route, setRoute] = useState('')

    useEffect(() => {
        console.log(window.location.pathname)
        setRoute(window.location.pathname)
    }, [route])

    return <div>
        <div className="sm:hidden">
            <Link passHref={true} href="/dashboard">
                <p className={route === "/dashboard" ? navStyles.activeNavLink : navStyles.navLink}>
                    <img className={navStyles.navLinkIcon} src={graph.src} />
                    Dashboard
                </p>
            </Link>
        </div>

        <div className="sm:hidden">
            <Link passHref={true} href="/">
                <p className={route === "/" ? navStyles.activeNavLink : navStyles.navLink}>
                    <img className={navStyles.navLinkIcon} src={brush.src} />
                    Edit your page
                </p>
            </Link>
        </div>

        <div className="sm:hidden">
            <Link passHref={true} href="/themes">
                <p className={route === "/themes" ? navStyles.activeNavLink : navStyles.navLink}>
                    <img className={navStyles.navLinkIcon} src={theme.src} />
                    Themes
                </p>
            </Link>
        </div>

        {/* <div>
            <Link passHref={true} href="/settings">
                <p className={route === "/settings" ? navStyles.activeNavLink : navStyles.navLink}>
                    <img className={navStyles.navLinkIcon} src={settings.src} />
                    Settings
                </p>
            </Link>
        </div> */}

        <div>
            <Link passHref={true} href="/upgrade">
                <p className={route === "/upgrade" ? navStyles.activeNavLink : navStyles.navLink}>
                    <img className={navStyles.navLinkIcon} src={shield.src} />
                    Upgrade
                </p>
            </Link>
        </div>

        <div>
            <Link passHref={true} href="https://twitter.com/langford_dev">
                <p className={route === "/upgrade" ? navStyles.activeNavLink : navStyles.navLink}>
                    <img className={navStyles.navLinkIcon} src={feedback.src} />
                    Feedback
                </p>
            </Link>
        </div>

        {/* <div>
            <Link passHref={true} href="/">
                <p className={route === "/donate" ? navStyles.activeNavLink : navStyles.navLink}>
                    <img className={navStyles.navLinkIcon} src={coin.src} />
                    Donate
                </p>
            </Link>
        </div> */}

        <div>
            <p className={navStyles.navLink} onClick={() => copyLink()}>
                <img className={navStyles.navLinkIcon} src={copy.src} />
                Copy link
            </p>
        </div>

        <div>
            <p className={navStyles.navLink} onClick={() => shareLink()}>
                <img className={navStyles.navLinkIcon} src={share.src} />
                Share link
            </p>
        </div>

        <p className={navStyles.navLink} onClick={() => {
            let conf = confirm("Are you sure you want to log out?")
            if (!conf) return
            logout()
        }}>
            <img className={navStyles.navLinkIcon} src={logoutIcon.src} />
            Logout
        </p>

        <div className="flex items-center mt-3">
            {!showLoader ? <Button label="Save &amp; publish" onPress={() => {
                updateAccount()
            }} /> : <></>}
        </div>
    </div>
}

export default SideNavLinks