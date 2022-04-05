import { useContext } from "react"
import { AppContext } from "../../context/context"
import { editLayoutStyles } from "../styles/editLayoutStyles"
import ViewTitle from "../viewTitle"
import { styles } from "./styles"

const Colors = () => {
    const { themeColor, saveThemeColorToStorage } = useContext(AppContext)

    return <div className={editLayoutStyles.main}>
        <ViewTitle title="Styles &amp; colors" subtitle="Go crazy with the styles and colors" />

        <div className={editLayoutStyles.mainWrapper}>
            <div className={editLayoutStyles.inputContainer}>
                <div className="flex">
                    <label className={editLayoutStyles.label}>🎨 Your theme color</label>
                    <input className="ml-5" type="color" value={themeColor} onChange={e => { saveThemeColorToStorage(e.target.value) }} />
                </div>
            </div>
        </div>
    </div>
}

export default Colors