import { useContext } from "react"
import { AppContext } from "../context/context"

const styles = {
    themeCard: `object-cover border w-full mb-3 sm:mr-5 sm:mb-5 bg-gray-300 sm:w-60 h-80 rounded-2xl cursor-pointer`,
    activeThemeCard: `object-cover w-full mb-3 sm:mr-5 sm:mb-5 bg-gray-300 sm:w-60 h-80 rounded-2xl cursor-pointer border-4 border-brand`
}

const ThemeCard = ({ index = 1, thumbnail = "" }) => {
    const { theme, changeThemeInSessionStorage } = useContext(AppContext)

    return <img src={thumbnail.src} alt="" onClick={() => changeThemeInSessionStorage(index)} className={index === theme ? styles.activeThemeCard : styles.themeCard} />
}

export default ThemeCard