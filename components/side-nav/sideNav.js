import { useEffect, useState } from "react"
import { navStyles } from "../styles/navStyles"
import ViewsTracker from "../viewsTracker"
import SideNavLinks from "./sideNavLinks"

const SideNav = () => {
    const [route, setRoute] = useState('')

    useEffect(() => {
        console.log(window.location.pathname)
        setRoute(window.location.pathname)
    }, [route])

    return <div className={navStyles.sideNav}>
        <SideNavLinks />

        <div className={route === "/account/edit" ? "" : "hidden"}>
            <p className={navStyles.description} />

            <div className="pb-5">
                <ViewsTracker />
            </div>
            <p className={navStyles.description}>{new Date().getFullYear()} &copy; Folio</p>
        </div>

        <br />
        <a href="https://www.producthunt.com/posts/follio?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-follio" target="_blank" rel="noreferrer">
            <img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=340571&theme=light" alt="Follio - Easy&#0044;&#0032;no&#0045;code&#0032;and&#0032;customizable&#0032;portfolio&#0032;site&#0032;builder | Product Hunt" style={{ width: "250px", height: "50px" }} />
        </a>
    </div >
}

export default SideNav