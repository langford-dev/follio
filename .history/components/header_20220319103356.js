import Link from "next/link"
import Logo from "./logo"

const styles = {
    header: ``,
    headerWrapper: ``,
    button: `border-blue-500 border-2 hover:bg-blue-500 hover:text-blue-500`,
    nav: `flex`,
    navLink: `mr-3 hover:text-blue-500 cursor-pointer`,
}

const Header = () => {
    return <header className="border-b h-16 bg-white">
        <div className="m-auto max-w-screen-xl h-full flex items-center justify-between">
            <Logo />
            <nav className={styles.nav}>
                <Link passHref={true} href="/"><p className={styles.navLink}>Dashboard</p></Link>
                <Link passHref={true} href="/"><p className={styles.navLink}>Themes</p></Link>
                <Link passHref={true} href="/"><p className={styles.navLink}>Upgrade</p></Link>
            </nav>
            <div className="flex items-center">
                <p className="mr-5">Send Feedback</p>
                <div className="bg bg-blue-600 text-white px-5 py-2 rounded-md cursor-pointer">Publish</div>
            </div>
        </div>
    </header>
}

export default Header