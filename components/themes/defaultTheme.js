import { useState, useEffect } from "react"
import Link from "next/link";
import { generatePillBgColor, generateTextColor } from "../../constants/functions";
import { Socials } from "../socials";
import ProjectCard from "../projectCard";

const styles = {
    pill: `bg-white border rounded-full px-3 py-1 m-1`,
    wrap: `flex items-center justify-center flex-wrap px-5`,
    previewMain: `text-center m-auto max-w-2xl max-w-3xl py-20 pt-0 lg:px-10 block`,
    closePreviewButton: `flex items-center justify-center p-2 sm:hidden`,
    profilePhotoContainer: `w-36 h-36 sm:w-48 sm:h-48 rounded-full overflow-hidden relative p-1 bg-white m-auto mt-10 sm:mt-10`,
    profilePhoto: `object-cover h-full w-full rounded-full`,
    coverPhoto: `w-screen h-32 sm:h-72 object-cover`,
    body: `min-h-screen bg-white overflow-y-scroll bg-gradient-to-tl from-rose-100 to-teal-100`,
    sectionTitle: `font-bold text-2xl mb-5`,
}

const DefaultTheme = ({ data }) => {

    const [skills, setSkills] = useState([])
    const [fullname, setFullame] = useState("")
    const [about, setAbout] = useState("")
    const [work, setWork] = useState("")
    const [workplaces, setWorkplaces] = useState([])
    const [email, setEmail] = useState("")
    const [projects, setProjects] = useState([])
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
            setEmail(data.email)
            setUsername(data.username)
            setWork(data.work)
            setSocials(data.socials)
            setAbout(data.about)
            setShowGithubStats(data.showGithubStats)
            setIsPremiumAccount(data.isPremiumAccount)
            setProfilePhoto(data.profilePhoto)
            setCoverPhoto(data.coverPhoto)
            setProjects(data.projects)

            try {
                document.querySelector(".theme-body").style.backgroundColor = data.themeColor
                document.querySelector(".theme-body").style.color = generateTextColor(data.themeColor)

                let skillPills = document.querySelectorAll(".skill-pill")

                skillPills.forEach(pill => {
                    pill.style.backgroundColor = "transparent"
                    pill.style.color = generateTextColor(themeColor)
                })
            }

            catch (e) {

                console.log(e)
            }
        }

    }, [data])

    return <div className="theme-body">
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
            <p className="mb-5 -mt-3 opacity-50">@{username}</p>
            <p className=" font-bold mb-5 uppercase">{work}</p>

            {
                socials.twitter ? <div className="cursor-pointer flex justify-center mt-5">
                    <Link passHref={true} href={socials.twitter}>
                        <img src={`https://img.shields.io/twitter/follow/${socials.twitter}?logo=twitter&style=for-the-badge&color=3382ed&labelColor=1c1917`} alt="twitter" />
                    </Link>
                </div> : <></>
            }

            {
                about ? <div className="mt-20">
                    <p className={styles.sectionTitle}>ABOUT 😎</p>
                    <p className="mb-5 px-5 text-lg">{about}</p>
                </div> : <></>
            }

            {data && data ? <Socials socials={socials} email={email} themeColor={data.themeColor} /> : <></>}

            <div className="mt-20">
                {
                    skills.length > 0 ?
                        <p className={styles.sectionTitle}>SKILLS 💪</p>
                        : <></>
                }
                <ul className={styles.wrap}>
                    {
                        skills.map((skill, index) => {
                            return <li key={index} className="skill-pill rounded-full px-4 py-2 hover:opacity-50 transition m-3">{skill}</li>
                        })
                    }
                </ul>
            </div>

            <ul className="mt-20">
                {
                    projects
                        .length > 0 ?
                        <p className={styles.sectionTitle}>My projects 🎁</p>
                        : <></>
                }
                {
                    projects.map((project, index) => {
                        return <ProjectCard editMode={false} key={index} index={index} description={project.description} thumbnail={project.thumbnail} name={project.name} link={project.link} />
                    })
                }
            </ul>

            {
                showGithubStats && socials.github ? <div className="mt-20">
                    <p className={styles.sectionTitle}>My GitHub stats 🤩</p>
                    <img alt='' style={{ width: "90%", margin: "auto", marginBottom: "16px", borderRadius: "10px" }} src={`https://github-readme-stats.vercel.app/api?username=${socials.github}&show_icons=true&hide=&count_private=true&title_color=3382ed&text_color=ffffff&icon_color=3382ed&bg_color=1c1917&hide_border=true&show_icons=true`} />
                    {/* <img alt='' style={{ width: "90%", margin: "auto", marginBottom: "16px", borderRadius: "10px" }} src={`https://activity-graph.herokuapp.com/graph?username=${socials.github}&bg_color=1c1917&color=ffffff&line=3382ed&point=ffffff&area_color=1c1917&area=true&hide_border=true&custom_title=GitHub%20Commits%20Graph`} /> */}
                </div> : <></>
            }

            {
                socials.coffee !== "" ? <div className="flex items-center justify-content flex-col mt-20 w-full">
                    <p className={styles.sectionTitle}>Wanna tip me? 😁</p>
                    <a href={`https://www.buymeacoffee.com/${socials.coffee}`}>
                        <img alt="" src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" width="200" />
                    </a>
                </div> : <div></div>
            }

            {/* FOOTER */}
            {/* <div id="contact" className="py-10 sm:text-center max-w-6xl m-auto flex sm:justify-center">
                <Socials socials={socials} email={email} themeColor="#ffffff" />
            </div> */}


            {/* MADE WITH FOLIO */}
            <div className="py-20 px-5 mt-10 pt-10 sm:text-center max-w-6xl m-auto">
                <a href="https://follio.app" className="opacity-50">Made with 💛 by Folio</a>
            </div>
        </div>
    </div >
}

export default DefaultTheme