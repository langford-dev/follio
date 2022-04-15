import { useEffect, useState } from "react"
import Loader from "../components/loader"
import DefaultTheme from "../components/themes/defaultTheme"
import Style1 from "../components/themes/style1"
import Style3 from "../components/themes/style3"

const Username = () => {
    const [data, setData] = useState()
    const [exists, setExists] = useState(true)
    const [loading, setLoading] = useState(true)
    const [username, setUsername] = useState()

    useEffect(() => {
        setUsername((window.location.pathname).replace("/", ""))
        console.log((window.location.pathname).replace("/", ""))
        getData()
    }, [username])

    const getData = async () => {

        try {

            setLoading(true)

            const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/user/get-user-by-username/${username}`, { method: "GET" })
            const data = await res.json()

            if (res.status !== 200 || data.error || data.status === false) {
                setTimeout(() => {
                    setLoading(false)
                    setExists(false)
                }, 3000);
                return
            }

            setData(data.payload)
            setLoading(false)

        } catch (e) {
            setLoading(false)
            console.log(e.message)
        }
    }

    if ((data && data) && data.theme == 1) return <DefaultTheme data={data} />
    if ((data && data) && data.theme == 2) return <Style1 data={data} />
    if ((data && data) && data.theme == 3) return <Style3 data={data} />

    if (loading) return <Loader />

    if (!exists) return <div className="w-screen h-screen flex flex-col items-center justify-center">
        <p className="sm:text-3xl text-2xl">Oops! site has no owner {data}</p>
        <a href="https://follio.app">
            <p className="mt-5 bg-dark hhover:opacity-50 p-3 px-4 text-light rounded-full">Claim this domain</p>
        </a>
    </div>

    return <></>

    // if ((data && data) && !exists) return <div>{data.status}</div>

    // return <div>{
    //     (data && data) && loading ?
    //         <p>Loading</p>
    //         :

    // }</div>

    // return <DefaultTheme data={data} />
}

export default Username
