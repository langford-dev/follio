const styles = {
    preview: `border-l w-1/2 p-10 border-r`,
}

const Preview = () => {
    return <div className={styles.preview}>
        <div className="w-30 h-30 bg-gray-100 rounded-full"></div>
    </div>
}

export default Preview