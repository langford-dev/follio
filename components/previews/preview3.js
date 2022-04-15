import { useContext, useEffect, useState } from "react"
import { AppContext } from "../../context/context"
import ProjectCard from "../projectCard"
import { Socials } from "../socials"
import { generateTextColor } from "../../constants/functions"

<<<<<<< HEAD
const Preview3 = ({ }) => {

    const { fullname, email, username, accentColor, tagline, projects, work, about, themeColor, skills, socials, showGithubStats, showPreview, isPremiumAccount, coverPhotoPreview, profilePhotoPreview, coverPhoto, profilePhoto, cv } = useContext(AppContext)

    const styles = {
        wrap: `flex items-center flex-wrap px-10 -ml-10`,
        previewMainEdit: `text-center m-auto pt-5 sm:pt-0 pb-56`,
        profilePhotoContainer: `m-auto sm:w-72 sm:h-72 w-full rounded-xl overflow-hidden relative bg-white mt-10 border-8 border-[#fff] sm:mt-0`,
        profilePhoto: `object-cover h-full w-full rounded-xl`,
        header: `header p-5 px-10 z-20`,
        headerWrapper: `flex items-center justify-between xl container m-auto w-full h-full`,
        headerLink: `m-3 hover:opacity-50 hidden`,
        section: `border-b border-b-[#f1f1f1] py-32 px-10 m-auto text-left`,
        graySection: `bg-[#dbdbdb21] border-b border-b-[#f1f1f1] py-32 px-10 text-left m-auto`,
        heroSection: `m-auto -mt-32`,
        sectionWrapper: `m-auto max-w-7xl`,
        skillPill: `skill-pill ml-0 bg-white border border-[#dadada] border rounded-full px-4 py-2 hover:opacity-50 m-3 transition`,
        sectionTitle: `text-3xl font-bold ml-0`,
        miniSectionTitle: `mini-section-title font-bold text-xl mb-2 uppercase`,
    }

    useEffect(() => {
        setColors()
    }, [themeColor, accentColor])

    const setColors = () => {
=======
const styles = {
    wrap: `flex items-center flex-wrap px-5 -ml-5`,
    previewMainEdit: `text-center m-auto pt-5 sm:pt-0 pb-56`,
    profilePhotoContainer: `m-auto w-full rounded-xl overflow-hidden relative bg-white mt-10 border-8 border-[#fff] sm:mt-0`,
    profilePhoto: `object-cover h-full w-full rounded-xl`,
    header: `header p-5 sm:px-20 px-5 z-20`,
    headerWrapper: `flex items-center justify-between xl container m-auto w-full h-full`,
    headerLink: `m-3 hover:opacity-50 hidden`,
    section: `border-b border-b-[#f1f1f1] py-32 sm:px-20 px-5 m-auto text-left`,
    graySection: `bg-[#dbdbdb21] border-b border-b-[#f1f1f1] py-32 sm:px-20 px-5 text-left m-auto`,
    heroSection: `m-auto -mt-32`,
    sectionWrapper: `m-auto max-w-7xl`,
    skillPill: `skill-pill ml-0 bg-white border border-[#dadada] border rounded-full px-4 py-2 hover:opacity-50 m-3 transition`,
    sectionTitle: `text-3xl font-bold ml-0`,
    miniSectionTitle: `mini-section-title font-bold text-xl mb-2 uppercase`,
}

const Preview3 = () => {
    const { fullname, email, username, accentColor, tagline, projects, work, about, themeColor, skills, socials, showGithubStats, showPreview, isPremiumAccount, coverPhotoPreview, profilePhotoPreview, coverPhoto, profilePhoto, cv } = useContext(AppContext)

    useEffect(() => {
>>>>>>> dev
        try {
            const buttons = document.querySelectorAll(".button")
            const hero = document.getElementById("hero")
            const header = document.querySelector(".header")
            const miniSectionTitle = document.querySelectorAll(".mini-section-title")
<<<<<<< HEAD
=======
            document.querySelector(".body").style.backgroundColor = "#fff"
>>>>>>> dev

            miniSectionTitle.forEach(title => {
                title.style.color = accentColor
            })

            header.style.color = generateTextColor(themeColor)
            hero.style.background = themeColor
            hero.style.color = generateTextColor(themeColor)

            if (buttons.length > 0) {
                buttons.forEach(button => {
                    button.style.background = accentColor
                    button.style.color = generateTextColor(accentColor)
                })
            }
        }

        catch (e) {
            console.error(e.message)
        }
<<<<<<< HEAD
    }
=======

    }, [themeColor, showPreview, accentColor])
>>>>>>> dev

    const SectionTitle = ({ title, subTitle }) => {
        return <div className="mb-10">
            <p className={styles.miniSectionTitle}>{subTitle}</p>
            <p className={styles.sectionTitle}>{title}</p>
        </div>
    }

    return <div className="body">
<<<<<<< HEAD
        <div className="theme-body min-h-screen">
            {
                showPreview ?
                    <div className={styles.previewMainEdit}>

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
                                    // cv ?
                                    <div className="flex items-center">
                                        <p className={`button hover:opacity-50 cursor-pointer p-3 px-10 rounded-full`}>Download CV</p>
                                    </div>
                                    // : <></>
                                }
                            </div>
                        </div>

                        {/* HERO */}
                        <div id="hero" className={styles.heroSection}>
                            <div className={styles.section}>
                                <div className="sm:h-[70vh] pt-32 sm:pt-0 sm:flex items-center">
                                    <div className={`text-left max-w-5xl`}>
                                        <div className="text-5xl leading-tight py-5 font-bold">{tagline}</div>
                                        <div className="text-2xl">{work}</div>
                                        <div className="-ml-8 mt-8 flex justify-start">
                                            <Socials socials={socials} email={email} themeColor={themeColor} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ABOUT */}
                        <div id="about" className={styles.section}>
                            <SectionTitle title="Know Me More" subTitle="ABOUT ME" />
                            <div className={styles.sectionWrapper}>
                                <p className="text-2xl">{about}</p>
                            </div>
                            <div className="mt-10">
                                {
                                    profilePhotoPreview ?
                                        <div className={styles.profilePhotoContainer}>
                                            <img className={styles.profilePhoto} src={URL.createObjectURL(profilePhotoPreview)} alt='' />
                                        </div> : <></>
                                }

                                {
                                    !profilePhotoPreview && profilePhoto ?
                                        <div className={styles.profilePhotoContainer}>
                                            <img className={styles.profilePhoto} src={profilePhoto} alt='' />
                                        </div> : <></>
                                }
                            </div>
                        </div>

                        {/* SKILLS */}
                        {
                            skills.length > 0 ?
                                <div id="skills" className={styles.graySection}>
                                    <SectionTitle title="Expert With My Tools" subTitle="MY SKILLS" />
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
                                    <SectionTitle title="Recent Works" subTitle="MY PORTFOLIO" />
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
                                    <SectionTitle title="GitHub Statistics" subTitle="MY GITHUB CONTRIBUTIONS" />
                                    <img alt='' className="m-auto w-full sm:w-1/3" src={`https://github-readme-stats.vercel.app/api?username=${socials.github}&show_icons=true&hide=&count_private=true&title_color=3382ed&text_color=ffffff&icon_color=3382ed&bg_color=1c1917&hide_border=true&show_icons=true`} />
                                </div>
                                : <></>
                        }

                        {/* DONATIONS & TIPS */}
                        {
                            socials.coffee !== "" ?
                                <div id="support" className={styles.section}>
                                    <SectionTitle title="Want to support?" subTitle="SUPPORT" />
                                    <div>
                                        <a href={`https://www.buymeacoffee.com/${socials.coffee}`}>
                                            <img alt="" src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" width="200" />
                                        </a>
                                    </div>
                                </div> : <div></div>
                        }

                        {/* FOOTER */}
                        <div id="contact" className="py-10 sm:text-center max-w-6xl m-auto flex sm:justify-center">
                            <Socials socials={socials} email={email} themeColor="#ffffff" />
                        </div>


                        {/* MADE WITH FOLIO */}
                        <div className="py-20 px-10 -mt-10 pt-10 sm:text-center max-w-6xl m-auto">
                            <a href="https://follio.app" className="opacity-50">Made with 💛 by Folio</a>
                        </div>
                    </div> : <></>
            }

        </div >
    </div >
}

