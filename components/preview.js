import { useContext } from "react"
import { AppContext } from "../context/context"

const styles = {
    preview: `border-l w-1/2 p-10 border-r`,
    pill: `bg-gray-100  rounded-full px-3 py-1 m-1`,
}

const Preview = () => {
    const { fullname, title, about, themeColor, skills } = useContext(AppContext)

    return <div className={styles.preview}>
        <div className="text-center m-auto">
            {/* center and add max-with to this div to make it responsive  */}
            <div className="w-48 h-48 m-auto bg-gray-100 rounded-full" />
            <p className="font-bold text-2xl my-5 mt-10">{fullname}</p>
            <p className=" font-bold mb-5 uppercase">{title}</p>
            <p className="mb-5 px-5">{about}</p>
            <div className="mt-10">
                {
                    skills.length > 0 ?
                        <p className={`font-bold text-xl mb-5 text-[${themeColor}]`}>Tools is use</p>
                        : <></>
                }
                <ul className="flex items-center justify-center flex-wrap px-5">
                    {
                        skills.map((skill, index) => {
                            return <li key={index} className={styles.pill}>{skill}</li>
                        })
                    }
                </ul>
            </div>
        </div>
    </div>
}

export default Preview