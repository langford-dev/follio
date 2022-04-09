import { useContext, useState, useEffect } from "react"
import { AppContext } from "../../../context/context"

const Palette = ({ color, name }) => {
    const { setSuggestedThemeColor, themeColor } = useContext(AppContext)
    const [activeThemeColor, setActiveThemeColor] = useState('')

    const styles = {
        palette: `h-20 border m-10 mb-5 ml-0 w-20 ${color} rounded-lg cursor-pointer`,
        activePalette: `h-20 border-4 border-[#29292963] m-10 mb-5 ml-0 w-20 ${color} rounded-lg cursor-pointer`,
    }

    useEffect(() => {
        let hex = color.replace("bg-", "").replace("[", "").replace("]", "")
        setActiveThemeColor(hex)
    }, [themeColor, color])

    return <div onClick={() => setSuggestedThemeColor(color)}>
        <div className={activeThemeColor === themeColor ? styles.activePalette : styles.palette} />
        <p className="-mt-3">{name}</p>
    </div>
}

export default Palette