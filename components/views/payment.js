import { useContext } from "react"
import SocialInput from "../socialInput"
import ViewTitle from "../viewTitle"
import { AppContext } from "../../context/context";
import { editLayoutStyles } from "../styles/editLayoutStyles";
import ComingSoon from "../comingSoon";

const Payment = () => {
    let { isPremiumAccount } = useContext(AppContext)

    return <div className={editLayoutStyles.main}>
        <ViewTitle title="Receive tips" subtitle="Accept payments from your page" />

        <div className={editLayoutStyles.mainWrapper}>
            <SocialInput label="☕ Buy me coffee" host="www.buymeacoffee.com/" fieldFor="coffee" />
            <SocialInput label="💰 Tip me in ETH" host="" fieldFor="eth-tip" />
            {/* <div className="mt-10 w-screen">
            </div> */}
            {!isPremiumAccount ?
                <div>
                    {/* <p className="font-medium text-xl opacity-30">Go Premium to access this feature :)</p> */}
                    <ComingSoon />
                </div>
                : <div></div>}
        </div>
    </div>
}

export default Payment