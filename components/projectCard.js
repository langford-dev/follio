import { useContext } from "react";
import { AppContext } from "../context/context";

const ProjectCard = ({ thumbnail, name, link, description, editMode, index }) => {

    const { projects, setProjects } = useContext(AppContext)

    const removeProject = (index) => {
        let prevProjects = [...projects]

        for (let i = 0; i < prevProjects.length; i++) {
            const element = prevProjects[i];
            if (element === prevProjects[index]) {
                prevProjects.splice(index, 1)
                setProjects(prevProjects)
                return
            }
        }
    }

    return <li className="w-full mb-10">
        {editMode ? <div onClick={() => removeProject(index)} className="text-red-600 mb-3 cursor-pointer hover:opacity-50">Delete &times;</div> : <></>}
        {
            thumbnail && thumbnail ?
                <img src={thumbnail} className="bg-gray-100 w-full h-60 object-cover rounded-md" />
                : <></>
        }
        <p className="font-bold mt-5">{name}</p>
        <p className="my-1">{description}</p>
        <a href={link} target="_blan,k" rel="noreferrer" className="text-blue-600">{link}</a>
    </li>
}

export default ProjectCard