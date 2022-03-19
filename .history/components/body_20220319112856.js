import { useState, useContext } from "react"
import { AppContext } from "../context/context"
import ViewTitle from "./viewTitle"

const styles = {
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

const EditView = () => {
    const { previous, next, viewCount } = useContext(AppContext)

    const dynamicViews = () => {
        switch (viewCount) {
            case 0:
                return <IntroView />
                break;

            case 1:
                return <div>
                    <ViewTitle title="Your skills" subtitle="Which tools do you use?" />
                </div>
                break;

            default:
                break;
        }
    }

    return <div className={styles.pageView}>
        <div className={styles.flexView}>
            {/* <div className={styles.editingView}>
                <div>
                    <div className={styles.pageTitleView}>
                        <p className={styles.title}>Intro.</p>
                        <p className={styles.textButton}>Next &rarr;</p>
                    </div>
                    <p className="mt-3 mb-5">Tell visitors about you, what you do, and who you are.</p>
                </div>
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
            </div> */}

            {dynamicViews()}
            <div className={styles.preview}>fsdf</div>
        </div>
    </div>
}

export default EditView