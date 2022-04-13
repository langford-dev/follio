import { useContext } from "react"
import { AppContext } from "../context/context"

const styles = {
    tab: `whitespace-nowrap mr-3 mt-3 px-3 flex items-center py-2 opacity-50 min-w-min`,
    active: `whitespace-nowrap mr-3 mt-3 rounded-lg px-3 flex items-center py-2 block opacity-100 min-w-min bg-[#29292914]`,
    main: `fixed top-12 left-0 bg-[#fff] w-screen px-3 py-3 z-20 flex items-center overflow-x-auto lg:hidden`,
    fab: `shadow-2xl h-14 w-14 bg-blue-600 fixed bottom-0 right-0 m-4 mb-0 rounded-full flex justify-center items-center sm:hidden`,
}

const EditTabs = () => {
    let { viewCount, setViewCount } = useContext(AppContext)

    const setActive = (index) => {
        setViewCount(index)
    }

    return <div>
        <ul className={styles.main}>
            <li onClick={() => setActive(0)} className={viewCount === 0 ? styles.active : styles.tab}>👋 Introduction</li>
            <li onClick={() => setActive(1)} className={viewCount === 1 ? styles.active : styles.tab}>📷 Add photos</li>
            <li onClick={() => setActive(2)} className={viewCount === 2 ? styles.active : styles.tab}>🔨 Your skills</li>
            <li onClick={() => setActive(5)} className={viewCount === 5 ? styles.active : styles.tab}>🤩 Your socials</li>
            <li onClick={() => setActive(4)} className={viewCount === 4 ? styles.active : styles.tab}>💼 Projects</li>
            <li onClick={() => setActive(7)} className={viewCount === 7 ? styles.active : styles.tab}>📅 Meeting schedule</li>
            <li onClick={() => setActive(3)} className={viewCount === 3 ? styles.active : styles.tab}>🎨 Styles &amp; colors</li>
            <li onClick={() => setActive(6)} className={viewCount === 6 ? styles.active : styles.tab}>🎁 Payments</li>
        </ul>
    </div>
}

export default EditTabs