import Link from "next/link"

const BottomNavigation = () => {
    return <div className="sm:hidden fixed bottom-0 left-0 flex items-center justify-around w-screen bg-gray-50 font-medium p-3 border-t">
        <Link href="/" passHref={true}>🏡</Link>
        <Link href="/edit" passHref={true}>✍</Link>
        <Link href="/themes" passHref={true}>🎨</Link>
        <Link href="/" passHref={true}>🛡</Link>
    </div>
}

export default BottomNavigation