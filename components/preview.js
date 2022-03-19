import { useContext } from "react"
import { AppContext } from "../context/context"
import { SocialIcon } from 'react-social-icons';
import Link from "next/link";
import Image from "next/image"

const styles = {
    preview: `pb-20`,
    pill: `bg-gray-100  rounded-full px-3 py-1 m-1`,
    wrap: `flex items-center justify-center flex-wrap px-5`,
    previewEdit: `border-l w-1/2 p-10 border-r pb-20`,
    previewMain: `text-center m-auto max-w-2xl max-w-3xl py-20 pt-0 lg:px-10`,
    // previewMain: `text-center m-auto border-l border-b border-r max-w-2xl max-w-3xl py-20 sm:border-none lg:px-10`,
    previewMainEdit: `text-center m-auto`
}

const Preview = ({ editMode }) => {
    let { fullname, title, about, themeColor, skills, usernames, showGithubStats } = useContext(AppContext)

    if (!editMode) {
        fullname = "Langford Quarshie K."
        title = "Web developer"
        about = "Hello 👋 Im Langford. A self-taught Web(3) & Software developer, Content creator and Technical Writer ✍️ I have over 3 + years of industry experience.  I enjoy learning new technologies and writing about what I discover 💛 My favorite languages are JavaScript, HTML and CSS.I am well - versed in frameworks such as React, Vue.js, React Native, Flutter"
        themeColor = "#f5f5f5"
        skills = ["html", "CSS", "JavaScript", "NextJs", "CSS", "JavaScript", "NextJs", "CSS", "JavaScript", "NextJs", "Tailwind CSS"]
        showGithubStats = true
        usernames = {
            twitter: "langford_dev",
            facebook: "sasa",
            linkedin: "sasa",
            github: "langfordquarshie21",
            instagram: "sasa",
            coffee: "sasa",
        }
    }

    const socialLinks = {
        twitter: 'https://twitter.com/' + usernames.twitter,
        facebook: 'https://facebook.com/' + usernames.facebook,
        linkedin: 'https://linkedin.com/' + usernames.linkedin,
        github: 'https://github.com/' + usernames.github,
        instagram: 'https://instagram.com/' + usernames.instagram,
        coffee: 'https://www.buymeacoffee.com/' + usernames.coffee,
    }

    const socialIcons = () => {
        return <ul className={styles.wrap}>
            {usernames.github ? <SocialIcon bgColor="#fff" fgColor="#242424" url={socialLinks.github} className="mr-2" /> : <></>}
            {usernames.twitter ? <SocialIcon bgColor="#fff" fgColor="#006aee" url={socialLinks.twitter} className="mr-2" /> : <></>}
            {usernames.instagram ? <SocialIcon bgColor="#fff" fgColor="red" url={socialLinks.instagram} className="mr-2" /> : <></>}
            {usernames.facebook ? <SocialIcon bgColor="#fff" fgColor="#0A66C2" url={socialLinks.facebook} className="mr-2" /> : <></>}
            {usernames.linkedin ? <SocialIcon bgColor="#fff" fgColor="blue" url={socialLinks.linkedin} className="mr-2" /> : <></>}
        </ul>
    }

    return <div className={editMode ? styles.previewEdit : styles.preview}>
        <div className={editMode ? styles.previewMainEdit : styles.previewMain}>
            <div>
                <div className="bg-gray-200 w-full h-60" />
                <div className="w-48 h-48 m-auto bg-gray-100 rounded-full -mt-20 border-4 border-white" />
            </div>

            <p className="font-bold text-3xl my-5 mt-20">{fullname}</p>
            <p className=" font-bold mb-5 uppercase">{title}</p>

            {socialIcons()}
            {
                usernames.twitter ? <div className="cursor-pointer flex justify-center mt-5">
                    <Link passHref={true} href={socialLinks.twitter}>
                        <img src={`https://img.shields.io/twitter/follow/${usernames.twitter}?logo=twitter&style=for-the-badge&color=3382ed&labelColor=1c1917`} alt="twitter" />
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
                        <p className={`font-bold text-xl mb-5 text-[${themeColor}]`}>Tools is use 🧰</p>
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
                showGithubStats && usernames.github ? <div className="mt-20">
                    <p className={`font-bold text-xl mb-5 text-[${themeColor}]`}>My GitHub stats 🤩</p>
                    <Image width={1000} height={400} objectFit="contain" src={`https://github-readme-stats.vercel.app/api?username=${usernames.github}&show_icons=true&hide=&count_private=true&title_color=3382ed&text_color=ffffff&icon_color=3382ed&bg_color=1c1917&hide_border=true&show_icons=true`} alt={`${usernames.github} GitHub stats`} />
                    <Image width={1000} height={400} objectFit="contain" src={`https://activity-graph.herokuapp.com/graph?username=${usernames.github}&bg_color=1c1917&color=f97316&line=3382ed&point=f97316&area_color=1c1917&area=true&hide_border=true&custom_title=GitHub%20Commits%20Graph`} alt="GitHub Commits Graph" />
                </div> : <></>
            }
        </div>
    </div>
}

export default Preview