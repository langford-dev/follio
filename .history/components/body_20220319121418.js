import { useContext } from "react"
import { AppContext } from "../context/context"
import { styles } from "../styles/styles"
import Preview from "./preview"
import IntroView from "./views/introView"
import SkillsView from "./views/skillsView"
import SocialsView from "./views/socialsView"

const EditView = () => {
    const { viewCount } = useContext(AppContext)

    const dynamicViews = () => {
        switch (viewCount) {
            case 0:
                return <IntroView />
                break;

            case 1:
                return <SkillsView />
                break;

            case 2:
                return <SocialsView />
                break;

            default:
                break;
        }
    }

    return <div className={styles.pageView}>
        <div className={styles.flexView}>
            {dynamicViews()}
            <Preview />
        </div>
    </div>
}

export default EditView