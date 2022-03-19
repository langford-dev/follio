const styles = {
    header: ``,
    headerWrapper: ``,
    button: ``,
}

const Header = () => {
    return <header className="border-b h-16 bg-white">
        <div className="m-auto max-w-screen-xl h-full flex items-center justify-between">
            <p className="font-bold text-2xl text-blue-600">Fol<span className="">io</span></p>
            <div className="bg bg-blue-600 text-white px-5 py-2 rounded-md cursor-pointer">Publish</div>
        </div>
    </header>
}

export default Header