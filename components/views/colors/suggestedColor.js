import { useContext } from "react"
import { AppContext } from "../../../context/context"

const SuggestedColor = ({ color, name }) => {
    const { saveThemeColorToStorage } = useContext(AppContext)

    const setSuggestedThemeColor = (tailwindColor) => {
        let hex = tailwindColor.replace("bg-", "").replace("[", "").replace("]", "")
        saveThemeColorToStorage(hex)
    }

    return <div onClick={() => setSuggestedThemeColor(color)}>
        <div className={`h-20 border m-10 ml-0 w-20 ${color} rounded-lg cursor-pointer`} />
        <p className="-mt-4">{name}</p>
    </div>
}

export default SuggestedColor