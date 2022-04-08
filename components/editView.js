import { useContext } from "react"
import { AppContext } from "../context/context"
import BottomNavigation from "./bottomNavigation"
import EditViewController from "./editViewController"
import EditTabs from "./editTabs"
import Loader from "./loader"
import DefaultPreview from "./previews/defaultPreview"
import eye from "../assets/svg/eye.svg"
import Image from "next/image"
import Header from "./header"
import Preview1 from "./previews/preview1"

const styles = {
    pageView: `m-auto max-w-screen-2xl min-h-screen`,
    pageViewWrapper: `flex min-h-screen`,
    fab: `focus:outline-none focus:ring-0 active:bg-yellow-500 transition active:scale-95 active:shadow-lg hover:bg-white h-14 w-14 bg-[#FFFD63] border border-dark font-bold text-4xl fixed bottom-0 mb-20 right-0 m-4 pb-1 rounded-full flex justify-center items-center sm:hidden`,
}

const EditView = () => {
    let { showPreview, setShowPreview, showLoader, theme } = useContext(AppContext)

    if (showLoader) return <Loader />

    return <div className={styles.pageView}>
        <Header />
        <div className={styles.pageViewWrapper}>
            <EditViewController />

            {!showPreview ? <EditTabs /> : <></>}
            {theme === 1 ? <DefaultPreview editMode={true} /> : <></>}
            {theme === 2 ? <Preview1 editMode={true} /> : <></>}
            {showPreview ? <div className={styles.fab} onClick={() => setShowPreview(false)}>&times;</div> : <></>}
            {!showPreview ? <div className={styles.fab} onClick={() => setShowPreview(true)}><Image src={eye} /></div> : <></>}

            {/* <BottomNavigation /> */}
        </div>
    </div>
}

export default EditView