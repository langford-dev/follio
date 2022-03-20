import { useContext } from "react"
import { AppContext } from "../../context/context"
import ViewTitle from "../viewTitle"

const styles = {
    editingView: `w-screen sm:w-1/2 p-10 px-5 sm:border-l pb-56`,
    inputContainer: `flex flex-col mt-10`,
    input: `border p-2 outline-none mt-2 w-full sm:w-9/12 rounded-md`,
    textArea: `border p-2 outline-none mt-2 w-full sm:w-9/12 rounded-md resize-none h-56`,
    label: `font-bold`
}

const IntroView = () => {
    const { setFullname, setTitle, setAbout, setThemeColor, fullname, title, about, themeColor } = useContext(AppContext)

    return <div className={styles.editingView}>
        <ViewTitle title="Introduction" subtitle="Tell visitors about you, what you do, and who you are." />

        <div className={styles.inputContainer}>
            <label className={styles.label}>Your name</label>
            <input type="text" value={fullname} className={styles.input} onChange={e => setFullname(e.target.value)} />
        </div>
        <div className={styles.inputContainer}>
            <label className={styles.label}>Title</label>
            <input type="text" value={title} className={styles.input} onChange={e => setTitle(e.target.value)} />
        </div>
        <div className={styles.inputContainer}>
            <label className={styles.label}>About you</label>
            <textarea type="text" value={about} className={styles.textArea} onChange={e => setAbout(e.target.value)} />
        </div>
        <div className={styles.inputContainer}>
            <div className="flex">
                <label className={styles.label}>🎨 Your theme color</label>
                <input className="ml-5" type="color" value={themeColor} onChange={e => setThemeColor(e.target.value)} />
            </div>
        </div>
    </div>
}

export default IntroView