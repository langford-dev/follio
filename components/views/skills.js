import { useContext, useState } from "react"
import { AppContext } from "../../context/context"
import ViewTitle from "../viewTitle"
import { styles } from "./styles"
import Button from "../buttons/button"
import { editLayoutStyles } from "../styles/editLayoutStyles"

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

    return <div className={editLayoutStyles.main}>
        <ViewTitle title="Your skills" subtitle="Tools, languages, skills, and tech you use" />

        <div className={editLayoutStyles.mainWrapper}>
            <ul className="flex items-center flex-wrap">
                {
                    skills.map((skill, index) => {
                        return <li key={index} className={editLayoutStyles.toolItem} onClick={() => removeSkill(index)}>
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
                <div>
                    <input list="skiils-list" name="browser" className={editLayoutStyles.input} value={newSkill} onChange={e => setNewSkill(e.target.value)} placeholder="JavaScript" />
                    <datalist id="skiils-list" className="bg-dark" >
                        <option value="📦 HTML" />
                        <option value="💅 CSS" />
                        <option value="✅ NodeJs" />
                        <option value="☘️ MongoDB" />
                        <option value="SQL" />
                        <option value="Postgres" />
                        <option value="MySQL" />
                        <option value="🧠 JavaScript" />
                        <option value="📱 React" />
                        <option value="🌋Angular" />
                        <option value="Vue" />
                        <option value="💾 AWS" />
                        <option value="⚡️ NextJs" />
                        <option value="☁ Google Cloud" />
                        <option value="🎨 UI design" />
                        <option value="UX design" />
                        <option value="🛠 UX and UX" />
                        <option value="📷 Photoshop" />
                        <option value="💨 Tailwind CSS" />
                        <option value="CSS" />
                        <option value="Chakra UI" />
                        <option value="🐳 Docker" />
                        <option value="👨‍💻 Flutter" />
                        <option value="Android" />
                        <option value="iOS" />
                        <option value="Cross-platform apps" />
                    </datalist>
                </div>
                <div className="mt-2 ml-3 sm:ml-5">
                    <Button label="Add a skill" action={() => {
                        if (newSkill.trim() === "") return
                        setSkills([...skills, newSkill.trim()])
                        setNewSkill("")
                    }} />
                </div>
            </div>

            {/* <div className="flex items-center flex-wrap mt-10">
                <input className={editLayoutStyles.input} value={newSkill} onChange={e => setNewSkill(e.target.value)} type="text" placeholder="JavaScript" />
                <div className="mt-2 sm:ml-5">
                    <Button label="Add a skill" action={() => {
                        if (newSkill.trim() === "") return
                        setSkills([...skills, newSkill.trim()])
                        setNewSkill("")
                    }} />
                </div>
            </div> */}
        </div>

    </div >
}

export default Skills