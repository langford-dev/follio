import { useContext, useState } from "react"
import { AppContext } from "../../context/context"
import ViewTitle from "../viewTitle"

const styles = {
    editingView: `w-1/2 p-10 border-l`,
    input: `border p-2 outline-none mt-2 w-5/12 rounded-md`,
    button: `ml-2 p-2 px-3 rounded-md bg-blue-600 text-white`,
    toolItem: `bg-gray-100  rounded-full px-3 py-1 m-1 flex items-center justify-center cursor-pointer hover:bg-red-400 hover:text-white`,
}

const SkillsView = () => {
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
        <ViewTitle title="Your skills" subtitle="Tools, languages, software, and tech you use" />

        <ul className="flex items-center flex-wrap">
            {
                skills.map((skill, index) => {
                    return <li key={index} className={styles.toolItem} onClick={() => removeSkill(index)}>
                        <div className="mr-2">&times;</div>
                        {skill}
                    </li>
                })
            }
        </ul>

        <div className="mt-20">
            <input className={styles.input} autoFocus={true} value={newSkill} onChange={e => setNewSkill(e.target.value)} type="text" placeholder="Skill" />
            <button className={styles.button} onClick={() => {
                if (newSkill.trim() === "") return

                setSkills([...skills, newSkill.trim()])
                setNewSkill("")
                console.log(skills)
            }}>Add skill</button>
        </div>
    </div>
}

export default SkillsView