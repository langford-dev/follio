const styles = {
    featureCard: `hover:bg-mid bg-white p-10 w-full flex items-center justify-center flex-col rounded-md`,
    featureIcon: `block mb-6 text-5xl bg-mid p-3 rounded-full`,
}

const UpdateFeature = ({ label, soon = false, working = false, icon }) => {
    return <div className="m-2">
        <div className={styles.featureCard}>
            <div className={styles.featureIcon}>{icon}</div>
            <p className="text-xl text-center">{label}</p>
            {soon ? <p className="opacity-50">Coming soon</p> : <></>}
            {working ? <p className="opacity-50 text-brand">In progress</p> : <></>}
        </div>
    </div>
}

export default UpdateFeature