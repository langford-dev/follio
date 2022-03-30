import { useContext } from "react"
import { AppContext } from "../context/context"
import Images from "./views/images"
import Intro from "./views/intro"
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
        case 3: return <Projects />
        case 4: return <Socials />
        case 5: return <Payment />
        default: return <div></div>
    }
}

export default EditViewController