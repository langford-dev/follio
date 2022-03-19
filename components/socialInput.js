import { useState, useContext } from "react"
import { AppContext } from "../context/context"

const styles = {
    inputContainer: `border p-2 outline-none mt-2 w-9/12 rounded-md flex`,
    input: `outline-none`,
}

const SocialInput = ({ label, host, fieldFor }) => {
    const { setTwitter, setLinkedin, setFacebook, setInstagram, setGithub, setCoffee, usernames } = useContext(AppContext)

    let dynamicInput = () => {

        switch (fieldFor) {

            case "twitter":
                return <input value={usernames.twitter} className={styles.input} type="text" onChange={e => setTwitter(e.target.value)} />

            case "facebook":
                return <input value={usernames.facebook} className={styles.input} type="text" onChange={e => setFacebook(e.target.value)} />

            case "instagram":
                return <input value={usernames.instagram} className={styles.input} type="text" onChange={e => setInstagram(e.target.value)} />

            case "github":
                return <input value={usernames.github} className={styles.input} type="text" onChange={e => setGithub(e.target.value)} />

            case "linkedin":
                return <input value={usernames.linkedin} className={styles.input} type="text" onChange={e => setLinkedin(e.target.value)} />

            case "coffee":
                return <input value={usernames.coffee} className={styles.input} type="text" onChange={e => setCoffee(e.target.value)} />


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