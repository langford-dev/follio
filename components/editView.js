import { useContext } from "react"
import { AppContext } from "../context/context"
import BottomNavigation from "./bottomNavigation"
import EditViewController from "./editViewController"
import EditTabs from "./editTabs"
import Loader from "./loader"
import DefaultPreview from "./previews/defaultPreview"
import ViewsTracker from "./viewsTracker"
import Header from "./header"

const styles = {
    pageView: `m-auto max-w-screen-2xl min-h-screen`,
    pageViewWrapper: `flex min-h-screen`,
    fab: `shadow-2xl h-14 w-14 bg-blue-600 text-white font-bold text-4xl fixed bottom-0 mb-20 right-0 m-4 pb-1 rounded-full flex justify-center items-center sm:hidden`,
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
            {showPreview ? <div className={styles.fab} onClick={() => setShowPreview(false)}>&times;</div> : <></>}

            <BottomNavigation />
        </div>
    </div>
}

export default EditView