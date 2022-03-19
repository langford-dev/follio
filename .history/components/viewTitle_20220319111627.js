const styles = {
    pageView: `m-auto max-w-screen-xl h-screen pt-20`,
    title: `text-3xl font-bold`,
    textButton: `text-blue-600 cursor-pointer`,
    pageTitleView: `flex items-center justify-between`,
}

const ViewTitle = ({ title, subtitle, maxViews, minViews, next, prev }) => {
    return <div>
        <div className={styles.pageTitleView}>
            <p className={styles.title}>{ title}</p>
            <p className={styles.textButton}>Next &rarr;</p>
        </div>
        <p className="mt-3 mb-5">{ subtitle}</p>
    </div>
}

export default ViewTitle