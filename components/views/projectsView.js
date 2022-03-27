import ViewTitle from "../viewTitle"

const styles = {
    editingView: `w-screen sm:w-1/2 p-0 -mt-5 sm:mt-0 sm:border-l pb-56 bg-white`,
}

const ProjectsView = () => {
    return <div className={styles.editingView}>
        <ViewTitle title="Your projects" subtitle="What cool project have you worked on?" />
        <div className="mt-16">
            <p className="text-2xl text-center">Coming Soon 🐛</p>
        </div>
    </div>
}

export default ProjectsView