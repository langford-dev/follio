// import { useState, useContext } from "react"
// import { AppContext } from "../../context/context";
// import { SocialIcon } from 'react-social-icons';
// import Link from "next/link";

// const styles = {
//     pill: `bg-gray-100 rounded-full px-3 py-1 m-1`,
//     wrap: `flex items-center justify-center flex-wrap px-5`,
//     body: `min-h-screen absolute w-full p-0 bg-white  sm:relative sm:w-1/2 sm:p-10 sm:border-r sm:border-l sm:block sm:overflow-y-scroll sm:h-screen pb-56`,
//     previewMainEdit: `text-center m-auto pt-5 sm:pt-0`,
//     profilePhotoContainer: `w-36 h-36 sm:w-48 sm:h-48 rounded-full overflow-hidden relative p-1 bg-white m-auto -mt-5 sm:-mt-10`,
//     profilePhoto: `object-cover h-full w-full rounded-full`,
//     coverPhoto: `bg-gray-100 w-full h-32 sm:h-60 object-cover`,
// }

// const SocialIcons = ({ socialLinks, socials }) => {
//     return <ul className={styles.wrap}>
//         {socials.github ? <SocialIcon bgColor="#fff" fgColor="#242424" url={socialLinks.github} className="mr-2" /> : <></>}
//         {socials.twitter ? <SocialIcon bgColor="#fff" fgColor="#006aee" url={socialLinks.twitter} className="mr-2" /> : <></>}
//         {socials.instagram ? <SocialIcon bgColor="#fff" fgColor="red" url={socialLinks.instagram} className="mr-2" /> : <></>}
//         {socials.facebook ? <SocialIcon bgColor="#fff" fgColor="#0A66C2" url={socialLinks.facebook} className="mr-2" /> : <></>}
//         {socials.linkedin ? <SocialIcon bgColor="#fff" fgColor="blue" url={socialLinks.linkedin} className="mr-2" /> : <></>}
//     </ul>
// }

// const Preview1 = () => {
//     let { fullname, work, about, themeColor, skills, socials, showGithubStats, showPreview, setShowPreview, isPremiumAccount, coverPhotoPreview, profilePhotoPreview, coverPhoto, profilePhoto } = useContext(AppContext)

//     const socialLinks = {
//         twitter: 'https://twitter.com/' + socials.twitter,
//         facebook: 'https://facebook.com/' + socials.facebook,
//         linkedin: 'https://linkedin.com/' + socials.linkedin,
//         github: 'https://github.com/' + socials.github,
//         instagram: 'https://instagram.com/' + socials.instagram,
//         coffee: 'https://www.buymeacoffee.com/' + socials.coffee,
//     }

//     if (showPreview) return <div className={styles.body}>
//         <div className={styles.previewMainEdit}>

//             <div>

//                 {
//                     coverPhotoPreview ?
//                         <img className={styles.coverPhoto} src={URL.createObjectURL(coverPhotoPreview)} alt='' />
//                         : <></>
//                 }

//                 {
//                     !coverPhotoPreview && !coverPhoto ?
//                         <div className={styles.coverPhoto} />
//                         : <></>
//                 }

//                 {
//                     !coverPhotoPreview && coverPhoto ? <img className={styles.coverPhoto} src={coverPhoto} alt='' /> : <></>
//                 }

//                 {
//                     profilePhotoPreview ?
//                         <div className={styles.profilePhotoContainer}>
//                             <img className={styles.profilePhoto} src={URL.createObjectURL(profilePhotoPreview)} alt='' />
//                         </div> : <></>
//                 }

//                 {
//                     !profilePhotoPreview && profilePhoto ?
//                         <div className={styles.profilePhotoContainer}>
//                             <img className={styles.profilePhoto} src={profilePhoto} alt='' />
//                         </div> : <></>
//                 }

//             </div>

//             <p className="font-bold text-3xl my-5 mt-10">{fullname}</p>
//             <p className=" font-bold mb-5 uppercase">{work}</p>

//             <SocialIcons socials={socials} socialLinks={socialLinks} />

//             {
//                 socials.twitter ? <div className="cursor-pointer flex justify-center mt-5">
//                     <Link passHref={true} href={socialLinks.twitter}>
//                         <img src={`https://img.shields.io/twitter/follow/${socials.twitter}?logo=twitter&style=for-the-badge&color=3382ed&labelColor=1c1917`} alt="twitter" />
//                     </Link>
//                 </div> : <></>
//             }

//             {
//                 about ? <div className="mt-20">
//                     <p className="font-bold text-xl mb-5">About me</p>
//                     <p className="mb-5 px-5 text-lg">{about}</p>
//                 </div> : <></>
//             }

//             <div className="mt-20">
//                 {
//                     skills.length > 0 ?
//                         <p className={`font-bold text-xl mb-5`}>My skills 💪</p>
//                         : <></>
//                 }
//                 <ul className={styles.wrap}>
//                     {
//                         skills.map((skill, index) => {
//                             return <li key={index} className={styles.pill}>{skill}</li>
//                         })
//                     }
//                 </ul>
//             </div>

//             {
//                 showGithubStats && socials.github ? <div className="mt-20">
//                     <p className={`font-bold text-xl mb-5 text-[${themeColor}]`}>My GitHub stats 🤩</p>
//                     <img style={{ width: "90%", margin: "auto", marginBottom: "16px", borderRadius: "10px" }} src={`https://github-readme-stats.vercel.app/api?username=${socials.github}&show_icons=true&hide=&count_private=true&title_color=3382ed&text_color=f97316&icon_color=3382ed&bg_color=1c1917&hide_border=true&show_icons=true`} />
//                     <img style={{ width: "90%", margin: "auto", marginBottom: "16px", borderRadius: "10px" }} src={`https://activity-graph.herokuapp.com/graph?username=${socials.github}&bg_color=1c1917&color=f97316&line=3382ed&point=f97316&area_color=1c1917&area=true&hide_border=true&custom_title=GitHub%20Commits%20Graph`} />
//                 </div> : <></>
//             }

//             {
//                 isPremiumAccount && socials.coffee.trim() !== "" ? <div className="flex items-center justify-content flex-col mt-20 w-full">
//                     <p className={`font-bold text-xl mb-5`}>Wanna tip me? 😁</p>
//                     <a href={`https://www.buymeacoffee.com/${socials.coffee}`}>
//                         <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" width="200" />
//                     </a>
//                 </div> : <div></div>
//             }
//         </div>
//     </div>

//     return <div></div>
// }

// export default Preview1