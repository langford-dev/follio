const styles = {
    preview: `border-l w-1/2 p-10 border-r`,
}

const Preview = () => {
    return <div className={styles.preview}>
        <div className="w-48 h-48 m-auto bg-gray-100 rounded-full" />
        <p className="font-bold text-center text-2xl my-5">Langford Quarshie</p>
    </div>
}

export default Preview