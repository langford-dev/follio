import { styles } from "../../styles/styles"
import ViewTitle from "../viewTitle"

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

const SocialsView = () => {
    return <div className={styles.editingView}>
        <ViewTitle title="Your socials" subtitle="Let visitors connect with you through your socials" />
    </div>
}

export default SocialsView