import Link from "next/link"
import { useContext, useEffect, useState } from "react"
import { AppContext } from "../context/context"
import Button from "./button"
import GhostButton from "./ghostButton"
import Logo from "./logo"
import Modal from "./modal"
import { headerStyles } from "./styles/headerStyles"
import { navStyles } from "./styles/navStyles"


import graph from "../assets/svg/graph.svg"
import brush from "../assets/svg/brush.svg"
import theme from "../assets/svg/theme.svg"
import settings from "../assets/svg/settings.svg"
import shield from "../assets/svg/shield.svg"
import coin from "../assets/svg/coin.svg"
import SideNavLinks from "./side-nav/sideNavLinks"

const Header = () => {
    const [route, setRoute] = useState('')
    const { updateAccount, showLoader, shareLink } = useContext(AppContext)
    const [showDrawer, setShowDrawer] = useState(false);

    useEffect(() => {
        console.log(window.location.pathname)
        setRoute(window.location.pathname)
    }, [route])

    return <header className={headerStyles.header}>
        <div className={headerStyles.headerWrapper}>
            <div className={headerStyles.menuBtn} onClick={() => setShowDrawer(true)}>
                <span className={headerStyles.menuStroke} />
                <span className={headerStyles.menuStroke} />
                <span className={headerStyles.menuStroke} />
            </div>
            <Logo />
            <nav className={headerStyles.nav}>
                <Link passHref={true} href="/"><p className={route === "/" ? headerStyles.active : headerStyles.navLink}>Dashboard</p></Link>
                <Link passHref={true} href="/"><p className={route === "/" ? headerStyles.active : headerStyles.navLink}>Appearance</p></Link>
                <Link passHref={true} href="/themes"><p className={route === "/themes" ? headerStyles.active : headerStyles.navLink}>Themes</p></Link>
                <Link passHref={true} href="/"><p className={route === "/settings" ? headerStyles.active : headerStyles.navLink}>Settings</p></Link>
                <Link passHref={true} href="/"><p className={route === "/upgrade" ? headerStyles.active : headerStyles.navLink}>Upgrade</p></Link>
                <Link passHref={true} href="/"><p className={route === "/donate" ? headerStyles.active : headerStyles.navLink}>Donate</p></Link>
            </nav>
            <div className="flex items-center">
                <GhostButton onPress={() => shareLink()} label="Share link" />
                {
                    !showLoader ?
                        <Button label="Publish" onPress={() => updateAccount()} />
                        : <></>
                }
            </div>
        </div>

        {
            showDrawer ?
                <div className="fixed top-0 left-0 p-5 border-r border-b bg-white w-screen">
                    <p className="mb-5 font-bold" onClick={() => setShowDrawer(false)}>&times; close</p>
                    <SideNavLinks />
                </div>
                : <div></div>
        }
    </header>
}

export default Header