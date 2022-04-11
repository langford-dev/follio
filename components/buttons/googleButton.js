const GoogleButton = ({ onPressed, icon, label }) => {
    return <p onClick={onPressed} className="bg-light select-none text-dark border-dark hover:opacity-70 flex items-center justify-center cursor-pointer font-bold border rounded-full px-3 py-2 w-max m-auto">
        <img src={icon} className="w-10 rounded-full mr-3" />
        {label}
    </p>
}

export default GoogleButton