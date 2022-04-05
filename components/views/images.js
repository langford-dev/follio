import { useContext } from "react"
import { AppContext } from "../../context/context"
import { editLayoutStyles } from "../styles/editLayoutStyles"
import ViewTitle from "../viewTitle"

const Images = () => {
    const { setProfilePhotoPreview, setCoverPhotoPreview } = useContext(AppContext)

    return <div className={editLayoutStyles.main}>
        <ViewTitle title="Upload photos" subtitle="Choose you profile and cover photo" />

        <div className={editLayoutStyles.mainWrapper}>
            <div className={editLayoutStyles.inputContainer}>
                <label className={editLayoutStyles.label}>Profile photo</label>
                <input
                    onChange={e => setProfilePhotoPreview(e.target.files[0])}
                    className={editLayoutStyles.input} type="file" accept="image/*"
                />
            </div>

            <div className={editLayoutStyles.inputContainer}>
                <label className={editLayoutStyles.label}>Cover photo</label>
                <input
                    onChange={e => setCoverPhotoPreview(e.target.files[0])}
                    className={editLayoutStyles.input} type="file" accept="image/*"
                />
            </div>
        </div>
    </div>
}

export default Images