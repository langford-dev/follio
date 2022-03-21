import { useContext } from "react"
import { AppContext } from "../context/context"
import ImagesView from "./views/imagesView"
import IntroView from "./views/introView"
import PaymentView from "./views/paymentView"
import SkillsView from "./views/skillsView"
import SocialsView from "./views/socialsView"

const DynamicEditView = () => {
    const { viewCount } = useContext(AppContext)

    switch (viewCount) {
        case 0: return <IntroView />
        case 1: return <ImagesView />
        case 2: return <SkillsView />
        case 3: return <SocialsView />
        case 4: return <PaymentView />
        default: return <div></div>
    }
}

export default DynamicEditView