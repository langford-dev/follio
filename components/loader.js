const Loader = () => {
    return <div className="w-screen h-screen flex items-center bg-[#1F2937] justify-center fixed left-0 top-0">
        <div className="flex items-center justify-center h-28 w-28 pt-10 overflow-hidden pl-5">
            <svg>
                <path fill="#2563EB" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
                    <animateTransform
                        attributeName="transform"
                        attributeType="XML"
                        type="rotate"
                        dur="1s"
                        from="0 50 50"
                        to="360 50 50"
                        repeatCount="indefinite" />
                </path>
            </svg>
        </div>
    </div>
}

export default Loader