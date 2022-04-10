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

        <div className={route === "/" || route === "/edit" ? "" : "hidden"}>
            <p className={navStyles.description} />
            <div className="pb-5"><ViewsTracker /></div>
            <p className={navStyles.description}>{new Date().getFullYear()} &copy; Folio</p>
        </div>
    </div>
}

export default SideNav