import PageView from "./pageView"

const styles = {
    pageView: `m-auto max-w-screen-xl py-10`,
    title: `text-4xl font-bold`,
    flexView: `flex`,
    editingView: ` border-l-2 w-1/2`,
    preview: `w-1/2`,
}

const EditView = () => {
    return <div className={styles.pageView}>
        <p className={styles.title}>About Me</p>

        <div className={styles.flexView}>
            <div className={styles.editingView}>fsdf</div>
            <div className={styles.preview}>fsdf</div>
        </div>
    </div>
}

export default EditView