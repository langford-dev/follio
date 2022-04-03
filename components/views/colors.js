import { useContext } from "react"
import { AppContext } from "../../context/context"
import ViewTitle from "../viewTitle"
import { styles } from "./styles"

const Colors = () => {
    const { themeColor, saveThemeColorToStorage } = useContext(AppContext)

    return <div className={styles.editMain}>
        <ViewTitle title="Styles &amp; colors" subtitle="Go crazy with the styles and colors" />

        <div className={styles.editMainWrapper}>
            <div className={styles.inputContainer}>
                <div className="flex">
                    <label className={styles.label}>🎨 Your theme color</label>
                    <input className="ml-5" type="color" value={themeColor} onChange={e => { saveThemeColorToStorage(e.target.value) }} />
                </div>
            </div>
        </div>
    </div>
}

export default Colors