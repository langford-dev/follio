import { useContext } from "react"
import { AppContext } from "../../context/context"
import SocialInput from "../socialInput"
import { editLayoutStyles } from "../styles/editLayoutStyles"
import ViewTitle from "../viewTitle"

const Intro = () => {
    const { setFullname, setWork, setAbout, fullname, work, about, setTagline, tagline } = useContext(AppContext)

    return <div className={editLayoutStyles.main}>
        <ViewTitle title="Introduction" subtitle="Tell visitors your name, what you do, and who you are" />

        <div className={editLayoutStyles.mainWrapper}>
            {/* <div className={editLayoutStyles.inputContainer}>
                <label className={editLayoutStyles.label}>Username</label>
                <input type="text" value={fullname} className={editLayoutStyles.input} onChange={e => setFullname(e.target.value)} />
            </div> */}

            {/* <SocialInput label="Username" host="https://follio.app/" fieldFor="username" /> */}

            <div className={editLayoutStyles.inputContainer}>
                <label className={editLayoutStyles.label}>Your name</label>
                <input type="text" value={fullname} className={editLayoutStyles.input} onChange={e => setFullname(e.target.value)} />
            </div>

            <div className={editLayoutStyles.inputContainer}>
                <label className={editLayoutStyles.label}>Your work</label>
                <input type="text" value={work} className={editLayoutStyles.input} onChange={e => setWork(e.target.value)} />
            </div>

            <div className={editLayoutStyles.inputContainer}>
                <label className={editLayoutStyles.label}>Tagline</label>
                <textarea type="text" placeholder="I am Langford 👋, a web developer, and content creator." value={tagline} className={editLayoutStyles.textArea} onChange={e => setTagline(e.target.value)} />
            </div>

            <div className={editLayoutStyles.inputContainer}>
                <label className={editLayoutStyles.label}>About you</label>
                <textarea type="text" value={about} className={editLayoutStyles.textArea} onChange={e => setAbout(e.target.value)} />
            </div>
        </div>
    </div>
}

export default Intro