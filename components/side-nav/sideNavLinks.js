import Link from "next/link"
import graph from "../../assets/svg/graph.svg"
import brush from "../../assets/svg/brush.svg"
import theme from "../../assets/svg/theme.svg"
import settings from "../../assets/svg/settings.svg"
import shield from "../../assets/svg/shield.svg"
import share from "../../assets/svg/share.svg"
import copy from "../../assets/svg/copy.svg"
import logoutIcon from "../../assets/svg/logoutIcon.svg"
import qrcode from "../../assets/svg/qrcode.svg"
import SideNavIconLink from "./sideNavIconLink"
import Switch from "react-switch";
import DarkButton from '../buttons/darkButton'
import { QRCodeCanvas } from "qrcode.react"
import { useContext, useState } from "react"
import { AppContext } from "../../context/context"
import { navStyles } from "../styles/navStyles"

const Twitter = ({ twitterLink }) => {
    return <a href={twitterLink} target="_blank" rel="noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
    </a>
}

const SideNavLinks = () => {
    const { shareLink, copyLink, logout, username, cv } = useContext(AppContext)
    const [showCv, setShowCv] = useState(false)
    const [openQrcodeModal, setOpenQrcodeModal] = useState(false)

    const downloadQrCode = () => {
        let canvas = document.getElementsByTagName("canvas")[0]
        const link = document.createElement("a")
        link.href = canvas.toDataURL("image/png")
        link.download = "qrcode.png"
        link.click()
    }

    return <div className="flex flex-col justify-between h-full">
        <div>
            <SideNavIconLink forMobile={true} isNew={true} label="Analytics" target="/account/dashboard" icon={graph.src} />
            <SideNavIconLink forMobile={true} isNew={true} label="Settings" target="/account/settings" icon={settings.src} />
            <SideNavIconLink forMobile={true} label="Edit content" target="/account/edit" icon={brush.src} />
            <SideNavIconLink forMobile={true} isNew={true} label="Themes" target="/account/themes" icon={theme.src} />
            <SideNavIconLink forMobile={true} label="Upgrade" target="/account/upgrade" icon={shield.src} />

            <div className="border-b mb-5 sm:hidden border-b-[#22222211]" />

            <div>
                <p className={navStyles.navLink} onClick={() => setOpenQrcodeModal(true)}>
                    <img className={navStyles.navLinkIcon} src={qrcode.src} />
                    Share QR code
                </p>
            </div>

            <div>
                <p className={navStyles.navLink} onClick={() => copyLink()}>
                    <img className={navStyles.navLinkIcon} src={copy.src} />
                    Copy link
                </p>
            </div>

            <div>
                <p className={navStyles.navLink} onClick={() => shareLink()}>
                    <img className={navStyles.navLinkIcon} src={share.src} />
                    Share link
                </p>
            </div>

            <p className={navStyles.navLink} onClick={() => {
                let a = confirm("Are you sure you want to log out?")
                if (!a) return
                logout()
            }}>
                <img className={navStyles.navLinkIcon} src={logoutIcon.src} />
                Logout
            </p>

            <div className="border-b border-b-[#22222211]" />

            {
                openQrcodeModal ?
                    <div className="mt-20">
                        <div className="flex items-center justify-center fixed inset-0 z-50 bg-dark bg-opacity-30 backdrop-blur-md">
                            <div className="bg-white sm:h-max lg:w-5/12 w-screen h-screen overflow-y-scroll rounded-lg">
                                <div className="p-5 flex items-center flex-col">
                                    <p className="text-5xl mt-10 sm:mt-0 cursor-pointer" onClick={() => setOpenQrcodeModal(false)}>&times;</p>
                                    <p className="font-extrabold text-2xl">Share your QR code</p>
                                    <p className="opacity-50 mb-5 text-center">Visitors can easily visit your portfolio or download your resume by scanning your QR code</p>

                                    <div className="flex flex-wrap justify-between">
                                        {
                                            showCv ?
                                                cv ? <QRCodeCanvas size={270} value={cv} /> : <p>You have not added you resume/cv</p>
                                                : <QRCodeCanvas size={270} value={`${process.env.NEXT_PUBLIC_APP_URL}/${username}`} />
                                        }
                                    </div>

                                    <div className="my-5 flex justify-start items-center">
                                        <p className="opacity-50 mr-2">Show code for CV/resume</p>
                                        <Switch onChange={e => setShowCv(e)} checked={showCv} />
                                    </div>

                                    <DarkButton action={downloadQrCode} label='Download QR code' />
                                </div>
                            </div>
                        </div>
                    </div>
                    : <></>
            }

            <div className="mt-32 sm:hidden">
                <a href="https://www.producthunt.com/posts/follio?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-follio" target="_blank" rel="noreferrer">
                    <img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=340571&theme=light" alt="Follio - Easy&#0044;&#0032;no&#0045;code&#0032;and&#0032;customizable&#0032;portfolio&#0032;site&#0032;builder | Product Hunt" style={{ width: "250px", height: "50px" }} />
                </a>

                <div className="flex items-center justify-between mt-5">
                    <div className={navStyles.description}>{new Date().getFullYear()} &copy; Folio</div>
                    <Twitter twitterLink="https://twitter.com/Follio_" target="_blank" rel="noreferrer" />
                </div>
            </div>
        </div>
    </div>
}

export default SideNavLinks