import { useContext } from "react"
import { AppContext } from "../../context/context";
import { editLayoutStyles } from "../styles/editLayoutStyles";
import ComingSoon from "../comingSoon";
import ViewTitle from "../viewTitle"

const Meeting = () => {
    let { isPremiumAccount } = useContext(AppContext)

    return <div className={editLayoutStyles.main}>
        <ViewTitle title="Meeting schedule" subtitle="Let visitors schedule meetings with you" />

        <div className={editLayoutStyles.mainWrapper}>
            {
                !isPremiumAccount ?
                    <ComingSoon />
                    : <div></div>
            }
        </div>
    </div>
}

export default Meeting