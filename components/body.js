import DynamicEditView from "./dynamicEditView"
import Preview from "./preview"

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
    return <div className={styles.pageView}>
        <div className={styles.flexView}>
            <DynamicEditView />
            <Preview
                about="Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word"
                fullname="Richard McClintock"
                work="Web Developer"
            />
        </div>
    </div>
}

export default EditView