
import SocialInput from "../socialInput"
import ViewTitle from "../viewTitle"

const styles = {
    editingView: `w-1/2 p-10 border-l`,
}

const SocialsView = () => {


    return <div className={styles.editingView}>
        <ViewTitle title="Your socials" subtitle="Let visitors connect with you through your socials" />

        <div className="mt-10">
            <SocialInput label="Twitter profile" host="https://twitter.com/" fieldFor="twitter" />
            <SocialInput label="Facebook profile" host="https://facebook.com/" fieldFor="facebook" />
            <SocialInput label="Instagram profile" host="https://instagram.com/" fieldFor="instagram" />
            <SocialInput label="GitHub profile" host="https://github.com/" fieldFor="github" />
            <SocialInput label="LinkedIn profile" host="https://linkedin.com/" fieldFor="linkedin" />
        </div>
    </div>
}

export default SocialsView