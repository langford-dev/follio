const styles = {
    preview: `border-l w-1/2 p-10 border-r`,
}

const Preview = () => {
    return <div className={styles.preview}>
        <div className="w-56 h-56 m-auto bg-gray-100 rounded-full"></div>
    </div>
}

export default Preview