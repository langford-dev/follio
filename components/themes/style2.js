import { useContext, useEffect, useState } from "react"
import { AppContext } from "../../context/context"
import ProjectCard from "../projectCard"
import { Socials } from "../socials"
import { generateTextColor } from "../../constants/functions"

const Style2 = ({ data }) => {

    const { increasePageViewCount } = useContext(AppContext)
    const [skills, setSkills] = useState([])
    const [fullname, setFullame] = useState("")
    const [tagline, setTagline] = useState("")
    const [about, setAbout] = useState("")
    const [work, setWork] = useState("")
    const [gradient, setGradient] = useState({ 'from': "#07B5D4", 'to': "#3884F4" })
    const [isGradient, setIsGradient] = useState(false)
    const [themeColor, setThemeColor] = useState("#3D5DE3")
    const [cv, setCv] = useState("")
    const [workplaces, setWorkplaces] = useState([])
    const [projects, setProjects] = useState([])
    const [showGithubStats, setShowGithubStats] = useState(false)
    const [socials, setSocials] = useState({})
    const [isPremiumAccount, setIsPremiumAccount] = useState(false)
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [coverPhoto, setCoverPhoto] = useState('')
    const [textColor, setTextColor] = useState('#000')
    const [profilePhoto, setProfilePhoto] = useState("")

    const styles = {
        wrap: `flex items-center sm:justify-center flex-wrap px-5 pl-0`,
        previewMain: `m-auto 2xl container`,
        profilePhotoContainer: `sm:block hidden m-auto sm:w-72 sm:h-72 w-full rounded-full overflow-hidden relative bg-white mt-10 border-4 border-[#fff] sm:mt-0`,
        profilePhoto: `object-cover h-full w-full rounded-full`,
        header: `header p-5 px-5 sm:px-0 w-screen z-20`,
        headerWrapper: `flex items-center justify-between xl container m-auto w-full h-full`,
        headerLink: `m-3 hover:opacity-50`,
        section: `border-b border-b-[#f1f1f1] py-32 sm:py-56 px-5 sm:text-center xl container m-auto`,
        graySection: `bg-[#dbdbdb21] border-b border-b-[#f1f1f1] py-32 sm:py-56 px-5 sm:text-center m-auto`,
        heroSection: `m-auto -mt-32`,
        sectionWrapper: `m-auto max-w-7xl`,
        skillPill: `skill-pill bg-white border border-[#dadada] sm:text-2xl border rounded-full px-4 py-2 hover:opacity-50 m-3 transition sm:m-3`,
        sectionTitle: `sm:text-5xl text-4xl font-bold w-max sm:m-auto ml-0`,
        miniSectionTitle: `text-accent font-bold text-xl mb-2 uppercase`,
    }

    useEffect(() => {
        if (data && data) {
            if (data.isGradient) {
                setGradient(data.gradient)
                setIsGradient(data.isGradient)
                setTextColor(generateTextColor(data.gradient.from))
            }
            setSkills(data.skills)
            setCv(data.cv)
            setThemeColor(data.themeColor)
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
                setColors()
                increasePageViewCount(data)
            }

            catch (e) {
                console.log(e)
            }
        }

    }, [data])

    const setColors = () => {
        const buttons = document.querySelectorAll(".button")
        const hero = document.getElementById("hero")
        const header = document.querySelector(".header")

        header.style.color = generateTextColor(data.gradient.to)

        if (buttons.length > 0) {
            buttons.forEach(button => {
                button.style.background = data.themeColor
                button.style.color = generateTextColor(data.themeColor)
            })
        }

        if (data.isGradient) {
            hero.style.color = generateTextColor(data.gradient.to)
            hero.style.background =
                "linear-gradient(to right, "
                + data.gradient.from
                + ", "
                + data.gradient.to
                + ")";
            hero.style.background + ";";
            return
        }

        hero.style.background = data.themeColor
        hero.style.color = generateTextColor(data.themeColor)
    }

    return <div className="theme-body min-h-screen w-screen">
        {/* HEADER */}
        <div className={styles.header}>
            <div className={styles.headerWrapper}>
                <p className="font-bold text-xl">{fullname}</p>
                <nav className="hidden sm:flex">
                    <a className={styles.headerLink} href="#">Home</a>
                    {about ? <a className={styles.headerLink} href="#about">About</a> : <></>}
                    {skills.length > 0 ? <a className={styles.headerLink} href="#skills">Skills</a> : <></>}
                    {projects.length > 0 ? <a className={styles.headerLink} href="#projects">Projects</a> : <></>}
                    {showGithubStats ? <a className={styles.headerLink} href="#stats">Stats</a> : <></>}
                    {socials.coffee ? <a className={styles.headerLink} href="#support">Support</a> : <></>}
                </nav>
                {
                    cv ?
                        <div className="flex items-center">
                            <p className={`button hover:opacity-50 cursor-pointer p-3 px-5 rounded-full`}>Download CV</p>
                        </div>
                        : <></>
                }
            </div>
        </div>

        {/* HERO */}
        <div id="hero" className={styles.heroSection}>
            <div className={styles.section}>
                <div className="sm:h-[70vh] pt-32 sm:pt-0 sm:flex items-center justify-between">
                    <div className={`text-left max-w-5xl text-[${textColor}]`}>
                        <div className="text-6xl leading-tight py-5 font-bold">{tagline}</div>
                        <div className="text-2xl">{work}</div>
                        <div className="-ml-8 mt-8 flex justify-start">
                            <Socials socials={socials} email={email} themeColor={data.gradient.to} />
                        </div>
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
            </div>
        </div>

        {/* ABOUT */}
        <div id="about" className={styles.section}>
            <div className="mb-10">
                <p className={styles.miniSectionTitle}>About me</p>
                <p className={styles.sectionTitle}>Know Me More</p>
            </div>
            <div className={styles.sectionWrapper}>
                <p className="leading-10 text-2xl">{about}</p>
            </div>
        </div>

        {/* SKILLS */}
        {
            skills.length > 0 ?
                <div id="skills" className={styles.graySection}>
                    <div className="mb-10">
                        <p className={styles.miniSectionTitle}>MY SKILLS</p>
                        <p className={styles.sectionTitle}>Expert With My Tools</p>
                    </div>
                    <div className={styles.sectionWrapper}>
                        <ul className={styles.wrap}>
                            {
                                skills.map((skill, index) => {
                                    return <li key={index} className={styles.skillPill}>{skill}</li>
                                })
                            }
                        </ul>
                    </div>
                </div>
                : <></>
        }

        {/* PROJECTS */}
        {
            projects.length > 0 ?
                <div id="projects" className={styles.section}>
                    <div className="mb-10">
                        <p className={styles.miniSectionTitle}>MY PORTFOLIO</p>
                        <p className={styles.sectionTitle}>Recent Works</p>
                    </div>
                    <div className={styles.sectionWrapper}>
                        <ul className="grid grid-cols-1 sm:grid-cols-2">
                            {
                                projects.map((project, index) => {
                                    return <ProjectCard editMode={false} key={index} index={index} description={project.description} thumbnail={project.thumbnail} name={project.name} link={project.link} />
                                })
                            }
                        </ul>
                    </div>
                </div>
                : <></>
        }

        {/* GITHUB STATS */}
        {
            showGithubStats && socials.github ?
                <div id="stats" className={styles.section}>
                    <div className="mb-10">
                        <p className={styles.miniSectionTitle}>MY GITHUB CONTRIBUTIONS</p>
                        <p className={styles.sectionTitle}>GitHub Statistics</p>
                    </div>
                    <img alt='' className="m-auto w-full sm:w-1/3" src={`https://github-readme-stats.vercel.app/api?username=${socials.github}&show_icons=true&hide=&count_private=true&title_color=3382ed&text_color=ffffff&icon_color=3382ed&bg_color=1c1917&hide_border=true&show_icons=true`} />
                </div>
                : <></>
        }

        {/* DONATIONS & TIPS */}
        {
            socials.coffee !== "" ?
                <div id="support" className={styles.section}>
                    <div className="mb-10">
                        <p className={styles.miniSectionTitle}>SUPPORT</p>
                        <p className={styles.sectionTitle}>Want to support?</p>
                    </div>
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
                <div id="contact" className="py-10 sm:text-center max-w-6xl m-auto flex sm:justify-center">
                    <Socials socials={socials} email={email} themeColor="#ffffff" />
                </div>
                : <></>
        }

        {/* MADE WITH FOLIO */}
        <div className="py-20 px-5 -mt-10 pt-10 sm:text-center max-w-6xl m-auto">
            <a href="https://folio.vercel.app" className="opacity-50">Made with 💛 by Folio</a>
        </div>
    </div>
}

export default Style2