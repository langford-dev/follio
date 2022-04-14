import Link from "next/link"
import UpdateFeature from "../components/updateFeature"
import Logo from "../components/logo"
import { useContext, useEffect, useState } from "react"
import { AppContext } from "../context/context"

const Twitter = ({ twitterLink }) => {
    return <a href={twitterLink} target="_blank" rel="noreferrer" className="mt-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
    </a>
}

const User = ({ image, name, link, twitter }) => {
    return <div className="flex flex-col items-center mb-20 sm:mb-0">
        <a href={twitter} target="_blank" rel="noreferrer">
            <img src={image} className="rounded-full w-56 h-56 hover:opacity-70" />
        </a>
        <p className="text-xl mt-5">{name}</p>
        <a href={link} target="_blank" rel="noreferrer" className="text-[#3d5bff] mt-1">{link.replace("https://", "").replace("www.", "")}</a>
        <Twitter twitterLink={twitter} />
    </div>
}

const Testimonial = ({ name, content, link }) => {
    return <div className="bg-white text-xl p-8 relative rounded-xl mb-5">
        {/* <span className="text-7xl absolute left-4 opacity-20">"</span> */}
        {content}
        <div className="mt-5">
            <p className="font-bold mr-2 text-brand relative top-1"> - {name} </p>
            <div>
                {link ? <a href={link} target="_blank" rel="noreferrer" className="text-[#3d5bff]">{link.replace("https://", "").replace("www.", "")}</a> : <></>}
                {/* {twitter ? <Twitter twitterLink={twitter} /> : <></>} */}
            </div>
        </div>
    </div>
}

