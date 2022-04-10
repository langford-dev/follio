import { useState, useEffect, useContext } from "react"
import Link from "next/link";
import { generatePillBgColor, generateTextColor } from "../../constants/functions";
import { Socials } from "../socials";
import ProjectCard from "../projectCard";
import { AppContext } from "../../context/context";

const styles = {
    // pill: `bg-white border rounded-full px-3 py-1 m-1`,
    // wrap: `flex items-center flex-wrap px-5 pl-0`,
    wrap: `flex items-center sm:justify-center flex-wrap px-5 pl-0`,
    previewMain: `m-auto 2xl container -mt-10 w-full`,
    profilePhotoContainer: `w-full rounded-xl overflow-hidden relative bg-white mt-10 `,
    profilePhoto: `object-cover h-full w-full rounded-xl`,
    section: `py-20 px-5 sm:text-center max-w-6xl m-auto`,
    sectionTitle: `text-4xl font-bold border-b w-max sm:m-auto ml-0`,
    skillPill: `skill-pill border border-[#dadada29] sm:text-2xl border rounded-full px-4 py-2 hover:opacity-50 m-3 transition sm:m-3`,
    // closePreviewButton: `flex items-center justify-center p-2 sm:hidden`,
    // coverPhoto: `w-screen h-32 sm:h-72 object-cover`,
    // body: `min-h-screen bg-white overflow-y-scroll bg-gradient-to-tl from-rose-100 to-teal-100`,
    // sectionTitle: `font-bold text-2xl mb-5`,
}

const Preview1 = () => {

    let { fullname, username, projects, work, tagline, about, themeColor, skills, socials, showGithubStats, showPreview, isPremiumAccount, coverPhotoPreview, profilePhotoPreview, coverPhoto, profilePhoto } = useContext(AppContext)

    useEffect(() => {
        console.log(themeColor)

        try {
            document.querySelector(".body").style.backgroundColor = themeColor
            document.querySelector(".body").style.color = generateTextColor(themeColor)
            // document.querySelector(".body").style.minHeight = "100vh"

            let skillPills = document.querySelectorAll(".skill-pill")

            skillPills.forEach(pill => {
                pill.style.backgroundColor = "transparent"
                pill.style.color = generateTextColor(themeColor)
            })
        }

        catch (e) {
            console.log(e.message)
        }

    }, [themeColor])

    return <div className="body">

        {
            showPreview ?
                <div className={styles.previewMain}>

                    {/* HERO */}
                    <div className="py-28 px-5">
                        <div>
                            <p className="text-5xl font-extrabold leading-tight">{tagline}</p>
                            {
                                tagline === "" ?
                                    <p className="text-5xl font-extrabold leading-tight">{work}</p>
                                    : <p className="my-5">{work}</p>
                            }
                            <div className="-ml-5 flex justify-start">
                                <Socials socials={socials} themeColor={themeColor} />
                            </div>
                        </div>
                        <div>
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

                    {/* ABOUT */}
                    {
                        about ?
                            <div id="about" className="pb-56 px-5 sm:text-center max-w-6xl m-auto">
                                <p className={styles.sectionTitle}>ABOUT ME</p>
                                <br />
                                <p className="leading-10 text-2xl">{about}</p>
                            </div>
                            : <></>
                    }

                    {/* SKILLS */}
                    {
                        skills.length > 0 ?
                            <div id="skills" className={styles.section}>
                                <p className={styles.sectionTitle}>MY SKILLS</p>
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
                                <ul className="grid grid-cols-1">
                                    {
                                        projects.map((project, index) => {
                                            return <ProjectCard editMode={false} key={index} index={index} description={project.description} thumbnail={project.thumbnail} name={project.name} link={project.link} />
                                        })
                                    }
                                </ul>
                            </div>
                            : <></>
                    }

                    {/* PROJECTS
                    {
                        projects.length > 0 ?
                            <div className="py-28 px-5 max-w-6xl m-auto">
                                <p className="text-3xl font-bold mb-5">PROJECTS</p>
                                <ul className="grid grid-cols-1">
                                    {
                                        projects.map((project, index) => {
                                            return <ProjectCard editMode={false} key={index} index={index} description={project.description} thumbnail={project.thumbnail} name={project.name} link={project.link} />
                                        })
                                    }
                                </ul>
                            </div>
                            : <></>
                    } */}

                    {/* GITHUB STATS
                    {
                        showGithubStats && socials.github ?
                            <div className="py-28 px-5 max-w-6xl m-auto">
                                <p className="text-3xl font-bold mb-5">MY GITHUB STATS</p>
                                <img alt='' style={{ width: "100%", margin: "auto", marginBottom: "16px", borderRadius: "10px" }} src={`https://github-readme-stats.vercel.app/api?username=${socials.github}&show_icons=true&hide=&count_private=true&title_color=3382ed&text_color=ffffff&icon_color=3382ed&bg_color=1c1917&hide_border=true&show_icons=true`} />
                            </div> : <></>
                    } */}

                    {/* GITHUB STATS */}
                    {
                        showGithubStats && socials.github ?
                            <div id="stats" className={styles.section}>
                                <p className={styles.sectionTitle}>MY GITHUB STATS</p>
                                <br />
                                <img alt='' style={{ width: "100%", margin: "auto", marginBottom: "16px", borderRadius: "10px" }} src={`https://github-readme-stats.vercel.app/api?username=${socials.github}&show_icons=true&hide=&count_private=true&title_color=3382ed&text_color=ffffff&icon_color=3382ed&bg_color=1c1917&hide_border=true&show_icons=true`} />
                            </div> : <></>
                    }

                    {/* DONATIONS & TIPS */}
                    {
                        isPremiumAccount && socials.coffee.trim() !== "" ?
                            <div className="py-28 px-5 max-w-6xl m-auto">
                                <p className="text-3xl font-bold mb-5">WANT TO DONATE?</p>
                                <div>
                                    <a href={`https://www.buymeacoffee.com/${socials.coffee}`}>
                                        <img alt="" src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" width="200" />
                                    </a>
                                </div>
                            </div> : <div></div>
                    }

                    {/* FOOTER */}
                    <div id="find-me" className="py-10 sm:text-center max-w-6xl m-auto flex sm:justify-center">
                        <Socials socials={socials} themeColor={themeColor} />
                    </div>

                    {/* MADE WITH FOLIO */}
                    <div className="py-20 px-5 -mt-10 pt-10 sm:text-center max-w-6xl m-auto">
                        <a href="https://folio.vercel.app" className="opacity-50">Made with 💛 by Folio</a>
                    </div>

                    {/* FOOTER
                    <div className="py-10 border-t border-t-[#27272767] max-w-6xl m-auto flex">
                        <Socials socials={socials} themeColor={themeColor} />
                    </div>

                    MADE WITH FOLIO
                    <div className="py-28 px-5 -mt-10 pt-10 max-w-6xl m-auto">
                        <a href="https://folio.vercel.app" className="opacity-50">Made with 💛 by Folio</a>
                    </div> */}
                </div>

                : <></>
        }
    </div >
}

export default Preview1