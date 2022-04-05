// import { useContext, useEffect } from "react";
// import LoginComponent from "../components/auth/loginComponent";
// import SignupComponent from "../components/auth/signupComponent";
// import EditView from "../components/editView";
// import SideNav from "../components/side-nav/sideNav";
// import { mainLayoutStyles } from "../components/styles/mainLayoutStyles";
// import { AppContext } from "../context/context";

import Edit from "./edit";

// export default function Home() {
//   const { isAuthenticated, showLogin, readDataFromStorage } = useContext(AppContext)

//   useEffect(() => {
//     if (isAuthenticated) readDataFromStorage()
//   }, [isAuthenticated])

//   if (!isAuthenticated && showLogin) return <LoginComponent />
//   if (!isAuthenticated && !showLogin) return <SignupComponent />

//   else return <div className={mainLayoutStyles.main}>
//     <SideNav />
//     <div className={mainLayoutStyles.mainContentView}>
//       <EditView />
//     </div>
//   </div>
// }

export default function Home() {
  return <Edit />
}