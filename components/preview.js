import { useContext } from "react"
import { AppContext } from "../context/context"
import { SocialIcon } from 'react-social-icons';

const styles = {
    preview: `border-l w-1/2 p-10 border-r`,
    pill: `bg-gray-100  rounded-full px-3 py-1 m-1`,
    wrap: `flex items-center justify-center flex-wrap px-5`,
}

const Preview = () => {
    const { fullname, title, about, themeColor, skills, allSocials } = useContext(AppContext)

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

    return <div className={styles.preview}>
        <div className="text-center m-auto">
            {/* center and add max-with to this div to make it responsive  */}
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