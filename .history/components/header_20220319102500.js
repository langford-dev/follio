import Link from "next/link"
import Logo from "./logo"

const styles = {
    header: ``,
    headerWrapper: ``,
    button: ``,
    nav: ``,
    navLink: `m`,
}

const Header = () => {
    return <header className="border-b h-16 bg-white">
        <div className="m-auto max-w-screen-xl h-full flex items-center justify-between">
            <Logo />
            <nav>
                <Link passHref={true} href="/" className={styles.navLink}>Dashboard</Link>
                <Link passHref={true} href="/" className={styles.navLink}>Dashboard</Link>
                <Link passHref={true} href="/" className={styles.navLink}>Dashboard</Link>
                <Link passHref={true} href="/" className={styles.navLink}>Dashboard</Link>
            </nav>
            <div className="bg bg-blue-600 text-white px-5 py-2 rounded-md cursor-pointer">Publish</div>
        </div>
    </header>
}

export default Header