import { useEffect, useState } from "react"
import Style1 from "../components/themes/style1"
import Style2 from "../components/themes/style2"

const Username = () => {
    const [data, setData] = useState()
    const [exists, setExists] = useState(true)
    const [username, setUsername] = useState()

    useEffect(() => {
        setUsername((window.location.pathname).replace("/", ""))
        getData()
    }, [data, exists])

    const getData = async () => {

        try {

            const res = await fetch(`https://folio-backend-server.herokuapp.com/user/get-user/${username}`, { method: "GET" })
            const data = await res.json()

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

    if ((data && data) && data.theme == 1) return <Style1 data={data} exists={exists} />
    if ((data && data) && data.theme == 2) return <Style2 data={data} exists={exists} />

    return <Style1 data={data} exists={exists} />
}

export default Username
