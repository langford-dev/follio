import { useContext } from "react"
import SocialInput from "../socialInput"
import ViewTitle from "../viewTitle"
import Switch from "react-switch";
import { AppContext } from "../../context/context";

const styles = {
    editingView: `w-screen sm:w-1/2 p-10 -mt-5 sm:mt-0 px-5 sm:border-l pb-56 pt-24 sm:pt-0 bg-white sm:p-10 sm:pt-5`,
}

const PaymentView = () => {
    let { showGithubStats, setShowGithubStats, isPremiumAccount } = useContext(AppContext)

    return <div className={styles.editingView}>
        <ViewTitle title="Receive tips" subtitle="Accept payments from your page" />

        <div className="mt-10">
            <SocialInput label="☕ Buy me coffee" host="https://www.buymeacoffee.com/" fieldFor="coffee" />
            <SocialInput label="💰 Tip me in ETH" host="" fieldFor="eth-tip" />
        </div>

        {!isPremiumAccount ? <p className="font-medium text-xl text-gray-500">Go Premium to access this feature :)</p> : <div></div>}
    </div>
}

export default PaymentView