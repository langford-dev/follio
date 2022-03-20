import { useContext } from "react"
import { AppContext } from "../context/context"
import DynamicEditView from "./dynamicEditView"
import Preview from "./preview"
import ViewsTracker from "./viewsTracker"

const styles = {
    pageView: `m-auto max-w-screen-xl h-screen pt-20`,
    flexView: `flex min-h-screen`,
}

const EditView = () => {
    let { showPreview, setShowPreview } = useContext(AppContext)

    return <div className={styles.pageView}>
        <div className={styles.flexView}>
            <ViewsTracker />
            <DynamicEditView />
            <Preview editMode={true} />
            {
                !showPreview ?
                    <div className="w-full left-0 flex justify-center fixed bottom-3 sm:hidden">
                        <div onClick={() => setShowPreview(true)} className="bg-blue-600 whitespace-nowrap text-white p-3 py-2 rounded-full">
                            Show preview
                        </div>
                    </div> : <div></div>
            }
        </div>
    </div>
}

export default EditView