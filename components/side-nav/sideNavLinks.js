import Link from "next/link"
import graph from "../../assets/svg/graph.svg"
import brush from "../../assets/svg/brush.svg"
import theme from "../../assets/svg/theme.svg"
import settings from "../../assets/svg/settings.svg"
import shield from "../../assets/svg/shield.svg"
import share from "../../assets/svg/share.svg"
import copy from "../../assets/svg/copy.svg"
import logoutIcon from "../../assets/svg/logoutIcon.svg"
import feedback from "../../assets/svg/feedback.svg"
import { useContext, useEffect, useState } from "react"
import { AppContext } from "../../context/context"
import { navStyles } from "../styles/navStyles"
import Logo from "../logo"
// import settings from "../../assets/svg/settings.svg"
// import Button from "../buttons/button"

const Twitter = ({ twitterLink }) => {
    return <a href={twitterLink} target="_blank" rel="noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
    </a>
}

const SideNavLinks = () => {
    const { shareLink, copyLink, logout, setShowDrawer } = useContext(AppContext)
    const [route, setRoute] = useState('')

    useEffect(() => {
        console.log(window.location.pathname)
        setRoute(window.location.pathname)
    }, [route])

    return <div className="flex flex-col justify-between h-full">
        <div>


            <div className="sm:hidden">
                <Link passHref={true} href="/account/dashboard">
                    <p className={route === "/account/dashboard" ? navStyles.activeNavLink : navStyles.navLink}>
                        <img className={navStyles.navLinkIcon} src={graph.src} />
                        Dashboard
                    </p>
                </Link>
            </div>

            <div>
                <Link passHref={true} href="/account/settings">
                    <p className={route === "/account/settings" ? navStyles.activeNavLink : navStyles.navLink}>
                        <img className={navStyles.navLinkIcon} src={settings.src} />
                        Settings
                    </p>
                </Link>
            </div>

            <div className="sm:hidden">
                <Link passHref={true} href="/account/edit">
                    <p className={route === "/account/edit" ? navStyles.activeNavLink : navStyles.navLink}>
                        <img className={navStyles.navLinkIcon} src={brush.src} />
                        Edit content
                    </p>
                </Link>
            </div>

            <div className="sm:hidden">
                <Link passHref={true} href="/account/themes">
                    <p className={route === "/account/themes" ? navStyles.activeNavLink : navStyles.navLink}>
                        <img className={navStyles.navLinkIcon} src={theme.src} />
                        Themes
                    </p>
                </Link>
            </div>

            <div className="sm:hidden">
                <Link passHref={true} href="/account/upgrade">
                    <p className={route === "/account/upgrade" ? navStyles.activeNavLink : navStyles.navLink}>
                        <img className={navStyles.navLinkIcon} src={shield.src} />
                        Upgrade
                    </p>
                </Link>
            </div>

            {/* <div>
            <Link passHref={true} href="/settings">
                <p className={route === "/settings" ? navStyles.activeNavLink : navStyles.navLink}>
                    <img className={navStyles.navLinkIcon} src={settings.src} />
                    Settings
                </p>
            </Link>
        </div> */}

            {/* <div>
                <Link passHref={true} href="/account/upgrade">
                    <p className={route === "/account/upgrade" ? navStyles.activeNavLink : navStyles.navLink}>
                        <img className={navStyles.navLinkIcon} src={shield.src} />
                        Features
                    </p>
                </Link>
            </div>

            <div>
                <a passHref={true} target="_blank" rel="noreferrer" href="https://twitter.com/langford_dev">
                    <p className={route === "/upgrade" ? navStyles.activeNavLink : navStyles.navLink}>
                        <img className={navStyles.navLinkIcon} src={feedback.src} />
                        Feedback
                    </p>
                </a>
            </div> */}

            {/* <div>
            <Link passHref={true} href="/">
                <p className={route === "/donate" ? navStyles.activeNavLink : navStyles.navLink}>
                    <img className={navStyles.navLinkIcon} src={coin.src} />
                    Donate
                </p>
            </Link>
        </div> */}

            <div>
                <p className={navStyles.navLink} onClick={() => copyLink()}>
                    <img className={navStyles.navLinkIcon} src={copy.src} />
                    Copy link
                </p>
            </div>

            <div>
                <p className={navStyles.navLink} onClick={() => shareLink()}>
                    <img className={navStyles.navLinkIcon} src={share.src} />
                    Share link
                </p>
            </div>

            <p className={navStyles.navLink} onClick={() => {
                let conf = confirm("Are you sure you want to log out?")
                if (!conf) return
                logout()
            }}>
                <img className={navStyles.navLinkIcon} src={logoutIcon.src} />
                Logout
            </p>

            <div className="border-b border-b-[#22222211]" />
        </div>

        <div className="sm:hidden mb-32">
            <a href="https://www.producthunt.com/posts/follio?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-follio" target="_blank" rel="noreferrer">
                <img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=340571&theme=light" alt="Follio - Easy&#0044;&#0032;no&#0045;code&#0032;and&#0032;customizable&#0032;portfolio&#0032;site&#0032;builder | Product Hunt" style={{ width: "250px", height: "50px" }} />
            </a>

            <div className="flex items-center justify-between mt-5">
                <div className={navStyles.description}>{new Date().getFullYear()} &copy; Folio</div>
                <Twitter twitterLink="https://twitter.com/Follio_" target="_blank" rel="noreferrer" />
            </div>
        </div>

        {/* <div className="flex items-center mt-3">
            {!showLoader ? <Button label="Save &amp; publish" action={() => {
                updateAccount()
            }} /> : <></>}
        </div> */}
    </div>
}

export default SideNavLinks