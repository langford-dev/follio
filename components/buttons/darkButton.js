const DarkButton = ({ label, action }) => {
    return <p onClick={action} className=" p-3 px-5 w-max rounded-full hover:bg-light hover:text-dark bg-[#171f2a] text-light cursor-pointer select-none sm:text-xl">{label}</p>
}

export default DarkButton