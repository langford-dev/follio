import { useEffect, useState } from "react"
import DefaultTheme from "../components/themes/defaultTheme"
import Style1 from "../components/themes/style1"

const Username = () => {
    const [data, setData] = useState()
    const [exists, setExists] = useState(true)
    const [username, setUsername] = useState()

    useEffect(() => {
        setUsername((window.location.pathname).replace("/", ""))
        console.log((window.location.pathname).replace("/", ""))
        getData()
    }, [data, exists])

    const getData = async () => {

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/user/get-user-by-username/${username}`, { method: "GET" })
            const data = await res.json()

            console.log('user', data)

            if (data.status === false) {
                setExists(false)
                return
            }

            if (res.status !== 200 || data.status === false) {
                setExists(false)
                return
            }

            setData(data.payload)

        } catch (e) {
            console.log(e.message)
        }
    }

    if ((data && data) && data.theme == 1) return <DefaultTheme data={data} />
    if ((data && data) && data.theme == 2) return <Style1 data={data} />

    return <DefaultTheme data={data} />
}

export default Username
