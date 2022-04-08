const GoogleButton = ({ onPressed, icon, label }) => {
    return <p onClick={onPressed} className="bg-light border-dark hover:opacity-70 flex items-center justify-center cursor-pointer font-bold border rounded-md px-3 py-1">
        <img src={icon} className="w-10" />
        {label}
    </p>
}

export default GoogleButton