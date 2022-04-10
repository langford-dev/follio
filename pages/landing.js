import Link from "next/link"
import UpdateFeature from "../components/updateFeature"
import logo from "../assets/logo.png"

const Landing = () => {
    return <div>
        {/* HEADER */}
        <div className="flex items-center justify-between container 2xl m-auto p-5">
            <div>
                <img className="w-7" src={logo.src} />
            </div>
            <Link passHref={true} href="/auth" >
                <p className="border p-3 px-10 w-max rounded-full hover:bg-light hover:text-dark bg-dark text-light cursor-pointer">Get started</p>
            </Link>
        </div>

        {/* HERO */}
        <div className="text-center container 2xl m-auto px-5 p-36">
            <p className="font-extrabold text-4xl sm:text-7xl">Simple portfolio <span id="gradient-text">builder</span></p>
            <p className="py-10 text-xl sm:text-2xl opacity-50">Ship your portfolio website in less than 2 minutes</p>
            <Link passHref={true} href="/auth" >
                <p className="border p-3 px-10 w-max m-auto rounded-full hover:bg-light hover:text-dark bg-dark text-light cursor-pointer">Build your site now! 🚀</p>
            </Link>
        </div>

        {/* OUR FEATURES */}
        <div className="bg-[#f1f1f1]">
            <div className="text-center container 2xl m-auto px-10 p-24 sm:px-24">
                <p className="font-extrabold text-4xl sm:text-5xl">What you can do</p>
                <p className="py-10 text-xl sm:text-2xl opacity-50 max-w-5xl m-auto">There's no need for designers or plugins; simply pick a template, style it anyway you want, and fill it with your info. Boom! You have your website.</p>
                <div className="flex items-center justify-center">
                    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 w-full">
                        <UpdateFeature label="Dope themes" icon="🎨" />
                        <UpdateFeature label="Page analytics" icon="📈" />
                        <UpdateFeature label="Color customization" icon="🌴" />
                        <UpdateFeature label="Tips/donations" icon="💰" />
                        <UpdateFeature label="Meeting setup" icon="📆" />
                        <UpdateFeature label="Custom domain" icon="🌟" />
                        <UpdateFeature label="... More coming soon" icon="🎁" />
                    </div>
                </div>
            </div>
        </div>

        {/* HOW IT WORKS */}
        <div className="text-center container 2xl m-auto px-10 p-24 sm:px-24"></div>
    </div>
}

export default Landing