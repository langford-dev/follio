import PageView from "./pageView"

const styles = {
    pageView: `m-auto max-w-screen-xl py-10`,
    title: `text-4xl font-bold`,
    flexView: `flex `
}

const EditView = () => {
    return <div className={styles.pageView}>
        <p className={styles.title}>About Me</p>

        <div className={styles.flexView}>

        </div>
    </div>
}

export default EditView