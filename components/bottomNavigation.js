import Link from "next/link"
import { EditOutlined, FormatPainterOutlined, EllipsisOutlined, HomeOutlined } from '@ant-design/icons';

const iconStyle = (page) => {
    let pageUrl = window.location.pathname

    if (pageUrl === page) return { fontSize: '30px', color: '#2563eb' }
    return { fontSize: '30px', }

}

const BottomNavigation = () => {
    return <div className="sm:hidden fixed bottom-0 left-0 flex items-center justify-around w-screen bg-white font-medium p-3 border-t">
        <Link href="/" passHref={true}>
            <div className="flex items-center flex-col">
                <HomeOutlined style={iconStyle("/")} />
                <small>Home</small>
            </div>
        </Link>

        <Link href="/edit" pa ssHref={true}>
            <div className="flex items-center flex-col">
                <EditOutlined style={iconStyle("/edit")} />
                <small>Edit</small>
            </div>
        </Link>

        <Link href="/themes" passHref={true}>
            <div className="flex items-center flex-col">
                <FormatPainterOutlined style={iconStyle("/themes")} />
                <small>Themes</small>
            </div>
        </Link>

        <Link href="/" passHref={true}>
            <div className="flex items-center flex-col">
                <EllipsisOutlined style={iconStyle("/more")} />
                <small>More</small>
            </div>
        </Link>

    </div>
}

export default BottomNavigation