export default Preview3

// import { useContext, useEffect, useState } from "react"
// import { AppContext } from "../../context/context"
// import ProjectCard from "../projectCard"
// import { Socials } from "../socials"
// import { generateTextColor } from "../../constants/functions"

// const Preview3 = ({ }) => {

//     const { fullname, email, username, accentColor, tagline, projects, work, about, themeColor, skills, socials, showGithubStats, showPreview, isPremiumAccount, coverPhotoPreview, profilePhotoPreview, coverPhoto, profilePhoto, cv } = useContext(AppContext)

//     const styles = {
//         wrap: `flex items-center flex-wrap px-10 -ml-10`,
//         previewMainEdit: `text-center m-auto pt-5 sm:pt-0 pb-56`,
//         profilePhotoContainer: `m-auto sm:w-72 sm:h-72 w-full rounded-full overflow-hidden relative bg-white mt-10 border-8 border-[#fff] sm:mt-0`,
//         profilePhoto: `object-cover h-full w-full rounded-full`,
//         header: `header p-5 px-10 z-20`,
//         headerWrapper: `flex items-center justify-between xl container m-auto w-full h-full`,
//         headerLink: `m-3 hover:opacity-50 hidden`,
//         section: `border-b border-b-[#f1f1f1] py-32 px-10 m-auto text-left`,
//         graySection: `bg-[#dbdbdb21] border-b border-b-[#f1f1f1] py-32 px-10 text-left m-auto`,
//         heroSection: `m-auto -mt-32`,
//         sectionWrapper: `m-auto max-w-7xl`,
//         skillPill: `skill-pill ml-0 bg-white border border-[#dadada] border rounded-full px-4 py-2 hover:opacity-50 m-3 transition`,
//         sectionTitle: `text-3xl font-bold ml-0`,
//         miniSectionTitle: `mini-section-title font-bold text-xl mb-2 uppercase`,
//     }

