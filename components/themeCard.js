const styles = {
    themeCard: `w-full mb-5 sm:mr-5 sm:mb-5 bg-gray-300 sm:w-60 h-96 rounded-2xl`,
    activeThemeCard: `w-full mb-5 sm:mr-5 sm:mb-5 bg-gray-300 sm:w-60 h-96 rounded-2xl border-2 border-blue-300`
}

const ThemeCard = ({ index = 0 }) => {
    return <div className={index === 0 ? styles.activeThemeCard : styles.themeCard}></div>
}

export default ThemeCard