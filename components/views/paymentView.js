import { useContext } from "react"
import SocialInput from "../socialInput"
import ViewTitle from "../viewTitle"
import Switch from "react-switch";
import { AppContext } from "../../context/context";

const styles = {
    editingView: `w-screen sm:w-1/2 p-10 -mt-5 sm:mt-0 px-5 sm:border-l pb-56 bg-white`,
}

const PaymentView = () => {
    let { showGithubStats, setShowGithubStats, isPremiumAccount } = useContext(AppContext)

    return <div className={styles.editingView}>
        <ViewTitle title="Receive tips" subtitle="Let visitors connect with you through your socials" />

        <div className="mt-10">
            <SocialInput label="☕ Buy me coffee" host="https://www.buymeacoffee.com/" fieldFor="coffee" />
            <SocialInput label="💰 Tip me in ETH" host="0xff5...89b" fieldFor="eth-tip" />
        </div>

        <p className="font-bold text-xl">Go Premium to access this feature :)</p>
    </div>
}

export default PaymentView