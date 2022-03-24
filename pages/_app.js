import { AppProvider } from '../context/context'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  console.log('app launched🚀')

  return <AppProvider>
    <Component {...pageProps} />
  </AppProvider>
}

export default MyApp
