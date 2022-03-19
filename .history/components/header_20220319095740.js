const styles = {
    header: ``
}

const Header = () => {
    return <header className="border-b h-16 bg-white">
        <div className="m-auto max-w-screen-xl h-full flex items-center justify-between">
            <b>Folio</b>
            <div className="bg bg-blue-600 text-white px-5 py-2">Publish</div>
        </div>
    </header>
}

export default Header