import { useContext, useState } from "react"
import { AppContext } from "../context/context"
import ViewTitle from "../components/viewTitle"

const styles = {
    editingView: `w-screen sm:w-1/2 p-0 -mt-5 sm:mt-0 sm:border-l pb-56 bg-white`,
    input: `border p-2 outline-none mt-2 w-7/12 sm:w-5/12 rounded-md`,
    button: `ml-2 p-2 px-3 rounded-md bg-blue-600 text-white`,
    toolItem: `bg-gray-100 rounded-full px-3 py-1 m-1 flex items-center justify-center cursor-pointer hover:bg-red-400 hover:text-white`,
}

const Skills = () => {
    const { skills, setSkills } = useContext(AppContext)
    const [newSkill, setNewSkill] = useState("")

    const removeSkill = (index) => {
        let prevSkills = [...skills]

        for (let i = 0; i < prevSkills.length; i++) {
            const element = prevSkills[i];
            if (element === prevSkills[index]) {
                prevSkills.splice(index, 1)
                setSkills(prevSkills)
                return
            }
        }
    }

    return <div className={styles.editingView}>
        <ViewTitle title="Your skills" subtitle="Tools, languages, skills, and tech you use" />

        <ul className="flex items-center flex-wrap mt-10 px-5">
            {
                skills.map((skill, index) => {
                    return <li key={index} className={styles.toolItem} onClick={() => removeSkill(index)}>
                        <div className="mr-2">&times;</div>
                        {skill}
                    </li>
                })
            }
        </ul>

        {skills.length <= 0 ? <div className="text-center text-gray-500 mt-10">You havent added any skills yet</div> : null}

        <div className="mt-10 px-5">
            <input className={styles.input} autoFocus={true} value={newSkill} onChange={e => setNewSkill(e.target.value)} type="text" placeholder="JavaScript" />
            <button className={styles.button} onClick={() => {
                if (newSkill.trim() === "") return

                setSkills([...skills, newSkill.trim()])
                setNewSkill("")

            }}>Add skill</button>
        </div>
    </div>
}

export default Skills