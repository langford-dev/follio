import { useContext, useEffect, useState } from "react"
import { AppContext } from "../../context/context"

const Style3 = ({ data }) => {

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
        section: `py-20 px-5 sm:text-center xl container m-auto`,
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
                <p className="bg-[#3D5DE3] border border-[#3D5DE3] hover:bg-white hover:text-[#3D5DE3] cursor-pointer p-3 px-5 text-white rounded-full">Download CV</p>
            </div>
        </div>

        <div className={styles.previewMain}>
            {/* HERO */}
            <div className={styles.section}>
                <div className="mt-10 flex items-center justify-between">
                    <div className="text-left">
                        <div>Hey There 👋 I am</div>
                        <div className="text-5xl font-bold">Daniel Jack</div>
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

            {/* SERVICE */}

            {/* MY WORKS */}

            {/* CONTACT ME */}
        </div>
    </div>
}

export default Style3