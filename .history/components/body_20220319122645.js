import { useContext } from "react"
import { AppContext } from "../context/context"
import Preview from "./preview"
import IntroView from "./views/introView"
import SkillsView from "./views/skillsView"
import SocialsView from "./views/socialsView"

const styles = {
    pageView: `m-auto max-w-screen-xl h-screen pt-20`,
    flexView: `flex h-screen`,
    editingView: `w-1/2 p-10 border-l`,
    preview: `border-l w-1/2 p-10 border-r`,
    inputContainer: `flex flex-col mt-10`,
    input: `border p-2 outline-none mt-2 w-9/12 rounded-md`,
    textArea: `border p-2 outline-none mt-2 w-9/12 rounded-md resize-none h-56`,
    label: ``,
}

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
            <Preview
                about="Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word"
                fullname="Richard McClintock"
                work="Web"
            />
        </div>
    </div>
}

export default EditView