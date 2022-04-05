import { useContext } from "react"
import SocialInput from "../socialInput"
import ViewTitle from "../viewTitle"
import { AppContext } from "../../context/context";
import { editLayoutStyles } from "../styles/editLayoutStyles";

const Payment = () => {
    let { isPremiumAccount } = useContext(AppContext)

    return <div className={editLayoutStyles.main}>
        <ViewTitle title="Receive tips" subtitle="Accept payments from your page" />

        <div className={editLayoutStyles.mainWrapper}>
            <div className="mt-10">
                <SocialInput label="☕ Buy me coffee" host="https://www.buymeacoffee.com/" fieldFor="coffee" />
                <SocialInput label="💰 Tip me in ETH" host="" fieldFor="eth-tip" />
            </div>
            {!isPremiumAccount ? <p className="font-medium text-xl text-gray-500">Go Premium to access this feature :)</p> : <div></div>}
        </div>
    </div>
}

export default Payment