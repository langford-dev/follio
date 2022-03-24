import Link from "next/link"
import home from "../assets/svg/home.svg"
import brush from "../assets/svg/brush.svg"
import pen from "../assets/svg/pen.svg"
import menu from "../assets/svg/menu.svg"

const BottomNavigation = () => {
    return <div className="sm:hidden fixed bottom-0 left-0 flex items-center justify-around w-screen bg-gray-50 font-medium p-3 border-t">
        <Link href="/" passHref={true}>
            <div className="flex items-center flex-col">
                <img src={home.src} />
                <small>Home</small>
            </div>
        </Link>

        <Link href="/edit" passHref={true}>
            <div className="flex items-center flex-col">
                <img src={pen.src} />
                <small>Edit</small>
            </div>
        </Link>

        <Link href="/themes" passHref={true}>
            <div className="flex items-center flex-col">
                <img src={brush.src} />
                <small>Themes</small>
            </div>
        </Link>

        <Link href="/" passHref={true}>
            <div className="flex items-center flex-col">
                <img src={menu.src} />
                <small>More</small>
            </div>
        </Link>

    </div>
}

export default BottomNavigation