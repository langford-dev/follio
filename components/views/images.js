import { useContext } from "react"
import { AppContext } from "../../context/context"
import ViewTitle from "../viewTitle"

const styles = {
    editingView: `w-screen sm:w-1/2 p-0 -mt-5 sm:mt-0 sm:border-l pb-56 bg-white`,
    inputContainer: `flex flex-col mt-10 px-5`,
    input: `border p-2 outline-none mt-2 w-full sm:w-9/12 rounded-md cursor-pointer`,
    // textArea: `border p-2 outline-none mt-2 w-full sm:w-9/12 rounded-md resize-none h-56`,
    label: `font-medium`
}

const Images = () => {
    const { setProfilePhotoPreview, setCoverPhotoPreview, profilePhotoPreview, coverPhotoPreview } = useContext(AppContext)

    return <div className={styles.editingView}>
        <ViewTitle title="Upload photos" subtitle="Choose you profile and cover photo" />

        <div className={styles.inputContainer}>
            <label className={styles.label}>Profile photo</label>
            <input
                onChange={e => setProfilePhotoPreview(e.target.files[0])}
                className={styles.input} type="file" accept="image/*"
            />
        </div>

        <div className={styles.inputContainer}>
            <label className={styles.label}>Cover photo</label>
            <input
                onChange={e => setCoverPhotoPreview(e.target.files[0])}
                className={styles.input} type="file" accept="image/*"
            />
        </div>
    </div>
}

export default Images