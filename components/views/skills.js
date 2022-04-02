import { useContext, useState } from "react"
import { AppContext } from "../../context/context"
import ViewTitle from "../viewTitle"
import { styles } from "./styles"
import Button from "../button"

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

    return <div className={styles.editMain}>
        <ViewTitle title="Your skills" subtitle="Tools, languages, skills, and tech you use" />

        <div className={styles.editMainWrapper}>
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

            {
                skills.length <= 0 ?
                    <div className="text-center text-gray-500 mt-10">You havent added any skills yet</div>
                    : null
            }

            <div className="flex items-center flex-wrap mt-10">
                <input className={styles.input} value={newSkill} onChange={e => setNewSkill(e.target.value)} type="text" placeholder="JavaScript" />
                <div className="mt-2 sm:ml-5">
                    <Button label="Add a skill" onPress={() => {
                        if (newSkill.trim() === "") return
                        setSkills([...skills, newSkill.trim()])
                        setNewSkill("")
                    }} />
                </div>
            </div>
        </div>

    </div>
}

export default Skills