//     useEffect(() => {
//         setColors()
//     }, [themeColor, accentColor])

//     const setColors = () => {
//         try {
//             const buttons = document.querySelectorAll(".button")
//             const hero = document.getElementById("hero")
//             const header = document.querySelector(".header")
//             const miniSectionTitle = document.querySelectorAll(".mini-section-title")

//             miniSectionTitle.forEach(title => {
//                 title.style.color = accentColor
//             })

//             header.style.color = generateTextColor(themeColor)
//             hero.style.background = themeColor
//             hero.style.color = generateTextColor(themeColor)

//             if (buttons.length > 0) {
//                 buttons.forEach(button => {
//                     button.style.background = accentColor
//                     button.style.color = generateTextColor(accentColor)
//                 })
//             }
//         }

//         catch (e) {
//             console.error(e.message)
//         }
//     }

//     const SectionTitle = ({ title, subTitle }) => {
//         return <div className="mb-10">
//             <p className={styles.miniSectionTitle}>{subTitle}</p>
//             <p className={styles.sectionTitle}>{title}</p>
//         </div>
//     }

//     return <div className="body">
//         <div className="theme-body min-h-screen">
//             {
//                 showPreview ?
//                     <div className={styles.previewMainEdit}>

//                         {/* HEADER */}
//                         <div className={styles.header}>
//                             <div className={styles.headerWrapper}>
//                                 <p className="font-bold text-xl">{fullname}</p>
//                                 <nav className="hidden sm:flex">
//                                     <a className={styles.headerLink} href="#">Home</a>
//                                     {about ? <a className={styles.headerLink} href="#about">About</a> : <></>}
//                                     {skills.length > 0 ? <a className={styles.headerLink} href="#skills">Skills</a> : <></>}
//                                     {projects.length > 0 ? <a className={styles.headerLink} href="#projects">Projects</a> : <></>}
//                                     {showGithubStats ? <a className={styles.headerLink} href="#stats">Stats</a> : <></>}
//                                     {socials.coffee ? <a className={styles.headerLink} href="#support">Support</a> : <></>}
//                                 </nav>
//                                 {
//                                     // cv ?
//                                     <div className="flex items-center">
//                                         <p className={`button hover:opacity-50 cursor-pointer p-3 px-10 rounded-full`}>Download CV</p>
//                                     </div>
//                                     // : <></>
//                                 }
//                             </div>
//                         </div>

