import { useContext } from "react"
import { AppContext } from "../context/context"

const styles = {
    preview: `border-l w-1/2 p-10 border-r`,
}

const Preview = () => {
    const { fullname, title, about } = useContext(AppContext)

    return <div className={styles.preview}>
        <div className="text-center">
            <div className="w-48 h-48 m-auto mb-5 bg-gray-100 rounded-full" />
            <p className="font-bold text-2xl my-5">{fullname}</p>
            <p className=" font-bold mb-5 uppercase">{title}</p>
            <p className="">{about}</p>
        </div>
    </div>
}

export default Preview