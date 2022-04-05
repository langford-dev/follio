import { useContext, useEffect, useState } from "react"
import { AppContext } from "../../context/context"
import { navStyles } from "../styles/navStyles"
import Link from "next/link"
import Button from "../button"
// import Logo from "../logo"
import ViewsTracker from "../viewsTracker"
import SideNavLinks from "./sideNavLinks"
import Logo from "../logo"

const SideNav = () => {
    const { updateAccount, showLoader } = useContext(AppContext)
    const [route, setRoute] = useState('')

    useEffect(() => {
        console.log(window.location.pathname)
        setRoute(window.location.pathname)
    }, [route])

    return <div className={navStyles.sideNav}>
        {/* <div className="flex items-center justify-center mr-10 mb-5"><Logo /></div> */}
        <SideNavLinks />

        <div className={route === "/" ? "" : "hidden"}>
            <p className={navStyles.description} />
            <div className="pb-5"><ViewsTracker /></div>
            <p className={navStyles.description}>{new Date().getFullYear()} &copy; Folio</p>
        </div>
    </div>
}

export default SideNav