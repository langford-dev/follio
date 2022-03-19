import { styles } from "../../styles/styles"
import ViewTitle from "../viewTitle"

styles = {
    pageView: `m-auto max-w-screen-xl h-screen pt-20`,
    flexView: `flex h-screen`,
    editingView: `w-1/2 p-10 border-l`,
    preview: `border-l w-1/2 p-10 border-r`,
    inputContainer: `flex flex-col mt-10`,
    input: `border p-2 outline-none mt-2 w-9/12 rounded-md`,
    textArea: `border p-2 outline-none mt-2 w-9/12 rounded-md resize-none h-56`,
    label: ``,
}

const IntroView = () => {
    return <div className={styles.editingView}>
        <ViewTitle title="Intro" subtitle="Tell visitors about you, what you do, and who you are." />

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
}

export default IntroView