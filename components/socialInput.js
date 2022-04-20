import { useContext } from "react"
import { AppContext } from "../context/context"
import github from "../assets/svg/github.svg"
import twitter from "../assets/svg/twitter.svg"
import instagram from "../assets/svg/instagram.svg"
import linkedin from "../assets/svg/linkedin.svg"
import stackoverflow from "../assets/svg/stackoverflow.svg"
import youtube from "../assets/svg/youtube.svg"
import dribbble from "../assets/svg/dribbble.svg"
import twitch from "../assets/svg/twitch.svg"
import discord from "../assets/svg/discord.svg"
import behance from "../assets/svg/behance.svg"

const styles = {
    inputContainer: `p-3 mt-1 border border-[#84858e35] bg-[#2c3643] p-3 rounded-xl w-11/12 rounded-md flex items-center sm:w-9/12`,
    // inputContainer: `outline-none border border-[#84858e35] p-3 rounded-xl mt-2 border sm:w-9/12 rounded-md flex`,
    // // inputContainer: `bg-[#fbfcfff2] border p-2 outline-none mt-2 w-full sm:w-9/12 rounded-md flex`,
    // // input: `outline-none w-full border p-3 rounded-xl mt-2`,
    // // input: `outline-none w-9/12 bg-transparent`,
    input: `outline-none w-5/12 bg-[#2c3643]`,
    label: `flex opacity-50 items-center`,
    labelIcon: `mr-2`,
}

const SocialInput = ({ label, host, fieldFor }) => {
    const { setSocials, isPremiumAccount, socials } = useContext(AppContext)

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
                return <div className="mb-8">
                    <label className={styles.label}>
                        <img className={styles.labelIcon} src={twitter.src} alt="" />
                        {label}
                    </label>
                    <div className={styles.inputContainer}>
                        <p>{host}</p>
                        <input value={newSocials.twitter} className={styles.input} type="text" onChange={e => setNewSocials(e.target.value, "twitter")} />
                    </div>
                </div>

            case "instagram":
                return <div className="mb-8">
                    <label className={styles.label}>
                        <img className={styles.labelIcon} src={instagram.src} alt="" />
                        {label}
                    </label>
                    <div className={styles.inputContainer}>
                        <p>{host}</p>
                        <input value={newSocials.instagram} className={styles.input} type="text" onChange={e => setNewSocials(e.target.value, "instagram")} />
                    </div>
                </div>

            case "github":
                return <div className="mb-8">
                    <label className={styles.label}>
                        <img className={styles.labelIcon} src={github.src} alt="" />
                        {label}
                    </label>
                    <div className={styles.inputContainer}>
                        <p>{host}</p>
                        <input value={newSocials.github} className={styles.input} type="text" onChange={e => setNewSocials(e.target.value, "github")} />
                    </div>
                </div>

            case "linkedin":
                return <div className="mb-8">
                    <label className={styles.label}>
                        <img className={styles.labelIcon} src={linkedin.src} alt="" />
                        {label}
                    </label>
                    <div className={styles.inputContainer}>
                        <p>{host}</p>
                        <input value={newSocials.linkedin} className={styles.input} type="text" onChange={e => setNewSocials(e.target.value, "linkedin")} />
                    </div>
                </div>

            case "stackoverflow":
                return <div className="mb-8">
                    <label className={styles.label}>
                        <img className={styles.labelIcon} src={stackoverflow.src} alt="" />
                        {label}
                    </label>
                    <div className={styles.inputContainer}>
                        <p>{host}</p>
                        <input value={newSocials.stackoverflow} className={styles.input} type="text" onChange={e => setNewSocials(e.target.value, "stackoverflow")} />
                    </div>
                </div>

            case "youtube":
                return <div className="mb-8">
                    <label className={styles.label}>
                        <img className={styles.labelIcon} src={youtube.src} alt="" />
                        {label}
                    </label>
                    <div className={styles.inputContainer}>
                        <p>{host}</p>
                        <input value={newSocials.youtube} className={styles.input} type="text" onChange={e => setNewSocials(e.target.value, "youtube")} />
                    </div>
                </div>

            case "dribbble":
                return <div className="mb-8">
                    <label className={styles.label}>
                        <img className={styles.labelIcon} src={dribbble.src} alt="" />
                        {label}
                    </label>
                    <div className={styles.inputContainer}>
                        <p>{host}</p>
                        <input value={newSocials.dribbble} className={styles.input} type="text" onChange={e => setNewSocials(e.target.value, "dribbble")} />
                    </div>
                </div>

            case "twitch":
                return <div className="mb-8">
                    <label className={styles.label}>
                        <img className={styles.labelIcon} src={twitch.src} alt="" />
                        {label}
                    </label>
                    <div className={styles.inputContainer}>
                        <p>{host}</p>
                        <input value={newSocials.twitch} className={styles.input} type="text" onChange={e => setNewSocials(e.target.value, "twitch")} />
                    </div>
                </div>

            case "discord":
                return <div className="mb-8">
                    <label className={styles.label}>
                        <img className={styles.labelIcon} src={discord.src} alt="" />
                        {label}
                    </label>
                    <div className={styles.inputContainer}>
                        <p>{host}</p>
                        <input value={newSocials.discord} className={styles.input} type="text" onChange={e => setNewSocials(e.target.value, "discord")} />
                    </div>
                </div>

            case "behance":
                return <div className="mb-8">
                    <label className={styles.label}>
                        <img className={styles.labelIcon} src={behance.src} alt="" />
                        {label}
                    </label>
                    <div className={styles.inputContainer}>
                        <p>{host}</p>
                        <input value={newSocials.behance} className={styles.input} type="text" onChange={e => setNewSocials(e.target.value, "behance")} />
                    </div>
                </div>

            case "coffee":
                return <div className="mb-8">
                    <label className={styles.label}>{label}</label>
                    <div className={styles.inputContainer}>
                        <p>{host}</p>
                        <input value={newSocials.coffee} className={styles.input} type="text" onChange={e => setNewSocials(e.target.value, "coffee")} />
                    </div>
                </div>

            case "eth-tip":
                return <div className="mb-8">
                    <label className={styles.label}>{label}</label>
                    <div className={styles.inputContainer}>
                        <p>{host}</p>
                        <input disabled={!isPremiumAccount} placeholder="ethereum wallet" value={newSocials.ethAddress} className={styles.input} type="text" onChange={e => setNewSocials(e.target.value, "eth")} />
                    </div>
                </div>

            default: return <p>...</p>
        }
    }

    return dynamicInput()
}

export default SocialInput