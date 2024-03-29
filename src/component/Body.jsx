import Login from "./Login"
import Browse from "./Browse"
import {createBrowserRouter} from "react-router-dom"
import { RouterProvider } from "react-router-dom"
import { useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../utils/firebase"
import { Provider, useDispatch } from "react-redux"
import { RemoveUser, addUser } from "../utils/userSlice"
import appStore from "../utils/appstore"


const Body = () => {
 const dispatch = useDispatch()
 const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<Login/>
  },
  {
    path:"/browse",
    element:<Browse/>
  }
 ])

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid, email, displayName} = user;
        dispatch(addUser({uid:uid, email:email, displayName:displayName}));
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(RemoveUser());
      }
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <>
        <RouterProvider router={appRouter}/>
        
    </>
  )
}

export default Body