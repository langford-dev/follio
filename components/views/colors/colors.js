import { useContext, useState } from "react"
import { AppContext } from "../../../context/context"
import { editLayoutStyles } from "../../styles/editLayoutStyles"
import ViewTitle from "../../viewTitle"
import { styles } from "../styles"
import Switch from "react-switch";
import Palette from "./palette"
import GradientPalette from "./gradientPalette"

const Colors = () => {
    const { themeColor, saveThemeColorToStorage, theme, setIsGradient, isGradient, gradient, setGradient } = useContext(AppContext)
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

    // const suggestedGradients = [
    //     { from: "#00000", to: "#242424" },
    //     { from: "#cddc39", to: "#2196f3" },
    //     { from: "#e91e63", to: "#2196f3" },
    //     { from: "#8bc34a", to: "#ffc107" },
    // ]

    return <div className={editLayoutStyles.main}>
        <ViewTitle title="Styles &amp; colors" subtitle="Go crazy with the styles and colors" />

        <div className={editLayoutStyles.mainWrapper}>
            <div className={editLayoutStyles.inputContainer}>
                {
                    theme === 3 ?
                        <div className="flex items-center px-5 mb-10 -ml-5">
                            <p>Use Gradient colors</p>
                            <div className="ml-5">
                                <Switch onChange={e => setIsGradient(e)} checked={isGradient} />
                            </div>
                        </div> :
                        <></>
                }

                {
                    !isGradient || theme !== 3 ?
                        <div className="flex">
                            <label className={editLayoutStyles.label}>🎨 Pick a background color</label>
                            <input className="ml-5" type="color" value={themeColor} onChange={e => { saveThemeColorToStorage(e.target.value) }} />
                        </div> :
                        <div>
                            <div className="flex">
                                <label className={editLayoutStyles.label}>From</label>
                                <input className="ml-5" type="color" value={gradient.from} onChange={e => { setGradient({ from: e.target.value, to: gradient.to }) }} />
                            </div>
                            <div className="flex">
                                <label className={editLayoutStyles.label}>To</label>
                                <input className="ml-5" type="color" value={gradient.to} onChange={e => { setGradient({ from: gradient.from, to: e.target.value }) }} />
                            </div>
                        </div>
                }

                {/* SUGGESTED THEMES */}

                {
                    !isGradient || theme !== 3 ?
                        <div>
                            <p className="mt-10">Suggested color themes</p>
                            <div className="flex flex-wrap">
                                {
                                    suggestedColors.map((color, index) => {
                                        return <Palette key={index} color={color.color} name={color.name} />
                                    })
                                }
                            </div>
                        </div>
                        : <></>
                    // : <div className="flex flex-wrap">
                    //     {
                    //         suggestedGradients.map((color, index) => {
                    //             return <GradientPalette key={index} from={color.from} to={color.to} name={color.name} />
                    //         })
                    //     }
                    // </div>
                }
            </div>
        </div>
    </div>
}

export default Colors