import { useContext } from "react"
import { AppContext } from "../context/context"
import { SocialIcon } from 'react-social-icons';

const styles = {
    preview: ``,
    pill: `bg-gray-100  rounded-full px-3 py-1 m-1`,
    wrap: `flex items-center justify-center flex-wrap px-5`,
    previewEdit: `border-l w-1/2 p-10 border-r`,
    previewMain: `text-center m-auto max-w-2xl max-w-3xl py-20 lg:px-10`,
    // previewMain: `text-center m-auto border-l border-b border-r max-w-2xl max-w-3xl py-20 sm:border-none lg:px-10`,
    previewMainEdit: `text-center m-auto`
}

const Preview = ({ editMode }) => {
    let { fullname, title, about, themeColor, skills, allSocials } = useContext(AppContext)

    if (!editMode) {
        fullname = "Langford Quarshie K."
        title = "Web developer"
        about = "Folio Dashboard Themes Settings Upgrade Donate Intro Tell visitors about you, what you do, and who you are. 👋 Your name 💡 Title ✏️ About you 🎨 Your theme color"
        themeColor = "#f5f5f5"
        skills = ["html", "CSS", "JavaScript", "NextJs", "Tailwind CSS"]
        allSocials = {
            twitter: "sasa",
            facebook: "sasa",
            linkedin: "sasa",
            github: "sasa",
            instagram: "sasa",
        }
    }
    const socialLinks = {
        twitter: 'https://twitter.com/' + allSocials.twitter,
        facebook: 'https://facebook.com/' + allSocials.facebook,
        linkedin: 'https://linkedin.com/' + allSocials.linkedin,
        github: 'https://github.com/' + allSocials.github,
        instagram: 'https://instagram.com/' + allSocials.instagram,
    }

    const socialIcons = () => {
        return <ul className={styles.wrap}>
            {allSocials.twitter ? <SocialIcon url={socialLinks.twitter} className="mr-5" /> : <></>}
            {allSocials.facebook ? <SocialIcon url={socialLinks.facebook} className="mr-5" /> : <></>}
            {allSocials.linkedin ? <SocialIcon url={socialLinks.linkedin} className="mr-5" /> : <></>}
            {allSocials.github ? <SocialIcon url={socialLinks.github} className="mr-5" /> : <></>}
            {allSocials.instagram ? <SocialIcon url={socialLinks.instagram} className="mr-5" /> : <></>}
        </ul>
    }

    return <div className={editMode ? styles.previewEdit : styles.preview}>
        <div className={editMode ? styles.previewMainEdit : styles.previewMain}>
            <div className="w-48 h-48 m-auto bg-gray-100 rounded-full" />
            <p className="font-bold text-2xl my-5 mt-20">{fullname}</p>
            <p className=" font-bold mb-5 uppercase">{title}</p>
            <p className="mb-5 px-5">{about}</p>
            <div className="mt-20">
                {
                    skills.length > 0 ?
                        <p className={`font-bold text-xl mb-5 text-[${themeColor}]`}>Tools is use</p>
                        : <></>
                }
                <ul className={styles.wrap}>
                    {
                        skills.map((skill, index) => {
                            return <li key={index} className={styles.pill}>{skill}</li>
                        })
                    }
                </ul>
            </div>
            <div className="mt-20">
                {allSocials.length > 0 ? <p className="font-bold text-xl mb-5">Find me</p> : <></>}
                {socialIcons()}
            </div>
        </div>
    </div>
}

export default Preview