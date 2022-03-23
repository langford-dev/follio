import { useContext, useEffect } from 'react'
import { AppContext, AppProvider } from '../context/context'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  // const { readDataFromStorage } = useContext(AppContext)

  console.log('app launched🚀')

  // useEffect(() => {
  //   readDataFromStorage()
  // }, [])

  return <AppProvider>
    <Component {...pageProps} />
  </AppProvider>
}

export default MyApp
