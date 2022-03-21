import Link from "next/link"
import { useContext, useEffect, useState } from "react"
import { AppContext } from "../context/context"
import Logo from "./logo"

const styles = {
    header: `px-5 border-b h-14 sm:h-20 bg-white fixed w-screen top-0 left-0 z-40`,
    headerWrapper: `m-auto max-w-screen-xl h-full flex items-center justify-between`,
    button: `select-none bg bg-blue-600 text-white h-9 px-5 flex items-center justify-center rounded-md cursor-pointer`,
    nav: `hidden sm:flex `,
    navLink: `hover:text-blue-600 cursor-pointer p-3 h-20 flex items-center`,
    active: `hover:text-blue-600 cursor-pointer p-3 pb-2 h-20 flex items-center border-b-4 border-blue-600 text-blue-600`,

    drawerLink: `mb-7`,

}

const Header = () => {
    const [route, setRoute] = useState('')
    const { updateAccount } = useContext(AppContext)
    const [showDrawer, setShowDrawer] = useState(false);

    useEffect(() => {
        console.log(window.location.pathname)
        setRoute(window.location.pathname)
    }, [route])

    return <header className={styles.header}>
        <div className={styles.headerWrapper}>
            <Logo />
            <nav className={styles.nav}>
                <Link passHref={true} href="/"><p className={route === "/" ? styles.active : styles.navLink}>Dashboard</p></Link>
                <Link passHref={true} href="/edit"><p className={route === "/edit" ? styles.active : styles.navLink}>Edit</p></Link>
                <Link passHref={true} href="/"><p className={route === "/themes" ? styles.active : styles.navLink}>Themes</p></Link>
                <Link passHref={true} href="/"><p className={route === "/settings" ? styles.active : styles.navLink}>Settings</p></Link>
                <Link passHref={true} href="/"><p className={route === "/upgrade" ? styles.active : styles.navLink}>Upgrade</p></Link>
                <Link passHref={true} href="/"><p className={route === "/donate" ? styles.active : styles.navLink}>Donate</p></Link>
            </nav>
            <div className="flex items-center">
                <div className={styles.button} onClick={updateAccount}>Save &amp; publish</div>
                <div className="text-4xl ml-3 bg-blue-50 rounded-md px-2 sm:hidden" onClick={() => setShowDrawer(true)}>&equiv;</div>
            </div>
        </div>

        {
            showDrawer ?
                <div className="fixed top-0 left-0 p-5 border-r border-b bg-white w-screen">
                    <p className="mb-5 font-bold" onClick={() => setShowDrawer(false)}>&times; close</p>
                    <div className={styles.drawerLink}><Link href="/">Dashboard</Link></div>
                    <div className={styles.drawerLink}><Link href="/edit">Edit</Link></div>
                    <div className={styles.drawerLink}><Link href="/themes">Themes</Link></div>
                    <div className={styles.drawerLink}><Link href="/upgrade">Upgrade</Link></div>
                    <div className={styles.drawerLink}><Link href="/donate">Donate</Link></div>
                </div>
                : <div></div>
        }
    </header>
}

export default Header