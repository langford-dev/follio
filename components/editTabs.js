import { useContext } from "react"
import { AppContext } from "../context/context"
import eye from "../assets/svg/eye.svg"
import Image from "next/image"

const styles = {
    tab: `whitespace-nowrap mr-7 h-14 flex items-center pt-2 block opacity-50`,
    active: `whitespace-nowrap mr-7 h-14 flex items-center pt-2 block opacity-100 border-b-2 border-yellow-300`,
    main: `no-scrollbar fixed top-12 left-0 bg-white border-b w-screen px-3 z-20 flex items-center overflow-x-auto sm:hidden`,
    fab: `shadow-2xl h-14 w-14 bg-blue-600 fixed bottom-0 mb-20 right-0 m-4 rounded-full flex justify-center items-center sm:hidden`,
}

const EditTabs = () => {
    let { showPreview, setShowPreview, viewCount, setViewCount } = useContext(AppContext)

    const setActive = (index) => {
        setViewCount(index)
    }

    return <div>
        <ul className={styles.main}>
            <li onClick={() => setActive(0)} className={viewCount === 0 ? styles.active : styles.tab}>👋 Introduction</li>
            <li onClick={() => setActive(1)} className={viewCount === 1 ? styles.active : styles.tab}>📷 Photos</li>
            <li onClick={() => setActive(2)} className={viewCount === 2 ? styles.active : styles.tab}>🔨 Your skills</li>
            <li onClick={() => setActive(5)} className={viewCount === 5 ? styles.active : styles.tab}>💼 Projects</li>
            <li onClick={() => setActive(3)} className={viewCount === 3 ? styles.active : styles.tab}>🤩 Your socials</li>
            <li onClick={() => setActive(4)} className={viewCount === 4 ? styles.active : styles.tab}>🎁 Receive tips</li>
        </ul>

        {!showPreview ? <div className={styles.fab} onClick={() => setShowPreview(true)}><Image src={eye} /></div> : <></>}
    </div>
}

export default EditTabs