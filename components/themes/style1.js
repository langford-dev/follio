import { useState, useEffect, useContext } from "react"
import Link from "next/link";
import { generatePillBgColor, generateTextColor } from "../../constants/functions";
import { Socials } from "../socials";
import ProjectCard from "../projectCard";
import { AppContext } from "../../context/context";



const Style1 = ({ data }) => {

    const { increasePageViewCount } = useContext(AppContext)
    const [skills, setSkills] = useState([])
    const [fullname, setFullame] = useState("")
    const [tagline, setTagline] = useState("")
    const [about, setAbout] = useState("")
    const [work, setWork] = useState("")
    const [workplaces, setWorkplaces] = useState([])
    const [projects, setProjects] = useState([])
    const [showGithubStats, setShowGithubStats] = useState(false)
    const [socials, setSocials] = useState({})
    const [isPremiumAccount, setIsPremiumAccount] = useState(false)
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [coverPhoto, setCoverPhoto] = useState('')
    const [profilePhoto, setProfilePhoto] = useState("")

    const styles = {
        wrap: `flex items-center sm:justify-center flex-wrap px-5 pl-0`,
        previewMain: `m-auto 2xl container`,
        profilePhotoContainer: `sm:w-96 sm:h-96 w-full rounded-xl overflow-hidden relative bg-white mt-10 sm:mt-0`,
        profilePhoto: `object-cover h-full w-full rounded-xl`,
        header: `p-7 fixed top-0 bg-[${data.themeColor}] border-b border-b-[#ededed05] w-screen z-20  `,
        headerWrapper: `flex items-center justify-between xl container m-auto w-full h-full`,
        headerLink: `m-3 hover:opacity-50`,
        section: `py-20 px-5 sm:text-center max-w-6xl m-auto`,
        skillPill: `skill-pill border border-[#dadada29] sm:text-2xl border rounded-full px-4 py-2 hover:opacity-50 m-3 transition sm:m-3`,
        // skillPill: `skill-pill border-[#00000014] sm:text-2xl border rounded-full px-4 py-2 hover:opacity-50 m-3 transition sm:m-3`,
        sectionTitle: `text-4xl font-bold border-b w-max sm:m-auto ml-0`
    }

    useEffect(() => {
        if (data && data) {
            setSkills(data.skills)
            setFullame(data.fullname)
            setEmail(data.email)
            setTagline(data.tagline)
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

                increasePageViewCount(data)
            }

            catch (e) {
                console.log(e)
            }
        }

    }, [data])

    return <div className="theme-body min-h-screen w-screen">
        {/* HEADER */}
        <div className={styles.header}>
            <div className={styles.headerWrapper}>
                <p className="font-bold text-xl">{fullname}</p>
                <nav className="hidden sm:flex">
                    <a className={styles.headerLink} href="#">Home</a>
                    {about ? <a className={styles.headerLink} href="#about">About</a> : <></>}
                    {projects.length > 0 ? <a className={styles.headerLink} href="#projects">Projects</a> : <></>}
                    {skills.length > 0 ? <a className={styles.headerLink} href="#skills">Skills</a> : <></>}
                    {showGithubStats ? <a className={styles.headerLink} href="#stats">Stats</a> : <></>}
                    <a className={styles.headerLink} href="#find-me">Find me</a>
                </nav>
            </div>
        </div>

        <div className={styles.previewMain}>
            {/* HERO */}
            <div className="sm:flex pt-56 justify-center items-center sm:h-screen py-32 sm:py-0 px-5">
                <div>
                    <p className="text-5xl max-w-4xl font-extrabold leading-tight sm:mr-20">{tagline}</p>
                    {
                        tagline === "" ?
                            <p className="sm:text-7xl text-5zxl font-extrabold leading-tight sm:mr-10">{work}</p>
                            // <p className="sm:text-7xl text-5xl font-extrabold leading-tight sm:mr-10">{work}</p>
                            : <p className="my-10 sm:text-3xl text-2xl">{work}</p>
                    }
                    {
                        data && data ?
                            <div className="-ml-5 flex justify-start">
                                <Socials socials={socials} email={email} themeColor={data.themeColor} />
                            </div>
                            : <></>
                    }
                </div>
                <div>
                    {
                        profilePhoto ?
                            <div className={styles.profilePhotoContainer}>
                                <img className={styles.profilePhoto} src={profilePhoto} alt='' />
                            </div> : <img src={`https://avatars.dicebear.com/api/avataaars/:${fullname}.svg`} className="w-96 h-96 max-w-4xl" />
                    }
                </div>
            </div>

            {/* ABOUT */}
            {
                about ?
                    // <div id="about" className="pb-56 px-5 sm:text-center max-w-6xl m-auto">
                    <div id="about" className={styles.section}>
                        <p className={styles.sectionTitle}>ABOUT</p>
                        <br />
                        <p className="leading-10 text-2xl">{about}</p>
                    </div>
                    : <></>
            }

            {/* SKILLS */}
            {
                skills.length > 0 ?
                    <div id="skills" className={styles.section}>
                        <p className={styles.sectionTitle}>SKILLS</p>
                        <br />
                        <ul className={styles.wrap}>
                            {
                                skills.map((skill, index) => {
                                    return <li key={index} className={styles.skillPill}>{skill}</li>
                                })
                            }
                        </ul>
                    </div>
                    : <></>
            }

            {/* PROJECTS */}
            {
                projects.length > 0 ?
                    <div id="projects" className={styles.section}>
                        <p className={styles.sectionTitle}>PROJECTS</p>
                        <br />
                        <ul className="grid grid-cols-1 sm:grid-cols-2">
                            {
                                projects.map((project, index) => {
                                    return <ProjectCard editMode={false} key={index} index={index} description={project.description} thumbnail={project.thumbnail} name={project.name} link={project.link} />
                                })
                            }
                        </ul>
                    </div>
                    : <></>
            }

            {/* GITHUB STATS */}
            {
                showGithubStats && socials.github ?
                    <div id="stats" className={styles.section}>
                        <p className={styles.sectionTitle}>MY GITHUB STATS</p>
                        <br />
                        <img alt='' className="m-auto w-full sm:w-2/3" src={`https://github-readme-stats.vercel.app/api?username=${socials.github}&show_icons=true&hide=&count_private=true&title_color=3382ed&text_color=ffffff&icon_color=3382ed&bg_color=1c1917&hide_border=true&show_icons=true`} />
                    </div> : <></>
            }

            {/* DONATIONS & TIPS */}
            {
                isPremiumAccount && socials.coffee.trim() !== "" ?
                    <div id="donate" className={styles.section}>
                        <p className={styles.sectionTitle}>WANT TO DONATE?</p>
                        <br />
                        <div className="sm:flex justify-center">
                            <a href={`https://www.buymeacoffee.com/${socials.coffee}`}>
                                <img alt="" src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" width="200" />
                            </a>
                        </div>
                    </div> : <div></div>
            }

            {/* FOOTER */}
            {
                data && data ?
                    <div id="find-me" className="py-10 sm:text-center max-w-6xl m-auto flex sm:justify-center">
                        <Socials socials={socials} email={email} themeColor={data.themeColor} />
                    </div>
                    : <></>
            }

            {/* MADE WITH FOLIO */}
            <div className="py-20 px-5 -mt-10 pt-10 sm:text-center max-w-6xl m-auto">
                <a href="https://folio.vercel.app" className="opacity-50">Made with 💛 by Folio</a>
            </div>
        </div>
    </div >
}

export default Style1