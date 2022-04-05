import { SessionProvider } from "next-auth/react"
import { AppProvider } from '../context/context'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  return (
    <SessionProvider session={pageProps.session}>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </SessionProvider>
  )
}

export default MyApp