//                         {/* HERO */}
//                         <div id="hero" className={styles.heroSection}>
//                             <div className={styles.section}>
//                                 <div className="sm:h-[70vh] pt-32 sm:pt-0 sm:flex items-center">
//                                     <div className={`text-left max-w-5xl`}>
//                                         <div className="text-5xl leading-tight py-5 font-bold">{tagline}</div>
//                                         <div className="text-2xl">{work}</div>
//                                         <div className="-ml-8 mt-8 flex justify-start">
//                                             <Socials socials={socials} email={email} themeColor={themeColor} />
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* ABOUT */}
//                         <div id="about" className={styles.section}>
//                             <SectionTitle title="Know Me More" subTitle="ABOUT ME" />
//                             <div className={styles.sectionWrapper}>
//                                 <p className="text-2xl">{about}</p>
//                             </div>
//                             <div className="mt-10">
//                                 {
//                                     profilePhotoPreview ?
//                                         <div className={styles.profilePhotoContainer}>
//                                             <img className={styles.profilePhoto} src={URL.createObjectURL(profilePhotoPreview)} alt='' />
//                                         </div> : <></>
//                                 }

//                                 {
//                                     !profilePhotoPreview && profilePhoto ?
//                                         <div className={styles.profilePhotoContainer}>
//                                             <img className={styles.profilePhoto} src={profilePhoto} alt='' />
//                                         </div> : <></>
//                                 }
//                             </div>
//                         </div>

//                         {/* SKILLS */}
//                         {
//                             skills.length > 0 ?
//                                 <div id="skills" className={styles.graySection}>
//                                     <SectionTitle title="Expert With My Tools" subTitle="MY SKILLS" />
//                                     <div className={styles.sectionWrapper}>
//                                         <ul className={styles.wrap}>
//                                             {
//                                                 skills.map((skill, index) => {
//                                                     return <li key={index} className={styles.skillPill}>{skill}</li>
//                                                 })
//                                             }
//                                         </ul>
//                                     </div>
//                                 </div>
//                                 : <></>
//                         }

//                         {/* PROJECTS */}
//                         {
//                             projects.length > 0 ?
//                                 <div id="projects" className={styles.section}>
//                                     <SectionTitle title="Recent Works" subTitle="MY PORTFOLIO" />
//                                     <div className={styles.sectionWrapper}>
//                                         <ul className="grid grid-cols-1 sm:grid-cols-2">
//                                             {
//                                                 projects.map((project, index) => {
//                                                     return <ProjectCard editMode={false} key={index} index={index} description={project.description} thumbnail={project.thumbnail} name={project.name} link={project.link} />
//                                                 })
//                                             }
//                                         </ul>
//                                     </div>
//                                 </div>
//                                 : <></>
//                         }

//                         {/* GITHUB STATS */}
//                         {
//                             showGithubStats && socials.github ?
//                                 <div id="stats" className={styles.section}>
//                                     <SectionTitle title="GitHub Statistics" subTitle="MY GITHUB CONTRIBUTIONS" />
//                                     <img alt='' className="m-auto w-full sm:w-1/3" src={`https://github-readme-stats.vercel.app/api?username=${socials.github}&show_icons=true&hide=&count_private=true&title_color=3382ed&text_color=ffffff&icon_color=3382ed&bg_color=1c1917&hide_border=true&show_icons=true`} />
//                                 </div>
//                                 : <></>
//                         }

//                         {/* DONATIONS & TIPS */}
//                         {
//                             socials.coffee !== "" ?
//                                 <div id="support" className={styles.section}>
//                                     <SectionTitle title="Want to support?" subTitle="SUPPORT" />
//                                     <div>
//                                         <a href={`https://www.buymeacoffee.com/${socials.coffee}`}>
//                                             <img alt="" src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" width="200" />
//                                         </a>
//                                     </div>
//                                 </div> : <div></div>
//                         }

