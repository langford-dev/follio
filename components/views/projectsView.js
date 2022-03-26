import ViewTitle from "../viewTitle"

const styles = {
    editingView: `w-screen sm:w-1/2 p-10 -mt-5 sm:mt-0 px-5 sm:border-l pb-56 pt-24 sm:pt-0 bg-white sm:p-10 sm:pt-5`,
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