const Landing = () => {
    const [usersNum, setUsersNum] = useState(0)
    const { getAllUsers } = useContext(AppContext)

    useEffect(() => {
        getTotalUsersNumber()
    }, [getAllUsers])

    const getTotalUsersNumber = async () => {
        try {
            let a = await getAllUsers()
            setUsersNum(a.length)
        }

        catch (e) {
            console.log(e.message)
        }
    }

    return <div>
        {/* HEADER */}
        <div className="flex items-center justify-between container 2xl m-auto p-5">
            <Logo />
            <div className="flex items-center">
                <Link passHref={true} href="/auth" >
                    <p className="border p-3 px-5 w-max rounded-full hover:bg-light hover:text-dark bg-dark text-light cursor-pointer select-none sm:text-xl">Login</p>
                </Link>
            </div>
        </div>

        {/* HERO */}
        <div className="text-center container 2xl m-auto px-5 p-36 -mt-10">
            <div className="flex justify-center mb-10">
                <a href="https://www.producthunt.com/posts/follio?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-follio" target="_blank" rel="noreferrer">
                    <img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=340571&theme=light" alt="Follio - Easy&#0044;&#0032;no&#0045;code&#0032;and&#0032;customizable&#0032;portfolio&#0032;site&#0032;builder | Product Hunt" style={{ width: "250px", height: "50px" }} />
                </a>
            </div>
            <p className="font-extrabold text-6xl sm:text-7xl leading-tight">Online portfolio <span className="text-7xl text-brand mt-1 sm:mt-0">builder</span></p>
            <p className="py-10 text-xl sm:text-2xl opacity-50 max-w-4xl m-auto">An easy way to create and deploy your portfolio site with your skills, projects, socials, meeting schedules, and custom domain</p>

            <p className="mb-10 text-xl">💛 Loved by <span className="text-brand font-bold text-xl">{usersNum > 0 ? usersNum : "our"}</span> users</p>

            <div className="flex flex-wrap items-center justify-center">
                <div>
                    <Link passHref={true} href="/auth" >
                        <p className="border p-3 px-5 m-auto rounded-full hover:bg-light hover:text-dark bg-dark text-light cursor-pointer select-none sm:text-xl">Build your site!</p>
                    </Link>
                </div>
                <a href="https://follio.app/langford">
                    <p className="m-5 font-bold cursor-pointer hover:opacity-50 hover:text-brand">View demo</p>
                </a>
            </div>
        </div>

        {/* OUR FEATURES */}
        <div className="bg-[#f1f1f1]">
            <div className="text-center container 2xl m-auto px-10 p-24 sm:px-24">
                <p className="text-brand mb-3 font-bold text-2xl">A central location for all your information</p>
                <p className="font-extrabold text-4xl sm:text-5xl">What you can do</p>
                <p className="py-10 text-xl sm:text-2xl opacity-50 max-w-5xl m-auto">No need for designers or plugins; simply pick a template, style it anyway you want, and fill it with your info. Boom! You have your website.</p>
                <div className="flex items-center justify-center">
                    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 w-full">
                        <UpdateFeature label="Dope themes" icon="🎨" />
                        <UpdateFeature label="Color customization" icon="💅" />
                        <UpdateFeature label="Responsive design" icon="📱" />
                        <UpdateFeature label="Tips/donations" icon="💰" />
                        <UpdateFeature working={true} label="Meeting scheduling" icon="📆" />
                        <UpdateFeature working={true} label="Page analytics" icon="📈" />
                        <UpdateFeature soon={true} label="Submitting your design" icon="😎" />
                        <UpdateFeature soon={true} label="Custom domain" icon="🌟" />
                    </div>
                </div>
            </div>
        </div>

        {/* PEOPLE WHO USE IT */}
        <div className="text-center container 2xl m-auto px-10 p-24 sm:px-24">
            <p className="font-extrabold text-4xl sm:text-5xl mb-20">Loved by twitter</p>
            <div className="flex flex-wrap items-center justify-evenly wrap">
                <User name="SWE STUDENT" link="https://www.follio.app/azimifardous" twitter="https://twitter.com/azimifardous" image="http://res.cloudinary.com/breellz/image/upload/v1649851342/v1ywskvkyesqkzsc7zkp.jpg" />
                <User name="Web3 dev, Content creator" link="https://www.follio.app/favoronuoha" twitter="https://twitter.com/heyOnuoha" image="https://pbs.twimg.com/profile_images/1468914223405277189/_25swnVl_400x400.jpg" />
                <User name="Blockchain developer" link="https://https://www.follio.app/thevatsal" twitter="https://twitter.com/theVatsal_eth" image="http://res.cloudinary.com/breellz/image/upload/v1649672271/mlejeypghxifl67zmatb.png" />
                <User name="Digital artist" link="https://www.follio.app/eaziart" twitter="https://twitter.com/ezi_art_" image="https://pbs.twimg.com/profile_images/1508088843253256196/CGQCAjT8_400x400.jpg" />
            </div>
        </div>

        {/* TESTIMONIALS */}
        <div className="bg-[#f1f1f1]">
            <div className="text-center container 2xl m-auto px-10 p-24 sm:px-24 ">
                <p className="font-extrabold text-4xl sm:text-5xl mb-20">From our buddies</p>
                <div className="flex flex-wrap items-center justify-evenly wrap">
                    <Testimonial content="Man i just made my portffolio within a few minutes. Really enjoyed it" link="https://www.follio.app/azimifardous" name="Ahmad Fardous Azimi" />
                    <Testimonial content="I built my portfolio, and I just love the process you have created" link="https://www.follio.app/thevatsal" name="Vatsal Awadhiya" />
                    {/* <Testimonial content="I didn't have a portfolio site, but this tool helped me setup mine in a few minutes." link="" name="Anon"s /> */}
                </div>
            </div>
        </div>

        {/* THE TEAM */}
        <div className="text-center container 2xl m-auto px-10 p-24 sm:px-24">
            <p className="font-extrabold text-4xl sm:text-5xl">The team</p>
            <p className="pb-10 pt-5 text-xl sm:text-2xl opacity-50 max-w-4xl m-auto">Follio is being built by a small team of developers</p>
            <div className="flex flex-wrap items-center justify-evenly wrap">
                <User name="Founder" link="https://follio.app/langford" twitter="https://twitter.com/langford_dev" image="https://pbs.twimg.com/profile_images/1494065115628548099/IOVenzqn_400x400.jpg" />
                <User name="Co founder" link="https://follio.app/goofierey" twitter="https://twitter.com/GoofieRey" image="https://pbs.twimg.com/profile_images/1477021347129737224/SpT0xdx0_400x400.jpg" />
            </div>
        </div>

        <footer className="text-center p-20 opacity-80">
            &copy; 2022 Follio | Multiverse tech
        </footer>
    </div >
}

export default Landing