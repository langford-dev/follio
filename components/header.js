import Link from "next/link"
import { useContext, useEffect, useState } from "react"
import { AppContext } from "../context/context"
import Button from "./buttons/button"
import GhostButton from "./ghostButton"
import Logo from "./logo"
import Modal from "./modal"
import { headerStyles } from "./styles/headerStyles"
import { navStyles } from "./styles/navStyles"


import menu from "../assets/svg/menu.svg"
import brush from "../assets/svg/brush.svg"
import theme from "../assets/svg/theme.svg"
import settings from "../assets/svg/settings.svg"
import shield from "../assets/svg/shield.svg"
import coin from "../assets/svg/coin.svg"
import SideNavLinks from "./side-nav/sideNavLinks"

const Header = () => {
    const [route, setRoute] = useState('')
    const { updateAccount, showLoader, shareLink, profilePhoto } = useContext(AppContext)
    const [showDrawer, setShowDrawer] = useState(false);

    useEffect(() => {
        console.log(window.location.pathname)
        setRoute(window.location.pathname)
    }, [route])

    return <header className={headerStyles.header}>
        <div className={headerStyles.headerWrapper}>
            <div className="flex items-center">
                <img src={menu.src} className={headerStyles.menuBtn} onClick={() => setShowDrawer(true)} />
                <Logo />
            </div>
            <nav className={headerStyles.nav}>
                <Link passHref={true} href="/account/dashboard"><p className={route === "/account/dashboard" ? headerStyles.active : headerStyles.navLink}>Dashboard</p></Link>
                <Link passHref={true} href="/account/edit"><p className={route === "/" || route === "/account/edit" ? headerStyles.active : headerStyles.navLink}>Edit content</p></Link>
                <Link passHref={true} href="/account/themes"><p className={route === "/account/themes" ? headerStyles.active : headerStyles.navLink}>Themes</p></Link>
                <Link passHref={true} href="/account/upgrade"><p className={route === "/account/upgrade" ? headerStyles.active : headerStyles.navLink}>Upgrade</p></Link>
                <Link passHref={true} href="/account/settings"><p className={route === "/account/settings" ? headerStyles.active : headerStyles.navLink}>Settings</p></Link>
                {/* <Link passHref={true} href="/"><p className={route === "/settings" ? headerStyles.active : headerStyles.navLink}>Settings</p></Link> */}
                {/* <Link passHref={true} href="/"><p className={route === "/upgrade" ? headerStyles.active : headerStyles.navLink}>Upgrade</p></Link> */}
                {/* <Link passHref={true} href="/"><p className={route === "/donate" ? headerStyles.active : headerStyles.navLink}>Donate</p></Link> */}
            </nav>
            <div className="flex items-center">
                {
                    !showLoader ?
                        <Button label="Publish" action={() => updateAccount()} />
                        : <></>
                }
                <div><img src={profilePhoto} className="w-10 h-10 rounded-full ml-3 object-cover" alt="" /></div>
            </div>
        </div>

        {
            showDrawer ?
                <div className={headerStyles.drawerWrapper}>
                    <div className="fixed h-screen w-2/3 top-0 left-0 p-5 border-r border-b bg-light">
                        <div className="flex items-center justify-between mb-5">
                            <Logo />
                            <p className="font-bold" onClick={() => setShowDrawer(false)}>&times; close</p>
                        </div>
                        <SideNavLinks />
                    </div>
                </div>
                : <div></div>
        }
    </header>
}

export default Header