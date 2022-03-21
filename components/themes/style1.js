import { useState, useEffect } from "react"
import { SocialIcon } from 'react-social-icons';
import Link from "next/link";
import Image from "next/image"

const styles = {
    preview: `max-h-screen pb-56`,
    pill: `bg-gray-100 rounded-full px-3 py-1 m-1`,
    wrap: `flex items-center justify-center flex-wrap px-5`,
    previewMain: `text-center m-auto max-w-2xl max-w-3xl py-20 pt-0 lg:px-10 block`,
    closePreviewButton: `flex items-center justify-center p-2 sm:hidden`,
}

const Style1 = ({ data, exists }) => {

    const [skills, setSkills] = useState([])
    const [fullname, setFullame] = useState("")
    const [about, setAbout] = useState("")
    const [work, setWork] = useState("")
    const [workplaces, setWorkplaces] = useState([])
    const [showGithubStats, setShowGithubStats] = useState(false)
    const [socials, setSocials] = useState({})

    useEffect(() => {


        if (data && data) {
            setSkills(data.skills)
            setFullame(data.fullname)
            setWork(data.work)
            setSocials(data.socials)
            setAbout(data.about)
            setShowGithubStats(data.showGithubStats)
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

    return <div className={styles.preview}>
        <div className={styles.previewMain}>
            <div>
                <div className="bg-gray-200 w-full h-60" />
                <div className="w-48 h-48 m-auto bg-gray-100 rounded-full -mt-20 border-4 border-white" />
            </div>

            {/* {
                !exists && data === null ? <div>
                    <p className="text-3xl font-medium">The page youre looking for doesnt exist</p>
                    <p className="mt-3">
                        Want to claim this username?
                        <span className='underline'>
                            <Link passHref={true} href='/'>Click here</Link>
                        </span>
                    </p>
                </div> : <></>
            } */}

            <p className="font-bold text-3xl my-5 mt-20">{fullname}</p>
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
                    <p className="font-bold text-xl mb-5">About me 🖊</p>
                    <p className="mb-5 px-5">{about}</p>
                </div> : <></>
            }

            <div className="mt-20">
                {
                    skills.length > 0 ?
                        <p className={`font-bold text-xl mb-5`}>Tools is use 🧰</p>
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
        </div>
    </div>

    // if (!data && !exists) return <div className="w-screen h-screen flex items-center justify-center flex-col text-center p-5">
    // <p className="text-3xl font-medium">The page youre looking for doesnt exist</p>
    // <p className="mt-3">
    //     Want to claim this username?
    //     <span className='underline'>
    //         <Link passHref={true} href='/'>Click here</Link>
    //     </span>
    // </p>
    // </div>

    // return <div></div>
}

export default Style1