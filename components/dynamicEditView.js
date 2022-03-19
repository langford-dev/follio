import { useContext } from "react"
import { AppContext } from "../context/context"
import IntroView from "./views/introView"
import SkillsView from "./views/skillsView"
import SocialsView from "./views/socialsView"

const DynamicEditView = () => {
    const { viewCount } = useContext(AppContext)

    switch (viewCount) {
        case 0: return <IntroView />
        case 1: return <SkillsView />
        case 2: return <SocialsView />
        default: return <div></div>
    }
}

export default DynamicEditView