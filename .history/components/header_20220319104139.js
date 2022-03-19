import Link from "next/link"
import Logo from "./logo"

const styles = {
    header: `border-b h-1 bg-white`,
    headerWrapper: `m-auto max-w-screen-xl h-full flex items-center justify-between`,
    button: `bg bg-blue-600 text-white h-10 px-5 flex items-center justify-center rounded-md cursor-pointer`,
    nav: `flex`,
    navLink: `mr-5 hover:text-blue-600 cursor-pointer`,
}

const Header = () => {
    return <header className={styles.header}>
        <div className={styles.headerWrapper}>
            <Logo />
            <nav className={styles.nav}>
                <Link passHref={true} href="/"><p className={styles.navLink}>Dashboard</p></Link>
                <Link passHref={true} href="/"><p className={styles.navLink}>Themes</p></Link>
                <Link passHref={true} href="/"><p className={styles.navLink}>Upgrade</p></Link>
            </nav>
            <div className="flex items-center">
                <p className="mr-5">Send Feedback</p>
                <div className={styles.button}>Publish</div>
            </div>
        </div>
    </header>
}

export default Header