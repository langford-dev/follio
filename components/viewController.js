import { useContext } from "react"
import { AppContext } from "../context/context"

const ViewController = ({ onShowPreview }) => {
    const { next, previous, maxViewCount, viewCount } = useContext(AppContext)

    return <div className="fixed bottom-0 left-0 flex items-center justify-between w-screen bg-gray-50 font-medium p-3 border-t">

        {
            viewCount > 0 ? <p onClick={() => previous()} >&larr; Prev</p> : <div className="hidden"></div>
        }

        <p onClick={onShowPreview} className="bg-white border text-blue-600 px-5 py-2 rounded-full">Show preview</p>

        {
            viewCount < maxViewCount ? <p onClick={() => next()} >Next &rarr;</p> : <div className="hidden"></div>
        }

    </div>
}

export default ViewController