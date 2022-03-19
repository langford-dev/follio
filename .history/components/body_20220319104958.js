import PageView from "./pageView"

const styles = {
    pageView: `m-auto max-w-screen-xl`,
    title: `text-4xl font-bold`,
    flexView: `flex`,
    editingView: `w-1/2 p-5 pl-0`,
    preview: `border-l w-1/2 p-5`,
    inputContainer: `flex flex-col`,
    input: `border p-2 outline-none mt-2`,
}

const EditView = () => {
    return <div className={styles.pageView}>
        <div className={styles.flexView}>
            <div className={styles.editingView}>
                <p className={styles.title}>About Me</p>
                <br />
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