// import { useState, useContext, useEffect } from "react"
// import Header from '../components/header'
// import GoogleLogin from 'react-google-login';
// import { useGoogleLogin } from 'react-google-login'
// import Sawo from 'sawo';
// import { AppContext } from "../context/context";

import { useContext } from "react";
import Login from "../components/auth/login";
import SignUp from "../components/auth/signup";
import Header from "../components/header";
import { AppContext } from "../context/context";

const styles = {
  title: `text-3xl font-bold`,
}

// export default function Home() {
//   const { toggleIsAuthenticated, isAuthenticated } = useContext(AppContext)

//   useEffect(() => {

//     // toggleIsAuthenticated(true)
//     console.log('isAuthenticated >> ', isAuthenticated)

//     setTimeout(() => {
//       if (!isAuthenticated) {
//         try {
//           var config = {
//             containerID: "sawo-container",
//             identifierType: "email", //phone_number_sms or email
//             apiKey: "208b37e6-3a64-431a-9910-aaa65676c3fc",
//             onSuccess: () => toggleIsAuthenticated(true)
//           }
//           let sawo = new Sawo(config)
//           sawo.showForm()
//         } catch (e) {
//           console.log(e)
//         }
//       }
//     }, 3000)

//   }, [isAuthenticated])

//   // if (isAuthenticated) return <div>
//   //   <Header />
//   //   <div className='mt-20 p-10 max-w-screen-xl m-auto border border-t-0'>
//   //     <p className={styles.title}>Dashboard</p>
//   //     <p>View your statistics, clicks and engagement</p>
//   //   </div>
//   // </div>

//   // if (!isAuthenticated) return <div className="w-screen h-screen flex flex-col items-center justify-center">
//   //   <p className="font-bold text-3xl">Heyooo 👋 Let's get started</p>
//   //   <div id="sawo-container" className={isAuthenticated ? "hidden" : "block"} style={{ height: "300px", width: "400px" }}></div>
//   // </div>

//   // langfordquarshie21@gmail.com
//   const clientId = "489414089899-l4525e5gj8ur5avcroh6j1oru5g6k0av.apps.googleusercontent.com"
//   // let isSignedIn = true
//   // let redirectUri = "https://follio.vercel.app"

//   // const { signIn, loaded } = useGoogleLogin({
//   //   clientId,
//   //   isSignedIn,
//   //   redirectUri
//   // })

//   // signIn()

//   const responseGoogle = (e) => {
//     console.log('responseGoogle', e)
//     // toggleIsAuthenticated(true)
//   }

//   if (!isAuthenticated) return <div className="w-screen h-screen flex flex-col items-center justify-center">
//     <p className="font-bold text-3xl mb-5">Heyooo 👋 Lets get started</p>
//     <p className="mb-10">Login to your account</p>
//     <div id="sawo-container" style={{ backgroundColor: "#f1f1f1", borderRadius: "10px", height: "300px", width: "400px" }}></div>
//   </div>

//   // if (!isAuthenticated) return <GoogleLogin
//   //   clientId="489414089899-l4525e5gj8ur5avcroh6j1oru5g6k0av.apps.googleusercontent.com"
//   //   buttonText="Login with Google"
//   //   onSuccess={responseGoogle}
//   //   onFailure={responseGoogle}
//   //   cookiePolicy={'single_host_origin'}
//   // />

// else return <div>
//   <Header />
//   <div className='mt-20 p-10 max-w-screen-xl m-auto border border-t-0'>
//     <p className={styles.title}>Dashboard</p>
//     <p>View your statistics, clicks and engagement</p>
//   </div>
// </div>
// }



export default function Home() {
  const { isAuthenticated, showLogin } = useContext(AppContext)

  if (!isAuthenticated && showLogin) return <Login />
  if (!isAuthenticated && !showLogin) return <SignUp />

  else return <div>
    <Header />
    <div className='mt-20 p-10 max-w-screen-xl m-auto border border-t-0'>
      <p className={styles.title}>Dashboard</p>
      <p>View your statistics, clicks and engagement</p>
    </div>
  </div>
}