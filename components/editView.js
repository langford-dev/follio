import { useContext } from "react"
import { AppContext } from "../context/context"
import BottomNavigation from "./bottomNavigation"
import DynamicEditView from "./dynamicEditView"
import EditTabs from "./editTabs"
import Loader from "./loader"
import Preview1 from "./previews/preview1"
import Preview2 from "./previews/preview2"
import Preview3 from "./previews/preview3"
import ViewsTracker from "./viewsTracker"

const styles = {
    pageView: `m-auto max-w-screen-2xl h-screen pt-20`,
    flexView: `flex min-h-screen`,
    fab: `shadow-2xl h-14 w-14 bg-blue-600 text-white font-bold text-4xl fixed bottom-0 mb-20 right-0 m-4 pb-1 rounded-full flex justify-center items-center sm:hidden`,
}

const EditView = () => {
    let { showPreview, setShowPreview, showLoader, theme } = useContext(AppContext)

    if (showLoader) return <Loader />

    return <div className={styles.pageView}>
        <div className={styles.flexView}>
            <ViewsTracker />
            <DynamicEditView />
            <EditTabs />
            {theme === 1 ? <Preview1 editMode={true} /> : <></>}
            {theme === 2 ? <Preview2 editMode={true} /> : <></>}
            {theme === 3 ? <Preview3 editMode={true} /> : <></>}
            <BottomNavigation />
            {showPreview ? <div className={styles.fab} onClick={() => setShowPreview(false)}>&times;</div> : <></>}
        </div>
    </div>
}

export default EditView