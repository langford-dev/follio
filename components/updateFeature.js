const styles = {
    featureCard: `hover:bg-mid bg-light relative block p-10 w-max flex items-center justify-center flex-col rounded-md m-3 ml-0`,
    featureIcon: `block mb-6 text-3xl bg-mid p-3 rounded-full`,
}

const UpdateFeature = ({ label, icon }) => {
    return <div className={styles.featureCard}>
        <div className={styles.featureIcon}>{icon}</div>
        {label}
    </div>
}

export default UpdateFeature