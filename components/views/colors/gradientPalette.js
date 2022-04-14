import { useContext, useState, useEffect } from "react"
import { AppContext } from "../../../context/context"

const GradientPalette = ({ from, to, name }) => {
    const { setGradient, gradient } = useContext(AppContext)
    const [activeThemeColor, setActiveThemeColor] = useState('')

    let styles = {
        palette: `h-20 border m-10 mb-5 ml-0 w-20 bg-gradient-to-r from-[${from}] to-[${to}] rounded-lg cursor-pointer`,
        activePalette: `h-20 border-4 border-[#29292963] m-10 mb-5 ml-0 w-20 rounded-lg cursor-pointer`,
    }

    useEffect(() => {
        // let hex = color.replace("bg-", "").replace("[", "").replace("]", "")
        setActiveThemeColor(gradient)
    }, [gradient])

    return <div onClick={() => setGradient({ from: from, to: to })}>
        <div className={activeThemeColor === gradient ? styles.activePalette : styles.palette} />
        <p className="-mt-3">{name}</p>
    </div>
}

export default GradientPalette