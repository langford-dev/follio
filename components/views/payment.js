import { useContext } from "react"
import SocialInput from "../socialInput"
import ViewTitle from "../viewTitle"
import Switch from "react-switch";
import { AppContext } from "../../context/context";
import { styles } from "./styles";

const Payment = () => {
    let { isPremiumAccount } = useContext(AppContext)

    return <div className={styles.editMain}>
        <ViewTitle title="Receive tips" subtitle="Accept payments from your page" />

        <div className={styles.editMainWrapper}>
            <div className="mt-10">
                <SocialInput label="☕ Buy me coffee" host="https://www.buymeacoffee.com/" fieldFor="coffee" />
                <SocialInput label="💰 Tip me in ETH" host="" fieldFor="eth-tip" />
            </div>
            {!isPremiumAccount ? <p className="font-medium text-xl text-gray-500">Go Premium to access this feature :)</p> : <div></div>}
        </div>
    </div>
}

export default Payment