import { useContext } from "react"
import { AppContext } from "../context/context"
import EditViewController from "./editViewController"
import EditTabs from "./editTabs"
import Loader from "./loader"
import DefaultPreview from "./previews/defaultPreview"
import Preview1 from "./previews/preview1"
import Header from "./header/header"

const styles = {
    pageView: `m-auto max-w-screen-2xl min-h-screen`,
    pageViewWrapper: `flex min-h-screen`,
    fabContainer: `w-screen p-5 h-max fixed bottom-0 left-0`,
    fab: `transition text-2xl flex items-center m-auto bg-accent text-white w-min whitespace-nowrap p-1 px-3 rounded-full`
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

            <div className="sm:hidden">
                {
                    showPreview ?
                        <div className={styles.fabContainer}>
                            <div className={styles.fab} onClick={() => setShowPreview(false)}>
                                <p>Close preview &nbsp;</p>
                                &times;
                            </div>
                        </div>
                        : <></>
                }

                {
                    !showPreview ?
                        <div className={styles.fabContainer}>
                            <div className={styles.fab} onClick={() => setShowPreview(true)}>
                                <p>Preview</p>
                            </div>
                        </div>
                        : <></>
                }
            </div>
        </div>
    </div>
}

export default EditView