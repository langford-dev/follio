import { useContext } from "react"
import { AppContext } from "../context/context"

const styles = {
    viewTitle: `hidden items-center justify-between w-full sm:w-min sm:flex`,
    title: `text-3xl font-bold`,
    textButton: `mt-5 sm:mt-0 text-blue-600 cursor-pointer select-none whitespace-nowrap`,
    pageTitleView: `flex items-start justify-start flex-col sm:items-center sm:justify-between sm:flex-row`,
}

const ViewTitle = ({ title, subtitle }) => {
    const { previous, next, viewCount, maxViewCount } = useContext(AppContext)

    return <div>
        <div className={styles.pageTitleView}>
            <p className={styles.title}>{title}</p>
            <div className={styles.viewTitle}>
                {
                    viewCount > 0 ? <p className={styles.textButton} onClick={() => previous()}>&larr; Previous</p> : <div className="hidden"></div>
                }

                {
                    viewCount < maxViewCount ? <div className="flex">
                        <div className="sm:mx-7" />
                        <p className={styles.textButton} onClick={() => next()}>Next &rarr;</p>
                    </div> : <div></div>
                }
            </div>
        </div>
        <p className="mt-3 mb-5">{subtitle}</p>
    </div>
}

export default ViewTitle