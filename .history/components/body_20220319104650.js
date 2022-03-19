import PageView from "./pageView"

const styles = {
    pageView: `m-auto max-w-screen-xl`,
    title: `text-4xl font-bold`,
    flexView: `flex`,
    editingView: `w-1/2 p-5 pl-0`,
    preview: `border-l w-1/2 p-5`,
}

const EditView = () => {
    return <div className={styles.pageView}>
        <div className={styles.flexView}>
            <div className={styles.editingView}>
                <p className={styles.title}>About Me</p>
            </div>
            <div className={styles.preview}>fsdf</div>
        </div>
    </div>
}

export default EditView