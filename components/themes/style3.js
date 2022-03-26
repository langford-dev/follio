import { useState, useEffect } from "react"
import { SocialIcon } from 'react-social-icons';
import Link from "next/link";

const styles = {
    // preview: `max-h-screen pb-56`,
    pill: `bg-white border rounded-full px-3 py-1 m-1`,
    wrap: `flex items-center justify-center flex-wrap px-5`,
    previewMain: `text-center m-auto max-w-2xl max-w-3xl py-20 pt-0 lg:px-10 block`,
    closePreviewButton: `flex items-center justify-center p-2 sm:hidden`,
    profilePhotoContainer: `w-36 h-36 sm:w-48 sm:h-48 rounded-full overflow-hidden relative p-1 bg-white m-auto -mt-5 sm:-mt-10`,
    profilePhoto: `object-cover h-full w-full rounded-full`,
    coverPhoto: `w-screen h-32 sm:h-72 object-cover`
    // coverPhoto: `bg-gray-100 w-full h-32 sm:h-60 sm:mt-5 object-cover sm:rounded-2xl`,
}

const Style3 = ({ data, exists }) => {

    const [skills, setSkills] = useState([])
    const [fullname, setFullame] = useState("")
    const [about, setAbout] = useState("")
    const [work, setWork] = useState("")
    const [workplaces, setWorkplaces] = useState([])
    const [showGithubStats, setShowGithubStats] = useState(false)
    const [socials, setSocials] = useState({})
    const [isPremiumAccount, setIsPremiumAccount] = useState(false)
    const [username, setUsername] = useState("")
    const [coverPhoto, setCoverPhoto] = useState('')
    const [profilePhoto, setProfilePhoto] = useState("")

    useEffect(() => {


        if (data && data) {
            setSkills(data.skills)
            setFullame(data.fullname)
            setUsername(data.username)
            setWork(data.work)
            setSocials(data.socials)
            setAbout(data.about)
            setShowGithubStats(data.showGithubStats)
            setIsPremiumAccount(data.isPremiumAccount)
            setProfilePhoto(data.profilePhoto)
            setCoverPhoto(data.coverPhoto)
        }

    }, [data, exists])

    const socialLinks = {
        twitter: 'https://twitter.com/' + socials.twitter,
        facebook: 'https://facebook.com/' + socials.facebook,
        linkedin: 'https://linkedin.com/' + socials.linkedin,
        github: 'https://github.com/' + socials.github,
        instagram: 'https://instagram.com/' + socials.instagram,
        coffee: 'https://www.buymeacoffee.com/' + socials.coffee,
    }

    const socialIcons = () => {
        return <ul className={styles.wrap}>
            {socials.github ? <SocialIcon bgColor="#fff" fgColor="#242424" url={socialLinks.github} className="mr-2" /> : <></>}
            {socials.twitter ? <SocialIcon bgColor="#fff" fgColor="#006aee" url={socialLinks.twitter} className="mr-2" /> : <></>}
            {socials.instagram ? <SocialIcon bgColor="#fff" fgColor="red" url={socialLinks.instagram} className="mr-2" /> : <></>}
            {socials.facebook ? <SocialIcon bgColor="#fff" fgColor="#0A66C2" url={socialLinks.facebook} className="mr-2" /> : <></>}
            {socials.linkedin ? <SocialIcon bgColor="#fff" fgColor="blue" url={socialLinks.linkedin} className="mr-2" /> : <></>}
        </ul>
    }

    return <div className="h-screen bg-white overflow-y-scroll bg-gradient-to-tl from-rose-100 to-teal-100">
        {
            coverPhoto ?
                <img className={styles.coverPhoto} src={coverPhoto} alt='' />
                : <div className={styles.coverPhoto} ></div>
        }

        <div className={styles.previewMain}>
            <div>
                {
                    profilePhoto ?
                        <div className={styles.profilePhotoContainer}>
                            <img className={styles.profilePhoto} src={profilePhoto} alt='' />
                        </div> : <div className={styles.profilePhoto} ></div>
                }

            </div>

            <p className="font-bold text-3xl my-5 mt-10">{fullname}</p>
            <p className=" font-bold mb-5 uppercase">{work}</p>

            {socialIcons()}

            {
                socials.twitter ? <div className="cursor-pointer flex justify-center mt-5">
                    <Link passHref={true} href={socialLinks.twitter}>
                        <img src={`https://img.shields.io/twitter/follow/${socials.twitter}?logo=twitter&style=for-the-badge&color=3382ed&labelColor=1c1917`} alt="twitter" />
                    </Link>
                </div> : <></>
            }

            {
                about ? <div className="mt-20">
                    <p className="font-bold text-xl mb-5">About me</p>
                    <p className="mb-5 px-5 text-lg">{about}</p>
                </div> : <></>
            }

            <div className="mt-20">
                {
                    skills.length > 0 ?
                        <p className={`font-bold text-xl mb-5`}>My skills 💪</p>
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

            {
                showGithubStats && socials.github ? <div className="mt-20">
                    <p className={`font-bold text-xl mb-5`}>My GitHub stats 🤩</p>
                    <img alt='' style={{ width: "90%", margin: "auto", marginBottom: "16px", borderRadius: "10px" }} src={`https://github-readme-stats.vercel.app/api?username=${socials.github}&show_icons=true&hide=&count_private=true&title_color=3382ed&text_color=f97316&icon_color=3382ed&bg_color=1c1917&hide_border=true&show_icons=true`} />
                    <img alt='' style={{ width: "90%", margin: "auto", marginBottom: "16px", borderRadius: "10px" }} src={`https://activity-graph.herokuapp.com/graph?username=${socials.github}&bg_color=1c1917&color=f97316&line=3382ed&point=f97316&area_color=1c1917&area=true&hide_border=true&custom_title=GitHub%20Commits%20Graph`} />
                </div> : <></>
            }

            {
                isPremiumAccount && socials.coffee.trim() !== "" ? <div className="flex items-center justify-content flex-col mt-20 w-full">
                    <p className={`font-bold text-xl mb-5`}>Wanna tip me? 😁</p>
                    <a href={`https://www.buymeacoffee.com/${socials.coffee}`}>
                        <img alt="" src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" width="200" />
                    </a>
                </div> : <div></div>
            }
        </div>
    </div >
}

export default Style3