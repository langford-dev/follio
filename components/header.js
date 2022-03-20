import Link from "next/link"
import { useEffect, useState } from "react"
import Logo from "./logo"

const styles = {
    header: `px-5 border-b h-20 bg-white fixed w-screen top-0 left-0 z-40`,
    headerWrapper: `m-auto max-w-screen-xl h-full flex items-center justify-between`,
    button: `select-none bg bg-blue-600 text-white h-10 px-5 flex items-center justify-center rounded-md cursor-pointer`,
    nav: `hidden sm:flex `,
    navLink: `hover:text-blue-600 cursor-pointer p-3 h-20 flex items-center`,
    active: `hover:text-blue-600 cursor-pointer p-3 pb-2 h-20 flex items-center border-b-2 border-blue-600 text-blue-600`,
}

const Header = () => {
    const [route, setRoute] = useState('')

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
            <div className={styles.button}>Save &amp; publish</div>
        </div>
    </header>
}

export default Header