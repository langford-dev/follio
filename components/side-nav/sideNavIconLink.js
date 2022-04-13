import Link from "next/link"
import { navStyles } from "../styles/navStyles"

const SideNavIconLink = ({ label, target, route, isNew, forMobile = true, icon }) => {
    route = window.location.pathname

    return <div className={forMobile ? "sm:hidden" : ""}>
        <Link passHref={true} href={target}>
            <p className={route === `${target}` ? navStyles.activeNavLink : navStyles.navLink}>
                <img className={navStyles.navLinkIcon} src={icon} />
                {label}
                {isNew ? <span className="bg-[#ffa5255e] px-2 ml-2 text-sm rounded-full opacity-90">New</span> : <></>}
            </p>
        </Link>
    </div>
}

export default SideNavIconLink