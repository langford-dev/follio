import { useState } from "react"

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

const EditView = () => {
    const [viewCount, setViewCount] = useState(0)

    return <div className={styles.pageView}>
        <div className={styles.flexView}>
            <div className={styles.editingView}>
                <div className={styles.pageTitleView}>
                    <div>
                        
                    </div>
                    <p className={styles.textButton}>Next &rarr;</p>
                </div>
                <p>Introduce yourself. Tell visitors about you and who you are.</p>
                <div className={styles.inputContainer}>
                    <label className={styles.label}>👋 Your name</label>
                    <input type="text" className={styles.input} />
                </div>
                <div className={styles.inputContainer}>
                    <label className={styles.label}>💡 Title</label>
                    <input type="text" className={styles.input} />
                </div>
                <div className={styles.inputContainer}>
                    <label className={styles.label}>✏️ About you</label>
                    <textarea type="text" className={styles.textArea} />
                </div>
            </div>
            <div className={styles.preview}>fsdf</div>
        </div>
    </div>
}

export default EditView