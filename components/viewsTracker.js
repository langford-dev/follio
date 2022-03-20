import { useContext } from "react"
import { AppContext } from "../context/context"

const styles = {
    mainTracker: `hidden fixed left-0 pl-5 pt-5 xl:block lg:bottom-0`,
    trackerItem: `cursor-pointer hover:bg-gray-100 p-3 mb-3 w-40 text-center`,
    active: `cursor-pointer bg-gray-100 p-3 mb-3 w-40 text-center border`,
}

const ViewsTracker = () => {
    let { viewCount, setViewCount } = useContext(AppContext)

    const setActive = (index) => {
        setViewCount(index)
    }

    return <ul className={styles.mainTracker}>
        <li onClick={() => setActive(0)} className={viewCount === 0 ? styles.active : styles.trackerItem}>Introduction</li>
        <li onClick={() => setActive(1)} className={viewCount === 1 ? styles.active : styles.trackerItem}>Your skills</li>
        <li onClick={() => setActive(2)} className={viewCount === 2 ? styles.active : styles.trackerItem}>Your socials</li>
        <li onClick={() => setActive(3)} className={viewCount === 3 ? styles.active : styles.trackerItem}>Receive tips</li>
    </ul>
}

export default ViewsTracker