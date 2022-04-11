import { useContext, useEffect } from "react";
import { useRouter } from 'next/router'
import { useSession } from "next-auth/react";
import { mainLayoutStyles } from "../../components/styles/mainLayoutStyles";
import Header from "../../components/header";
import ThemeCard from "../../components/themeCard";
import theme1 from "../../assets/themes/1.png"
import theme2 from "../../assets/themes/2.png"
import SideNav from "../../components/side-nav/sideNav";
import DarkButton from "../../components/buttons/darkButton";
import { AppContext } from "../../context/context";
import { editLayoutStyles } from "../../components/styles/editLayoutStyles";
import Button from "../../components/buttons/button";
import Loader from "../../components/loader";

const styles = {
    title: `text-3xl font-bold mb-3`,
    themeCardContainer: `pb-56 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2`,
}

// const mainLayoutStyles = {
//     mainTitle: `text-2xl sm:text-4xl font-bold mb-3`,
//     main: `flex w-screen min-h-screen m-auto`,
//     mainContentView: `p-5 w-full bg-white mt-16 sm:mt-0`,
// }

const Settings = () => {
    const router = useRouter()
    const { data: session } = useSession()
    const { changeUsername, showLoader, username, setUsername } = useContext(AppContext)

    useEffect(() => {
        if (!session) {
            router.replace("/auth")
            return
        }
    }, [session])

    if (showLoader) return <Loader />

    if (session)
        return <div className={mainLayoutStyles.main}>
            <Header />
            <SideNav />
            <div className={mainLayoutStyles.mainContentView}>
                <p className={mainLayoutStyles.mainTitle}>Settings</p>
                <p className="mt-3 mb-5 text-gray-500">Change your account preferences</p>
                <br />

                <label className={editLayoutStyles.label}>Change your username</label>
                {/* <div className="p-3 mt-1 border border-[#84858e35] bg-white rounded-xl w-12/12 flex items-center w-3/5"> */}
                <div className="p-3 mt-1 border border-[#84858e35] bg-white rounded-xl flex items-center sm:w-5/12">
                    <div className="flex sm:text-xl">
                        follio.app/<input type="text" value={username} className="bg-[#fff] w-8/12 text-brand outline-none" onChange={e => setUsername(e.target.value)} />
                    </div>
                </div>
                <div className="mt-3">
                    <Button label="Save changes" action={changeUsername} />
                </div>

                {/* SETTINGS MODAL */}
                {/* <div className="flex items-center justify-center fixed inset-0 z-50 bg-dark bg-opacity-30 backdrop-blur-md">
                    <div className="bg-light p-5 rounded-md w-11/12 sm:max-w-lg border border-dark overflow-y-scroll">
                        <p>&times;Close</p>
                        <p className="text-2xl">Pick a username</p>
                        <div className="bg-[#f1f1f1] p-3 rounded-xl text-xl my-5">
                            follio.app/<input className="bg-[#f1f1f1] text-brand outline-none" />
                        </div>

                        <DarkButton label="Set name" action={null} />
                    </div>
                </div> */}
            </div >
        </div >

    return <></>
}

export default Settings