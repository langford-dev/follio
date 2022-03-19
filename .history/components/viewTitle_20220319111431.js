const ViewTitle = ({title,subtitle,}) => {
    return <div>
        <div className={styles.pageTitleView}>
            <p className={styles.title}>Intro.</p>
            <p className={styles.textButton}>Next &rarr;</p>
        </div>
        <p className="mt-3 mb-5">Tell visitors about you, what you do, and who you are.</p>
    </div>
}

export default ViewTitle