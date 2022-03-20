import { useContext } from "react"
import SocialInput from "../socialInput"
import ViewTitle from "../viewTitle"
import Switch from "react-switch";
import { AppContext } from "../../context/context";

const styles = {
    editingView: `w-screen sm:w-1/2 p-10 px-5 sm:border-l pb-56`,
}

const SocialsView = () => {
    let { showGithubStats, setShowGithubStats } = useContext(AppContext)

    return <div className={styles.editingView}>
        <ViewTitle title="Your socials" subtitle="Let visitors connect with you through your socials" />

        <div className="mt-10">
            <SocialInput label="Twitter profile" host="https://twitter.com/" fieldFor="twitter" />
            <SocialInput label="Facebook profile" host="https://facebook.com/" fieldFor="facebook" />
            <SocialInput label="Instagram profile" host="https://instagram.com/" fieldFor="instagram" />
            <SocialInput label="GitHub profile" host="https://github.com/" fieldFor="github" />
            <SocialInput label="LinkedIn profile" host="https://linkedin.com/" fieldFor="linkedin" />
            {/* <SocialInput label="Buy me coffee" host="https://www.buymeacoffee.com/" fieldFor="coffee" /> */}
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