import Link from "next/link"
import Logo from "./logo"

const styles = {
    header: `px-5 border-b h-20 bg-white fixed w-screen top-0 left-0 z-40`,
    headerWrapper: `m-auto max-w-screen-xl h-full flex items-center justify-between`,
    button: `select-none bg bg-blue-600 text-white h-10 px-5 flex items-center justify-center rounded-md cursor-pointer`,
    nav: `hidden sm:flex `,
    navLink: `mr-6 hover:text-blue-600 cursor-pointer`,
}

const Header = () => {
    return <header className={styles.header}>
        <div className={styles.headerWrapper}>
            <Logo />
            <nav className={styles.nav}>
                <Link passHref={true} href="/"><p className={styles.navLink}>Dashboard</p></Link>
                <Link passHref={true} href="/edit"><p className={styles.navLink}>Edit</p></Link>
                <Link passHref={true} href="/"><p className={styles.navLink}>Themes</p></Link>
                <Link passHref={true} href="/"><p className={styles.navLink}>Settings</p></Link>
                <Link passHref={true} href="/"><p className={styles.navLink}>Upgrade</p></Link>
                <Link passHref={true} href="/"><p className={styles.navLink}>Donate</p></Link>
            </nav>
            <div className="flex items-center">
                {/* <p className="mr-5 sm:hidden"><Link passHref={true} href="/view">Preview</Link></p> */}
                <div className={styles.button}>Save &amp; publish</div>
            </div>
        </div>
    </header>
}

export default Header