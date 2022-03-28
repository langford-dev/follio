import { useContext } from "react"
import { AppContext } from "../../context/context"
import ViewTitle from "../viewTitle"

const styles = {
    editingView: `w-screen sm:w-1/2 p-0 -mt-5 sm:mt-0 sm:border-l pb-56 bg-white`,
    inputContainer: `flex flex-col mt-10 px-5`,
    input: `border p-2 outline-none mt-2 w-full sm:w-9/12 rounded-md`,
    textArea: `border p-2 outline-none mt-2 w-full sm:w-9/12 rounded-md resize-none h-56`,
    label: `font-medium`
}

const Intro = () => {
    const { setFullname, setWork, setAbout, fullname, work, about, themeColor, saveThemeColorToStorage } = useContext(AppContext)

    return <div className={styles.editingView}>
        <ViewTitle title="Introduction" subtitle="Tell visitors your name, what you do, and who you are" />

        <div className={styles.inputContainer}>
            <label className={styles.label}>Your name</label>
            <input type="text" value={fullname} className={styles.input} onChange={e => setFullname(e.target.value)} />
        </div>
        <div className={styles.inputContainer}>
            <label className={styles.label}>Your work</label>
            <input type="text" value={work} className={styles.input} onChange={e => setWork(e.target.value)} />
        </div>
        <div className={styles.inputContainer}>
            <label className={styles.label}>About you</label>
            <textarea type="text" value={about} className={styles.textArea} onChange={e => setAbout(e.target.value)} />
        </div>
        <div className={styles.inputContainer}>
            <div className="flex">
                <label className={styles.label}>🎨 Your theme color</label>
                <input className="ml-5" type="color" value={themeColor} onChange={e => { saveThemeColorToStorage(e.target.value) }} />
            </div>
        </div>
    </div>
}

export default Intro