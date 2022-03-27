import { useContext } from "react"
import { AppContext } from "../context/context"

const styles = {
    inputContainer: `border p-2 outline-none mt-2 w-full sm:w-9/12 rounded-md flex text-gray-400`,
    input: `outline-none w-9/12 text-black`,
    label: `font-medium`
}

const SocialInput = ({ label, host, fieldFor }) => {
    const { setSocials, setTwitter, setLinkedin, isPremiumAccount, setFacebook, setInstagram, setGithub, setCoffee, setEthAddress, socials } = useContext(AppContext)

    let newSocials = {
        twitter: socials.twitter,
        dev: socials.dev,
        dailydev: socials.dailydev,
        hashnode: socials.hashnode,
        linkedin: socials.linkedin,
        stackoverflow: socials.stackoverflow,
        youtube: socials.youtube,
        dribbble: socials.dribbble,
        twitch: socials.twitch,
        discord: socials.discord,
        behance: socials.behance,
        instagram: socials.instagram,
        github: socials.github,
        coffee: socials.coffee,
        ethAddress: socials.ethAddress,
    }

    const setNewSocials = (value, type) => {

        newSocials[type] = value.trim()

        setSocials(newSocials)

    }

    let dynamicInput = () => {

        switch (fieldFor) {

            case "twitter":
                return <input value={newSocials.twitter} className={styles.input} type="text" onChange={e => setNewSocials(e.target.value, "twitter")} />

            case "facebook":
                return <input value={newSocials.facebook} className={styles.input} type="text" onChange={e => setNewSocials(e.target.value, "facebook")} />

            case "instagram":
                return <input value={newSocials.instagram} className={styles.input} type="text" onChange={e => setNewSocials(e.target.value, "instagram")} />

            case "github":
                return <input value={newSocials.github} className={styles.input} type="text" onChange={e => setNewSocials(e.target.value, "github")} />

            case "linkedin":
                return <input value={newSocials.linkedin} className={styles.input} type="text" onChange={e => setNewSocials(e.target.value, "linkedin")} />

            case "stackoverflow":
                return <input value={newSocials.stackoverflow} className={styles.input} type="text" onChange={e => setNewSocials(e.target.value, "stackoverflow")} />

            case "youtube":
                return <input value={newSocials.youtube} className={styles.input} type="text" onChange={e => setNewSocials(e.target.value, "youtube")} />

            case "dribbble":
                return <input value={newSocials.dribbble} className={styles.input} type="text" onChange={e => setNewSocials(e.target.value, "dribbble")} />

            case "twitch":
                return <input value={newSocials.twitch} className={styles.input} type="text" onChange={e => setNewSocials(e.target.value, "twitch")} />

            case "discord":
                return <input value={newSocials.discord} className={styles.input} type="text" onChange={e => setNewSocials(e.target.value, "discord")} />

            case "behance":
                return <input value={newSocials.behance} className={styles.input} type="text" onChange={e => setNewSocials(e.target.value, "behance")} />

            case "coffee":
                return <input disabled={!isPremiumAccount} value={newSocials.coffee} className={styles.input} type="text" onChange={e => setNewSocials(e.target.value, "coffee")} />

            case "eth-tip":
                return <input disabled={!isPremiumAccount} placeholder="ethereum wallet address" value={newSocials.ethAddress} className={styles.input} type="text" onChange={e => setNewSocials(e.target.value, "eth")} />

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