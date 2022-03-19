const IntroView = () => {
    return <div className={styles.editingView}>
        <ViewTitle title="Intro" subtitle="Tell visitors about you, what you do, and who you are." />

        <div className={styles.inputContainer}>
            <label className={sty.label}>👋 Your name</label>
            <input type="text" className={styles.input} />
        </div>
        <div className={styles.inputContainer}>
            <label className={styles.label}>💡 Title</label>
            <input type="text" className={styles.input} />
        </div>
        <div className={styles.inputContainer}>
            <label className={styles.label}>✏️ About you</label>
            <textarea type="text" className={styles.textArea} />
        </div>
    </div>
}

export default IntroView