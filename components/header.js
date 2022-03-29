import Link from "next/link"
import { useContext, useEffect, useState } from "react"
import { AppContext } from "../context/context"
import Button from "./button"
import Logo from "./logo"
import Modal from "./modal"
import { headerStyles } from "./styles/headerStyles"



const Header = () => {
    const [route, setRoute] = useState('')
    const { updateAccount, showLoader } = useContext(AppContext)
    // const [showDrawer, setShowDrawer] = useState(false);

    useEffect(() => {
        console.log(window.location.pathname)
        setRoute(window.location.pathname)
    }, [route])

    return <header className={headerStyles.header}>
        <div className={headerStyles.headerWrapper}>
            <Logo />
            <nav className={headerStyles.nav}>
                <Link passHref={true} href="/"><p className={route === "/" ? headerStyles.active : headerStyles.navLink}>Dashboard</p></Link>
                <Link passHref={true} href="/edit"><p className={route === "/edit" ? headerStyles.active : headerStyles.navLink}>Appearance</p></Link>
                <Link passHref={true} href="/themes"><p className={route === "/themes" ? headerStyles.active : headerStyles.navLink}>Themes</p></Link>
                <Link passHref={true} href="/"><p className={route === "/settings" ? headerStyles.active : headerStyles.navLink}>Settings</p></Link>
                <Link passHref={true} href="/"><p className={route === "/upgrade" ? headerStyles.active : headerStyles.navLink}>Upgrade</p></Link>
                <Link passHref={true} href="/"><p className={route === "/donate" ? headerStyles.active : headerStyles.navLink}>Donate</p></Link>
            </nav>
            <div className="flex items-center">
                {!showLoader ? <Button label="Publish" onPress={() => {
                    updateAccount()
                }} /> : <></>}
            </div>
        </div>

        {/* {
            showDrawer ?
                <div className="fixed top-0 left-0 p-5 border-r border-b bg-white w-screen">
                    <p className="mb-5 font-bold" onClick={() => setShowDrawer(false)}>&times; close</p>
                    <div className={styles.drawerLink}><Link href="/">Dashboard</Link></div>
                    <div className={styles.drawerLink}><Link href="/edit">Appearance</Link></div>
                    <div className={styles.drawerLink}><Link href="/themes">Themes</Link></div>
                    <div className={styles.drawerLink}><Link href="/upgrade">Upgrade</Link></div>
                    <div className={styles.drawerLink}><Link href="/donate">Donate</Link></div>
                </div>
                : <div></div>
        } */}
    </header>
}

export default Header