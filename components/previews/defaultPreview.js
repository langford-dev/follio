import { useContext, useEffect } from "react"
import { AppContext } from "../../context/context";
import Link from "next/link";
import { generatePillBgColor, generateTextColor } from "../../constants/functions";
import { Socials } from "../socials";
import ProjectCard from "../projectCard";

const styles = {
    pill: `bg-white border rounded-full px-3 py-1 m-1`,
    wrap: `flex items-center justify-center flex-wrap px-5`,
    previewMainEdit: `text-center m-auto pt-5 sm:pt-0 pb-56`,
    profilePhotoContainer: `w-36 h-36 sm:w-48 sm:h-48 rounded-full overflow-hidden relative p-1 bg-white m-auto -mt-10 sm:-mt-10`,
    profilePhoto: `object-cover h-full w-full rounded-full`,
    coverPhoto: `bg-gray-100 w-full h-32 sm:h-60 object-cover`,
    sectionTitle: `font-bold text-2xl mb-5`,
}

const DefaultPreview = () => {
    let { fullname, username, projects, work, about, themeColor, skills, socials, showGithubStats, showPreview, isPremiumAccount, coverPhotoPreview, profilePhotoPreview, coverPhoto, profilePhoto } = useContext(AppContext)

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
            showPreview ? <div className={styles.previewMainEdit}>

                <div>

                    {
                        coverPhotoPreview ?
                            <img className={styles.coverPhoto} src={URL.createObjectURL(coverPhotoPreview)} alt='' />
                            : <></>
                    }

                    {
                        !coverPhotoPreview && !coverPhoto ?
                            <div className={styles.coverPhoto} />
                            : <></>
                    }

                    {
                        !coverPhotoPreview && coverPhoto ? <img className={styles.coverPhoto} src={coverPhoto} alt='' /> : <></>
                    }

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

                <p className="font-bold text-3xl my-5 mt-10">{fullname}</p>
                <p className="mb-5 -mt-3 opacity-50">@{username}</p>
                <p className=" font-bold mb-5 uppercase">{work}</p>

                {
                    socials.twitter ? <div className="cursor-pointer flex justify-center mt-5">
                        <Link passHref={true} href={socials.twitter}>
                            <img src={`https://img.shields.io/twitter/follow/${socials.twitter}?logo=twitter&style=for-the-badge&color=3382ed&labelColor=1c1917`} alt="twitter" />
                        </Link >
                    </div > : <></>
                }

                {
                    about ? <div className="mt-20">
                        <p className={styles.sectionTitle}>About me 😎</p>
                        <p className="mb-5 px-5 text-lg">{about}</p>
                    </div> : <></>
                }

                <Socials socials={socials} themeColor={themeColor} />

                <div className="mt-20">
                    {
                        skills.length > 0 ?
                            <p className={styles.sectionTitle}>My skills 💪</p>
                            : <></>
                    }
                    <ul className={styles.wrap}>
                        {
                            skills.map((skill, index) => {
                                return <li key={index} className="skill-pill">{skill}</li>
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
                        <img style={{ width: "90%", margin: "auto", marginBottom: "16px", borderRadius: "10px" }} src={`https://github-readme-stats.vercel.app/api?username=${socials.github}&show_icons=true&hide=&count_private=true&title_color=3382ed&text_color=ffffff&icon_color=3382ed&bg_color=1c1917&hide_border=true&show_icons=true`} />
                        <img style={{ width: "90%", margin: "auto", marginBottom: "16px", borderRadius: "10px" }} src={`https://activity-graph.herokuapp.com/graph?username=${socials.github}&bg_color=1c1917&color=ffffff&line=3382ed&point=ffffff&area_color=1c1917&area=true&hide_border=true&custom_title=GitHub%20Commits%20Graph`} />
                    </div> : <></>
                }

                {
                    isPremiumAccount && socials.coffee.trim() !== "" ? <div className="flex items-center justify-content flex-col mt-20 w-full">
                        <p className={styles.sectionTitle}>Wanna tip me? 😁</p>
                        <a href={`https://www.buymeacoffee.com/${socials.coffee}`}>
                            <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" width="200" />
                        </a>
                    </div> : <div></div>
                }
            </div> : <></>
        }
    </div >

    return <div></div>
}

export default DefaultPreview