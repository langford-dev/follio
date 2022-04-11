const Button = ({ label, action }) => {
    return <div className="bg-brand text-light p-2 px-5 cursor-pointer hover:bg-light border w-max    whitespace-nowrap hover:text-dark rounded-md" onClick={action}>
        {label}
    </div>
    {/* <div
            onClick={action}
            // type="button"
            // data-mdb-ripple="true"
            // data-mdb-ripple-color="light"
            className="bg-red-900"
        // className="inline-block px-10 py-3 bg-dark text-white hover:bg-white hover:text-dark border border-dark font-medium leading-tight rounded-lg marker:hover:shadow-lg focus:shadow-2xl focus:outline-none focus:ring-0 active:bg-yellow-500 active:scale-95 active:shadow-lg transition duration-150 ease-in-out whitespace-nowrap"
        // className="inline-block px-6 py-2.5 bg-[#FFFD63] border border-dark font-medium leading-tight rounded-lg hover:bg-white hover:shadow-lg focus:shadow-2xl focus:outline-none focus:ring-0 active:bg-yellow-500 active:scale-95 active:shadow-lg transition duration-150 ease-in-out"
        >
            {label}</div>
    </div> */}
}

export default Button