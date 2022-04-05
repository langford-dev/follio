import { useContext } from "react"
import { AppContext } from "../context/context"

const styles = {
    viewTitle: `hidden items-center justify-between w-full sm:w-min sm:flex`,
    title: `text-2xl sm:text-3xl mb-2 font-extrabold`,
    textButton: `mt-5 sm:mt-0 text-blue-600 cursor-pointer select-none whitespace-nowrap`,
    pageTitleView: `flex items-start justify-start flex-col sm:items-center sm:justify-between sm:flex-row -mt-5 sm:mt-0`,
}

const ViewTitle = ({ title, subtitle }) => {
    const { previous, next, viewCount, maxViewCount } = useContext(AppContext)

    return <div className="border-b sm:border-0 pt-16 sm:pt-0">
        <div className={styles.pageTitleView}>
            <p className={styles.title}>{title}</p>
            {/* <div className={styles.viewTitle}>
                {
                    viewCount > 0 ? <p className={styles.textButton} onClick={() => previous()}>&larr; Previous</p> : <div className="hidden"></div>
                }

                {
                    viewCount < maxViewCount ? <div className="flex">
                        <div className="sm:mx-7" />
                        <p className={styles.textButton} onClick={() => next()}>Next &rarr;</p>
                    </div> : <div></div>
                }
            </div> */}
        </div>
        <p className="mb-3 text-gray-500">{subtitle}</p>
    </div>
}

export default ViewTitle