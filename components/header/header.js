import Link from "next/link"
import Logo from "../logo"
import menu from "../../assets/svg/menu.svg"
import SideNavLinks from "../side-nav/sideNavLinks"
import Button from "../buttons/button"
import { useContext, useEffect, useState } from "react"
import { AppContext } from "../../context/context"
import { headerStyles } from "../styles/headerStyles"

const Header = () => {
    const [route, setRoute] = useState('')
    const { updateAccount, showLoader, profilePhoto, username } = useContext(AppContext)
    const [showDrawer, setShowDrawer] = useState(false);

    useEffect(() => {
        console.log(window.location.pathname)
        setRoute(window.location.pathname)
    }, [route])

    // const NavLink = ({ label, target }) => {
    //     return <Link passHref={true} href={target}>
    //         <p className={route === { target } ? headerStyles.active : headerStyles.navLink}>{label}-{target}</p>
    //     </Link>
    // }

    return <header className={headerStyles.header}>
        <div className={headerStyles.headerWrapper}>
            <div className="flex items-center">
                <img src={menu.src} className={headerStyles.menuBtn} onClick={() => setShowDrawer(true)} />
                <Logo />
            </div>
            <nav className={headerStyles.nav}>
                {/* <NavLink label="Dashboard" target="/account/dashboard" routeName={route} /> */}
                <Link passHref={true} href="/account/dashboard"><p className={route === "/account/dashboard" ? headerStyles.active : headerStyles.navLink}>Analytics</p></Link>
                <Link passHref={true} href="/account/edit"><p className={route === "/" || route === "/account/edit" ? headerStyles.active : headerStyles.navLink}>Edit content</p></Link>
                <Link passHref={true} href="/account/themes"><p className={route === "/account/themes" ? headerStyles.active : headerStyles.navLink}>Themes</p></Link>
                <Link passHref={true} href="/account/upgrade"><p className={route === "/account/upgrade" ? headerStyles.active : headerStyles.navLink}>Upgrade</p></Link>
                <Link passHref={true} href="/account/settings"><p className={route === "/account/settings" ? headerStyles.active : headerStyles.navLink}>Settings</p></Link>
            </nav>
            <div className="flex items-center">
                {
                    !showLoader ?
                        <Button label="Publish" action={() => updateAccount()} />
                        : <></>
                }
                <a href={`${process.env.NEXT_PUBLIC_APP_URL}/${username}`} target="_blank" rel="noreferrer">
                    <img src={profilePhoto} className="w-10 h-10 border border-[#c1c1c1] rounded-full ml-3 object-cover" alt="" />
                </a>
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