//                         {/* FOOTER */}
//                         <div id="contact" className="py-10 sm:text-center max-w-6xl m-auto flex sm:justify-center">
//                             <Socials socials={socials} email={email} themeColor="#ffffff" />
//                         </div>


//                         {/* MADE WITH FOLIO */}
//                         <div className="py-20 px-10 -mt-10 pt-10 sm:text-center max-w-6xl m-auto">
//                             <a href="https://follio.app" className="opacity-50">Made with 💛 by Folio</a>
//                         </div>
//                     </div> : <></>
//             }

//         </div >
//     </div >
// }

// export default Preview3
=======
        {/* <div className="theme-body min-h-screen"> */}
        {
            showPreview ?
                <div className={styles.previewMainEdit}>

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
                                        <a href={cv} target="_blank" rel="noopener noreferrer">
                                            <p className={`button hover:opacity-50 cursor-pointer p-3 px-5 rounded-full`}>
                                                Download CV
                                            </p>
                                        </a>
                                    </div>
                                    : <></>
                            }
                        </div>
                    </div>

                    {/* HERO */}
                    <div id="hero" className={styles.heroSection}>
                        <div className={styles.section}>
                            <div className="sm:h-[70vh] pt-32 sm:pt-0 sm:flex items-center">
                                <div className={`text-left max-w-5xl`}>
                                    <div className="text-5xl leading-tight py-5 font-bold">{tagline}</div>
                                    <div className="text-2xl">{work}</div>
                                    <div className="-ml-8 mt-8 flex justify-start">
                                        <Socials socials={socials} email={email} themeColor={themeColor} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ABOUT */}
                    <div id="about" className={styles.section}>
                        <SectionTitle title="Know Me More" subTitle="ABOUT ME" />
                        <div className={styles.sectionWrapper}>
                            <p className="text-xl">{about}</p>
                        </div>
                        <div className="mt-10">
                            {
                                profilePhotoPreview ?
                                    <div className={styles.profilePhotoContainer}>
                                        <img className={styles.profilePhoto} src={URL.createObjectURL(profilePhotoPreview)} alt='' />
                                    </div> : <></>
                            }

                            {
                                !profilePhotoPreview && profilePhoto ?
                                    <div className={styles.profilePhotoContainer}>
                                        <img className={styles.profilePhoto} src={profilePhoto} alt='' />
                                    </div> : <></>
                            }
                        </div>
                    </div>

                    {/* SKILLS */}
                    {
                        skills.length > 0 ?
                            <div id="skills" className={styles.graySection}>
                                <SectionTitle title="Expert With My Tools" subTitle="MY SKILLS" />
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
                                <SectionTitle title="Recent Works" subTitle="MY PORTFOLIO" />
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
                                <SectionTitle title="GitHub Statistics" subTitle="MY GITHUB CONTRIBUTIONS" />
                                <img alt='' className="m-auto w-full" src={`https://github-readme-stats.vercel.app/api?username=${socials.github}&show_icons=true&hide=&count_private=true&title_color=3382ed&text_color=ffffff&icon_color=3382ed&bg_color=1c1917&hide_border=true&show_icons=true`} />
                            </div>
                            : <></>
                    }

                    {/* DONATIONS & TIPS */}
                    {
                        socials.coffee !== "" ?
                            <div id="support" className={styles.section}>
                                <SectionTitle title="Want to support?" subTitle="SUPPORT" />
                                <div>
                                    <a href={`https://www.buymeacoffee.com/${socials.coffee}`}>
                                        <img alt="" src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" width="200" />
                                    </a>
                                </div>
                            </div> : <div></div>
                    }

                    {/* FOOTER */}
                    <div id="contact" className="py-10 sm:text-center max-w-6xl m-auto flex sm:justify-center">
                        <Socials socials={socials} email={email} themeColor="#ffffff" />
                    </div>


                    {/* MADE WITH FOLIO */}
                    <div className="py-20 px-5 -mt-10 pt-10 sm:text-center max-w-6xl m-auto">
                        <a href="https://follio.app" className="opacity-50">Made with 💛 by Folio</a>
                    </div>
                </div> : <></>
        }
        {/* </div > */}
    </div >
}

export default Preview3
>>>>>>> dev
