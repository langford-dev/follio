import { useRouter } from "next/router"
import { useContext, useEffect } from "react"
import EditView from "../components/body"
import Header from "../components/header"
import { AppContext } from "../context/context"

const Edit = () => {
    const router = useRouter()
    const { isAuthenticated, readDataFromStorage } = useContext(AppContext)

    useEffect(() => {

        readDataFromStorage()
        if (!isAuthenticated) router.push("/")

    }, [isAuthenticated])


    if (isAuthenticated) return <div>
        <Header />
        <EditView />
    </div>

    return <div></div>
}

export default Edit