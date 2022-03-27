import { useContext } from "react"
import SocialInput from "../socialInput"
import ViewTitle from "../viewTitle"
import Switch from "react-switch";
import { AppContext } from "../../context/context";

const styles = {
    editingView: `w-screen sm:w-1/2 p-10 -mt-5 sm:mt-0 px-5 sm:border-l pb-56 pt-24 sm:pt-0 bg-white sm:p-10 sm:pt-5`,
}

const SocialsView = () => {
    let { showGithubStats, setShowGithubStats } = useContext(AppContext)

    return <div className={styles.editingView}>
        <ViewTitle title="Your socials" subtitle="Let visitors connect with you through your socials" />

        <div className="mt-16">
            <SocialInput label="Twitter profile" host="https://twitter.com/" fieldFor="twitter" />
            <SocialInput label="GitHub profile" host="https://github.com/" fieldFor="github" />
            <SocialInput label="Instagram profile" host="https://instagram.com/" fieldFor="instagram" />
            <SocialInput label="LinkedIn profile" host="https://linkedin.com/" fieldFor="linkedin" />
            <SocialInput label="Stackoverflow profile" host="https://stackoverflow.com/users/" fieldFor="stackoverflow" />
            <SocialInput label="YouTube channel" host="https://youtube.com/c/" fieldFor="youtube" />
            <SocialInput label="Dribbble" host="https://dribbble.com/" fieldFor="dribbble" />
            <SocialInput label="Twitch" host="https://twitch.tv/" fieldFor="twitch" />
            <SocialInput label="Discord" host="https://discord.com/users/" fieldFor="discord" />
            <SocialInput label="Behance" host="https://behance.com/" fieldFor="behance" />

            <div className="flex items-center">
                <p>Show GitHub stats</p>
                <div className="ml-5">
                    <Switch onChange={e => setShowGithubStats(e)} checked={showGithubStats} />
                </div>
            </div>
        </div>
    </div>
}

export default SocialsView