import { useContext } from "react"
import { AppContext } from "../../context/context"
import ViewTitle from "../viewTitle"
import { styles } from "./styles"

const Images = () => {
    const { setProfilePhotoPreview, setCoverPhotoPreview, profilePhotoPreview, coverPhotoPreview } = useContext(AppContext)

    return <div className={styles.editMain}>
        <ViewTitle title="Upload photos" subtitle="Choose you profile and cover photo" />

        <div className={styles.editMainWrapper}>
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
    </div>
}

export default Images