const styles = {
    pageView: `m-auto max-w-screen-xl h-screen pt-20`,
    title: `text-3xl font-bold`,
    flexView: `flex h-screen`,
    editingView: `w-1/2 p-10 border-l`,
    preview: `border-l w-1/2 p-10 border-r`,
    inputContainer: `flex flex-col mt-10`,
    input: `border p-2 outline-none mt-2 w-9/12 rounded-md`,
    textArea: `border p-2 outline-none mt-2 w-9/12 rounded-md resize-none h-56`,
    label: ``,
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