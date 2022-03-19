import { useState, useContext } from "react"
import { AppContext } from "../context/context"
import { styles } from "../styles/styles"
import IntroView from "./views/introView"
import SkillsView from "./views/skillsView"
import SocialsView from "./views/socialsView"
import ViewTitle from "./viewTitle"

const EditView = () => {
    const { previous, next, viewCount } = useContext(AppContext)

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
            <div className={styles.preview}>fsdf</div>
        </div>
    </div>
}

export default EditView