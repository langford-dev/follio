import { useContext, useState } from "react"
import { AppContext } from "../context/context"
import Button from "../components/button"
import GhostButton from "../components/ghostButton"
import ProjectCard from "../components/projectCard"
import ViewTitle from "../components/viewTitle"

const styles = {
    editingView: `w-screen sm:w-1/2 p-0 -mt-5 sm:mt-0 sm:border-l pb-56 bg-white`,
    inputContainer: `flex flex-col mt-5 px-5`,
    label: `font-medium`,
    textArea: `border p-2 outline-none mt-2 w-full sm:w-9/12 rounded-md resize-none h-56`,
    input: `outline-none w-full text-black bg-gray-100 border mt-2 p-2 rounded-md`,
}

const Projects = () => {
    const { projects, setProjects, uploadImage, setShowLoader, showProjectModal, setShowProjectModal } = useContext(AppContext)

    const Modal = () => {
        const [name, setName] = useState("")
        const [link, setLink] = useState("")
        const [description, setDescription] = useState("")
        // const [thumbnail, setThumbnail] = useState("")
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

        return <div className="flex items-center justify-center fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-md">
            <div className="bg-white rounded-md w-11/12 sm:max-w-lg border">
                <p className="font-extrabold text-2xl border-b p-5">Add new project</p>

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

                <div className="w-full mt-5 p-5 flex justify-start">
                    <Button label="Add project" onPress={() => addProject()} />
                    <GhostButton label="Cancel" onPress={() => setShowProjectModal(false)} />
                </div>
            </div>
        </div>
    }

    return <div className={styles.editingView}>
        <ViewTitle title="Your projects" subtitle="What cool project have you worked on?" />

        <ul className="mt-10 px-5">
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
}

export default Projects