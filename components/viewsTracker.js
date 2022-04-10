import { useContext, useEffect, useState } from "react"
import { AppContext } from "../context/context"
import { navStyles } from "./styles/navStyles"

const ViewsTracker = () => {
    let { viewCount, setViewCount } = useContext(AppContext)

    const setActive = (index) => {
        setViewCount(index)
    }

    return <ul>
        <li onClick={() => setActive(0)} className={viewCount === 0 ? navStyles.activeNavLink : navStyles.navLink}>👋 Introduction</li>
        <li onClick={() => setActive(2)} className={viewCount === 2 ? navStyles.activeNavLink : navStyles.navLink}>🔨 Your skills</li>
        <li onClick={() => setActive(5)} className={viewCount === 5 ? navStyles.activeNavLink : navStyles.navLink}>🤩 Your socials</li>
        <li onClick={() => setActive(4)} className={viewCount === 4 ? navStyles.activeNavLink : navStyles.navLink}>💼 Projects</li>
        <li onClick={() => setActive(1)} className={viewCount === 1 ? navStyles.activeNavLink : navStyles.navLink}>📷 Add photos</li>
        <li onClick={() => setActive(3)} className={viewCount === 3 ? navStyles.activeNavLink : navStyles.navLink}>🎨 Styles &amp; colors</li>
        <li onClick={() => setActive(6)} className={viewCount === 6 ? navStyles.activeNavLink : navStyles.navLink}>🎁 Receive tips</li>
    </ul>
}

export default ViewsTracker