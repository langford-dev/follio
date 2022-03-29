import { useContext } from "react"
import { AppContext } from "../../context/context"
import ViewTitle from "../viewTitle"
import { styles } from "./styles"

const Intro = () => {
    const { setFullname, setWork, setAbout, fullname, work, about, themeColor, saveThemeColorToStorage } = useContext(AppContext)

    return <div className={styles.editMain}>
        <ViewTitle title="Introduction" subtitle="Tell visitors your name, what you do, and who you are" />

        <div className={styles.editMainWrapper}>
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
    </div>
}

export default Intro