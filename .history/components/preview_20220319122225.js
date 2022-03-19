const styles = {
    preview: `border-l w-1/2 p-10 border-r`,
}

const Preview = () => {
    return <div className={styles.preview}>
        <div className="w-48 h-48 m-auto bg-gray-100 rounded-full" />
        <p className="font-bold text-center text-2xl my-5">Langford Quarshie</p>
        <p className="text-center">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word</p>
    </div>
}

export default Preview