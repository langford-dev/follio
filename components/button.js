const Button = ({ label, onPress }) => {
    return <div className="flex space-x-2 justify-center" onClick={onPress}>
        <button
            type="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium leading-tight rounded hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-500 active:scale-95 active:shadow-lg transition duration-150 ease-in-out"
        >
            {label}</button>
    </div>
}

export default Button