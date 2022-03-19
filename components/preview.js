import { useContext } from "react"
import { AppContext } from "../context/context"
import Link from "next/link"
import { TwitterCircleFilled, FacebookFilled, LinkedinFilled, InstagramFilled, GithubFilled } from "@ant-design/icons"

const styles = {
    preview: `border-l w-1/2 p-10 border-r`,
    pill: `bg-gray-100  rounded-full px-3 py-1 m-1`,
    wrap: `flex items-center justify-center flex-wrap px-5`,
}

const iconProps = {
    fontSize: '30px',
    marginRight: '20px',
    color: '#424242'
}

const socialHosts = {
    twitter: 'https://twitter.com/',
    facebook: 'https://facebook.com/',
    linkedin: 'https://linkedin.com/',
    github: 'https://github.com/',
    instagram: 'https://instagram.com/',
}

const Preview = () => {
    const { fullname, title, about, themeColor, skills, allSocials } = useContext(AppContext)

    const socialIcons = () => {
        return <ul className={styles.wrap}>
            {allSocials.twitter ? <Link passHref={true} href={`${socialHosts.twitter}${allSocials.twitter}`}><TwitterCircleFilled style={iconProps} /></Link> : <></>}
            {allSocials.facebook ? <Link passHref={true} href={`${socialHosts.facebook}${allSocials.facebook}`}><FacebookFilled style={iconProps} /></Link> : <></>}
            {allSocials.linkedin ? <Link passHref={true} href={`${socialHosts.linkedin}${allSocials.linkedin}`}><LinkedinFilled style={iconProps} /></Link> : <></>}
            {allSocials.github ? <Link passHref={true} href={`${socialHosts.github}${allSocials.github}`}><GithubFilled style={iconProps} /></Link> : <></>}
            {allSocials.instagram ? <Link passHref={true} href={`${socialHosts.facebook}${allSocials.facebook}`}><InstagramFilled style={iconProps} /></Link> : <></>}
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