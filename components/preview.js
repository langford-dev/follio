import { useState, useContext } from "react"
import { AppContext } from "../context/context"
import { SocialIcon } from 'react-social-icons';
import Link from "next/link";
import Image from "next/image"

const styles = {
    pill: `bg-gray-100 rounded-full px-3 py-1 m-1`,
    wrap: `flex items-center justify-center flex-wrap px-5`,
    previewEdit: `min-h-screen absolute w-full p-0 bg-white  sm:relative sm:w-1/2 sm:p-10 sm:border-r sm:border-l sm:block sm:overflow-y-scroll sm:h-screen`,
    previewMainEdit: `text-center m-auto`,
    closePreviewButton: `-mt-5 flex items-center justify-center p-2 sm:hidden`,
    profilePhotoContainer: `w-48 h-48 rounded-full overflow-hidden relative p-1 bg-white m-auto -mt-20`,
    profilePhoto: `object-cover h-full w-full rounded-full`,
    coverPhoto: `bg-gray-100 w-full h-60 object-cover`,
}

const Preview = () => {
    let { fullname, work, about, themeColor, skills, usernames, showGithubStats, showPreview, setShowPreview, isPremiumAccount, coverPhotoPreview, profilePhotoPreview, coverPhoto, profilePhoto } = useContext(AppContext)

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

    if (showPreview) return <div className={styles.previewEdit}>
        <div className={styles.previewMainEdit}>
            <p className={styles.closePreviewButton} onClick={() => setShowPreview(false)}>&times; Close preview</p>

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


                {/* {
                    !coverPhotoPreview ?
                        <div className="bg-gray-200 w-full h-60" />
                        : <img className={styles.coverPhoto} src={URL.createObjectURL(coverPhotoPreview)} alt='' />

                }

                {
                    !profilePhotoPreview ?
                        <div className="w-48 h-48 m-auto bg-gray-100 rounded-full -mt-20 border-4 border-white" />
                        : <div className={styles.profilePhotoContainer}>
                            <img className={styles.profilePhoto} src={URL.createObjectURL(profilePhotoPreview)} alt='' />
                        </div>
                } */}

            </div>

            <p className="font-bold text-3xl my-5 mt-10">{fullname}</p>
            <p className=" font-bold mb-5 uppercase">{work}</p>

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
                    <p className="font-bold text-xl mb-5">About me</p>
                    <p className="mb-5 px-5">{about}</p>
                </div> : <></>
            }

            <div className="mt-20">
                {
                    skills.length > 0 ?
                        <p className={`font-bold text-xl mb-5`}>My tools and skills 🧰 </p>
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
                    <img style={{ width: "90%", margin: "auto", marginBottom: "16px", borderRadius: "10px" }} src={`https://github-readme-stats.vercel.app/api?username=${usernames.github}&show_icons=true&hide=&count_private=true&title_color=3382ed&text_color=f97316&icon_color=3382ed&bg_color=1c1917&hide_border=true&show_icons=true`} />
                    <img style={{ width: "90%", margin: "auto", marginBottom: "16px", borderRadius: "10px" }} src={`https://activity-graph.herokuapp.com/graph?username=${usernames.github}&bg_color=1c1917&color=f97316&line=3382ed&point=f97316&area_color=1c1917&area=true&hide_border=true&custom_title=GitHub%20Commits%20Graph`} />
                </div> : <></>
            }

            {
                isPremiumAccount && usernames.coffee.trim() !== "" ? <div className="flex items-center justify-content flex-col mt-20 w-full">
                    <p className={`font-bold text-xl mb-5`}>Wanna tip me? 😁</p>
                    <a href={`https://www.buymeacoffee.com/${usernames.coffee}`}>
                        <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" width="200" />
                    </a>
                </div> : <div></div>
            }
        </div>
    </div>

    return <div></div>
}

export default Preview