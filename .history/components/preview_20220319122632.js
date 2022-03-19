const styles = {
    preview: `border-l w-1/2 p-10 border-r`,
}

const Preview = ({ fullname, work, about }) => {
    return <div className={styles.preview}>
        <div className="w-48 h-48 m-auto bg-gray-100 rounded-full" />
        <p className="font-bold text-center text-2xl my-5">{ }</p>
        <p className="text-center font-bold mb-5">WEB DEVELOPMENT</p>
        <p className="text-center">{about}</p>
    </div>
}

export default Preview