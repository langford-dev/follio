import Link from "next/link"

const Logo = () => {
    return <Link passHref={true} href="/">
        <div className="flex cursor-pointer items-end text-light font-bold text-2xl sm:text-4xl font-[Righteous]">
            follio
            <div className="h-2 w-2 mb-2 ml-1 rounded-md bg-brand"></div>
        </div>
    </Link>
    // return <div className="text-dark w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center rounded-full pb-2">
    //     <p className="font-bold sm:text-4xl text-2xl relative top-1 font-sans">f</p>
    //     <div className="w-2 h-2 rounded-full bg-light mt-6" />
    // </div>
    // return <img src={logo.src} className="w-5" alt="logo" />
    // return <p className="font-medium text-2xl">
    //     <span>😜</span> folio
    // </p>
}

export default Logo