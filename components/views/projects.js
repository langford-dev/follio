import { useContext, useState } from "react"
import { AppContext } from "../../context/context"
import Button from "../buttons/button"
import GhostButton from "../buttons/ghostButton"
import ProjectCard from "../projectCard"
import { editLayoutStyles } from "../styles/editLayoutStyles"
import ViewTitle from "../viewTitle"
// import { styles } from "./styles"

const Projects = () => {
    const { projects, showProjectModal, setShowProjectModal } = useContext(AppContext)



    return <div className={editLayoutStyles.main}>
        <ViewTitle title="Your projects" subtitle="What cool project have you worked on?" />
        <br />
        <Button label="Add a project" action={() => setShowProjectModal(true)} />

        <div className={editLayoutStyles.mainWrapper}>
            <ul>
                {
                    projects.map((project, index) => {
                        return <ProjectCard editMode={true} key={index} index={index} description={project.description} thumbnail={project.thumbnail} name={project.name} link={project.link} />
                    })
                }
            </ul>

            {projects.length <= 0 ? <div className="text-center text-gray-500 p-10 mt-10">You dont have any projects yet</div> : null}


            {showProjectModal ? <ProjectModal /> : null}
        </div>
    </div>
}

const ProjectModal = () => {
    const { projects, setProjects, uploadFile, setShowLoader, setShowProjectModal } = useContext(AppContext)
    const [name, setName] = useState("")
    const [link, setLink] = useState("")
    const [description, setDescription] = useState("")
    const [thumbnailFile, setThumbnailFile] = useState("")

    const addProject = async () => {
        if (name.trim() === "") return
        if (!thumbnailFile && thumbnailFile) return

        setShowLoader(true)

        try {
            let newProject = {
                name: name,
                link: link,
                description: description,
                thumbnail: await uploadFile(thumbnailFile),
            }

            console.log('newProject >', newProject)

            setProjects([...projects, newProject])
            setShowProjectModal(false)
            setShowLoader(false)
        }

        catch (e) {
            console.log(e.message)
            setShowLoader(false)
        }
    }

    return <div className="flex items-center justify-center fixed inset-0 z-50 bg-dark bg-opacity-30 backdrop-blur-md">

        {/* <div className="bg-light rounded-md w-screen h-screen overflow-y-scroll"> */}
        {/* <div className="bg-light rounded-md w-11/12 sm:max-w-lg border border-dark overflow-y-scroll"> */}
        {/* <div className="bg-light rounded-md w-11/12 sm:max-w-lg border border-dark overflow-y-scroll"> */}

        <div className="bg-white sm:h-max sm:w-max w-screen h-screen overflow-y-scroll rounded-lg">
            <p className="font-extrabold text-2xl border-b px-5 py-5">Add new project</p>

            {/* <div className="p-5 pb-0 h-full overflow-y-scroll"> */}

            <div className="p-5 m-auto">
                {thumbnailFile ? <img src={URL.createObjectURL(thumbnailFile)} alt="" className="w-full h-44 rounded-md object-cover mb-5" /> : <></>}

                <div className={editLayoutStyles.inputContainer}>
                    <label className={editLayoutStyles.label}>Project name</label>
                    <input value={name} className={editLayoutStyles.input} onChange={e => setName(e.target.value)} />
                </div>

                <div className={editLayoutStyles.inputContainer}>
                    <label className={editLayoutStyles.label}>Project link</label>
                    <input value={link} className={editLayoutStyles.input} onChange={e => setLink(e.target.value)} />
                </div>

                <div className={editLayoutStyles.inputContainer}>
                    <label className={editLayoutStyles.label}>Project Description</label>
                    <textarea value={description} placeholder="Talk a bit about your project" className={editLayoutStyles.input} onChange={e => setDescription(e.target.value)} />
                </div>

                <div className={editLayoutStyles.inputContainer}>
                    <label className={editLayoutStyles.label}>Project thumbnail</label>
                    <p className="opacity-50 mb-3">Upload an image of your project. Could be a screenshot of it</p>
                    <input accept="image/*" className={editLayoutStyles.input} type="file" onChange={e => setThumbnailFile(e.target.files[0])} />
                </div>

                <div className="w-full p-5 pl-0 flex justify-start">
                    <Button label="Add project" action={() => addProject()} />
                    <GhostButton label="Cancel" action={() => setShowProjectModal(false)} />
                </div>
            </div>

        </div>
    </div>
}

export default Projects