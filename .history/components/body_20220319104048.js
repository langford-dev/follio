import PageView from "./pageView"

const styles = {
    pageView: `m-auto max-w-screen-xl p`,
    title: `text-4xl font-bold`,
}

const EditView = () => {
    return <div className={styles.pageView}>
        <p className={styles.title}>About Me</p>
    </div>
}

export default EditView