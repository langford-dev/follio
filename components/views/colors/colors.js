import { useContext, useState } from "react"
import { AppContext } from "../../../context/context"
import { editLayoutStyles } from "../../styles/editLayoutStyles"
import ViewTitle from "../../viewTitle"
import { styles } from "../styles"
import Palette from "./palette"

const Colors = () => {
    const { themeColor, saveThemeColorToStorage } = useContext(AppContext)
    const suggestedColors = [
        { color: "bg-[#292929]", name: "Dark knight" },
        { color: "bg-[#374EBE]", name: "Blue seige" },
        { color: "bg-[#f2f2f2]", name: "Gray goose" },
        { color: "bg-[#D03E3E]", name: "Red hood" },
        { color: "bg-[#614D99]", name: "per-ple" },
        { color: "bg-[#F6DC3B]", name: "Yeellow" },
        { color: "bg-[#f44336]", name: "Red" },
        { color: "bg-[#e91e63]", name: "Pink" },
        { color: "bg-[#9c27b0]", name: "Purple" },
        { color: "bg-[#FFFFFF]", name: "White" },
        { color: "bg-[#673ab7]", name: "Deep Purple" },
        { color: "bg-[#03a9f4]", name: "Light Blue" },
        { color: "bg-[#00bcd4]", name: "Cyan" },
        { color: "bg-[#009688]", name: "Teal" },
        { color: "bg-[#cddc39]", name: "Lime" },
        { color: "bg-[#ffc107]", name: "Amber" },
    ]

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
                    {
                        suggestedColors.map((color, index) => {
                            return <Palette key={index} color={color.color} name={color.name} />
                        })
                    }
                </div>
            </div>
        </div>
    </div>
}

export default Colors