import { useState, useContext } from "react"
import { AppContext } from "../context/context"

const styles = {
    inputContainer: `border p-2 outline-none mt-2 w-9/12 rounded-md flex`,
    input: `outline-none`,
}

const SocialInput = ({ label, host, value, fieldFor }) => {
    const { setTwitter, setLinkedin, setFacebook, setInstagram, setGithub, twitter, facebook, instagram, linkedin, github } = useContext(AppContext)

    let dynamicInput = () => {

        switch (fieldFor) {

            case "twitter":
                return <input value={twitter} className={styles.input} type="text" onChange={e => setTwitter(e.target.value)} />

            case "facebook":
                return <input value={facebook} className={styles.input} type="text" onChange={e => setFacebook(e.target.value)} />

            case "instagram":
                return <input value={instagram} className={styles.input} type="text" onChange={e => setInstagram(e.target.value)} />

            case "github":
                return <input value={github} className={styles.input} type="text" onChange={e => setGithub(e.target.value)} />

            case "linkedin":
                return <input value={linkedin} className={styles.input} type="text" onChange={e => setLinkedin(e.target.value)} />


            default: return <p>...</p>
        }
    }

    return <div className="mb-10">
        <label className={styles.label}>{label}</label>
        <div className={styles.inputContainer}>
            <p>{host}</p>
            {dynamicInput()}
        </div>
    </div>
}

export default SocialInput