import PageView from "./pageView"

const styles = {
    pageView: `m-auto max-w-screen-xl h-screen pt-20`,
    title: `text-3xl font-bold`,
    flexView: `flex h-screen`,
    editingView: `w-1/2 p-5 pt-10 pl-0`,
    preview: `border-l w-1/2 p-5 pt-10`,
    inputContainer: `flex flex-col mt-5`,
    input: `border p-2 outline-none mt-2 w-9/12 rounded-md`,
    label: ``
}

const EditView = () => {
    return <div className={styles.pageView}>
        <div className={styles.flexView}>
            <div className={styles.editingView}>
                <div className={styles.pageTitle}>
                    <p className={styles.title}>About Me</p>
                    <p className=""></p>
                </div>
                <div className={styles.inputContainer}>
                    <label className={styles.label}>Your name</label>
                    <input type="text" className={styles.input} />
                </div>
                <div className={styles.inputContainer}>
                    <label className={styles.label}>Your name</label>
                    <input type="text" className={styles.input} />
                </div>
                <div className={styles.inputContainer}>
                    <label className={styles.label}>Your name</label>
                    <input type="text" className={styles.input} />
                </div>
                <div className={styles.inputContainer}>
                    <label className={styles.label}>Your name</label>
                    <input type="text" className={styles.input} />
                </div>
            </div>
            <div className={styles.preview}>fsdf</div>
        </div>
    </div>
}

export default EditView