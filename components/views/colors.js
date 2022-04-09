import { useContext, useState } from "react"
import { AppContext } from "../../context/context"
import { editLayoutStyles } from "../styles/editLayoutStyles"
import ViewTitle from "../viewTitle"
import SuggestedColor from "./colors/suggestedColor"
import { styles } from "./styles"

const Colors = () => {
    const { themeColor, saveThemeColorToStorage } = useContext(AppContext)
    const [activeThemeColor, setActiveThemeColor] = useState('')


    return <div className={editLayoutStyles.main}>
        <ViewTitle title="Styles &amp; colors" subtitle="Go crazy with the styles and colors" />

        <div className={editLayoutStyles.mainWrapper}>
            <div className={editLayoutStyles.inputContainer}>
                <div className="flex">
                    <label className={editLayoutStyles.label}>🎨 Pick a background color</label>
                    <input className="ml-5" type="color" value={themeColor} onChange={e => { saveThemeColorToStorage(e.target.value) }} />
                </div>

                {/* SUGGESTED THEMES */}
                <p className="mt-10">Suggested color themes</p>
                <div className="flex flex-wrap">
                    <SuggestedColor color={"bg-[#292929]"} name="Dark knight" />
                    <SuggestedColor color={"bg-[#374EBE]"} name="Blue seige" />
                    <SuggestedColor color={"bg-[#f2f2f2]"} name="Gray goose" />
                    <SuggestedColor color={"bg-[#D03E3E]"} name="Red hood" />
                    <SuggestedColor color={"bg-[#614D99]"} name="Pur ple" />
                    <SuggestedColor color={"bg-[#F6DC3B]"} name="Yeelloww" />
                </div>
            </div>
        </div>
    </div>
}

export default Colors