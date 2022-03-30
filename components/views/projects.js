import { useContext, useState } from "react"
import { AppContext } from "../../context/context"
import Button from "../button"
import GhostButton from "../ghostButton"
import ProjectCard from "../projectCard"
import ViewTitle from "../viewTitle"
import { styles } from "./styles"

const Projects = () => {
    const { projects, setProjects, uploadImage, setShowLoader, showProjectModal, setShowProjectModal } = useContext(AppContext)

    const Modal = () => {
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
                    thumbnail: await uploadImage(thumbnailFile),
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

        return <div className="flex items-center justify-center fixed inset-0 z-50 bg-black bg-opacity-0 backdrop-blur-md">
            <div className="bg-white rounded-md w-11/12 sm:max-w-lg border-2 border-black">
                <p className="font-extrabold text-2xl border-b p-5">Add new project</p>

                <div className={styles.editMainWrapper}>
                    <div className={styles.inputContainer}>
                        <label className={styles.label}>Project name</label>
                        <input value={name} className={styles.input} onChange={e => setName(e.target.value)} />
                    </div>

                    <div className={styles.inputContainer}>
                        <label className={styles.label}>Project link</label>
                        <input value={link} className={styles.input} onChange={e => setLink(e.target.value)} />
                    </div>

                    <div className={styles.inputContainer}>
                        <label className={styles.label}>Project Description</label>
                        <p className="opacity-50 mb-3">Talk a bit about your project</p>
                        <textarea value={description} className={styles.input} onChange={e => setDescription(e.target.value)} />
                    </div>

                    <div className={styles.inputContainer}>
                        <label className={styles.label}>Project thumbnail</label>
                        <p className="opacity-50 mb-3">Upload an image of your project. Could be a screenshot of it</p>
                        <input accept="image/*" className={styles.input} type="file" onChange={e => setThumbnailFile(e.target.files[0])} />
                    </div>
                </div>

                <div className="w-full mt-5 p-5 flex justify-start">
                    <Button label="Add project" onPress={() => addProject()} />
                    <GhostButton label="Cancel" onPress={() => setShowProjectModal(false)} />
                </div>
            </div>
        </div>
    }

    return <div className={styles.editMain}>
        <ViewTitle title="Your projects" subtitle="What cool project have you worked on?" />

        <div className={styles.editMainWrapper}>
            <ul>
                {
                    projects.map((project, index) => {
                        return <ProjectCard editMode={true} key={index} index={index} description={project.description} thumbnail={project.thumbnail} name={project.name} link={project.link} />
                    })
                }
            </ul>

            {projects.length <= 0 ? <div className="text-center text-gray-500 p-10 mt-10">You dont have any projects yet</div> : null}

            <Button label="Add a project" onPress={() => setShowProjectModal(true)} />

            {showProjectModal ? <Modal /> : null}
        </div>
    </div>
}

export default Projects