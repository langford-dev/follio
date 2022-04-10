import Link from "next/link"
import UpdateFeature from "../components/updateFeature"
import logo from "../assets/logo.png"

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
        <p className="text-xl mt-3">{name}</p>
        <a href={link} target="_blank" rel="noreferrer" className="text-[#3d5bff] mt-2">{link.replace("https://", "")}</a>
        <Twitter twitterLink={twitter} />
    </div>
}

const Landing = () => {
    return <div>
        {/* HEADER */}
        <div className="flex items-center justify-between container 2xl m-auto p-5">
            <div>
                <img className="w-7" src={logo.src} />
            </div>
            <div className="flex items-center">
                <a href="https://www.producthunt.com/posts/follio?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-follio" target="_blank" rel="noreferrer">
                    <img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=340571&theme=light" alt="Follio - Easy&#0044;&#0032;no&#0045;code&#0032;and&#0032;customizable&#0032;portfolio&#0032;site&#0032;builder | Product Hunt" style={{ width: "250px", height: "50px" }} />
                </a>
                <Link passHref={true} href="/auth" >
                    <p className="border p-3 px-5 w-max rounded-full hover:bg-light hover:text-dark bg-dark text-light cursor-pointer text-xl">Get started</p>
                </Link>
            </div>
        </div>

        {/* HERO */}
        <div className="text-center container 2xl m-auto px-5 p-36">
            <p className="font-extrabold text-4xl sm:text-7xl">Simple portfolio <span id="gradient-text">builder</span></p>
            <p className="py-10 text-xl sm:text-2xl opacity-50">Ship your portfolio website in less than 2 minutes</p>
            <Link passHref={true} href="/auth" >
                <p className="border p-3 px-5 w-max m-auto rounded-full hover:bg-light hover:text-dark bg-dark text-light cursor-pointer text-xl">Build your site now! 🚀</p>
            </Link>
        </div>

        {/* OUR FEATURES */}
        <div className="bg-[#f1f1f1]">
            <div className="text-center container 2xl m-auto px-10 p-24 sm:px-24">
                <p className="font-extrabold text-4xl sm:text-5xl">What we got?</p>
                <p className="py-10 text-xl sm:text-2xl opacity-50 max-w-5xl m-auto">Theres no need for designers or plugins; simply pick a template, style it anyway you want, and fill it with your info. Boom! You have your website.</p>
                <div className="flex items-center justify-center">
                    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 w-full">
                        <UpdateFeature label="Dope themes" icon="🎨" />
                        <UpdateFeature label="Page analytics" icon="📈" />
                        <UpdateFeature label="Color customization" icon="💅" />
                        <UpdateFeature label="Tips/donations" icon="💰" />
                        <UpdateFeature label="Meeting scheduling" icon="📆" />
                        <UpdateFeature label="Submitting your design" icon="😎" />
                        <UpdateFeature label="Custom domain" icon="🌟" />
                        <UpdateFeature label="... More coming soon" icon="🎁" />
                    </div>
                </div>
            </div>
        </div>

        {/* PEOPLE WHO USE IT */}
        {/* <p className="font-extrabold text-4xl sm:text-5xl">Loved by tech twitter giants ⚡</p> */}
        {/* <div className="text-center container 2xl m-auto px-10 p-24 sm:px-24">
            <p className="font-extrabold text-4xl sm:text-5xl mb-20">Guess who loves follio</p>

            <div className="flex flex-wrap items-center justify-evenly wrap">
                <User name="Cardinal" link="https://follio.app/cardinal" twitter="https://twitter.com/Cardinal_nft" image="https://twitter.com/langford_dev" image="https://pbs.twimg.com/profile_images/1477021347129737224/SpT0xdx0_400x400.jpg" />
                <User name="Langford dev" link="https://follio.app/langford" twitter="https://twitter.com/langford_dev" image="https://pbs.twimg.com/profile_images/1494065115628548099/IOVenzqn_400x400.jpg" />
            </div>
        </div> */}

        {/* THE TEAM */}
        <div className="text-center container 2xl m-auto px-10 p-24 sm:px-24">
            <p className="font-extrabold text-4xl sm:text-5xl mb-20">The awesome team 😎</p>
            <div className="flex flex-wrap items-center justify-evenly wrap">
                <User name="Founder" link="https://follio.app/langford" twitter="https://twitter.com/langford_dev" image="https://pbs.twimg.com/profile_images/1494065115628548099/IOVenzqn_400x400.jpg" />
                <User name="QA tester" link="https://follio.app/cardinal" twitter="https://twitter.com/Cardinal_nft" image="https://pbs.twimg.com/profile_images/1477021347129737224/SpT0xdx0_400x400.jpg" />
            </div>
        </div>

        <footer className="text-center p-20 opacity-80">
            &copy; 2022 Follio | Multiverse tech
        </footer>
    </div>
}

export default Landing