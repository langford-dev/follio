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

    return <div className="p-3 sm:m-2 mb-10 bg-[#dadada0d] rounded-md text-left">
        {
            editMode ?
                <div onClick={() => removeProject(index)} className="text-red-600 mb-3 cursor-pointer hover:opacity-50">
                    Delete &times;
                </div>
                : <></>
        }
        {
            thumbnail && thumbnail ?
                <div className="mb-3">
                    <a href={link} target="_blank" rel="noreferrer" className="text-blue-600">
                        <img src={thumbnail} className="bg-gray-100 border w-full h-60 object-cover rounded-md hover:opacity-50 cursor-pointer transition" />
                    </a>
                </div>
                : <></>
        }
        <p className="font-bold">{name}</p>
        {
            description ?
                <details className="my-3">
                    <summary className="cursor-pointer outline-none">Read more</summary>
                    <p className="my-3">{description}</p>
                </details>
                : <div className="my-3">...</div>
        }
        {
            link ?
                <a href={link} target="_blank" rel="noreferrer" className="text-[#0035ff]">{link}</a>
                : <p>...</p>
        }
    </div>
}

export default ProjectCard