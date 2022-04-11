import { useContext } from "react"
import { AppContext } from "../context/context"
import Colors from "./views/colors/colors"
import Images from "./views/images"
import Intro from "./views/intro"
import Meeting from "./views/meeting"
import Payment from "./views/payment"
import Projects from "./views/projects"
import Skills from "./views/skills"
import Socials from "./views/socials"

const EditViewController = () => {
    const { viewCount } = useContext(AppContext)

    switch (viewCount) {
        case 0: return <Intro />
        case 1: return <Images />
        case 2: return <Skills />
        case 3: return <Colors />
        case 4: return <Projects />
        case 5: return <Socials />
        case 6: return <Payment />
        case 7: return <Meeting />
        default: return <div></div>
    }
}

export default EditViewController