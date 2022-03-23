import { useContext } from "react"
import { AppContext } from "../context/context"
import DynamicEditView from "./dynamicEditView"
import Loader from "./loader"
import Preview1 from "./previews/preview1"
import ViewController from "./viewController"
import ViewsTracker from "./viewsTracker"

const styles = {
    pageView: `m-auto max-w-screen-2xl h-screen pt-20`,
    flexView: `flex min-h-screen`,
}

const EditView = () => {
    let { showPreview, setShowPreview, showLoader } = useContext(AppContext)

    if (showLoader) return <Loader />

    return <div className={styles.pageView}>
        <div className={styles.flexView}>
            <ViewsTracker />
            <DynamicEditView />
            <Preview1 editMode={true} />
            {!showPreview ? <ViewController onShowPreview={() => setShowPreview(true)} /> : <div></div>}
        </div>
    </div>
}

export default EditView