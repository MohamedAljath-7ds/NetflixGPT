import { useState } from "react"
import Header from "./Header"


const Login = () => {
  const[isSignInForm, setIsSignInForm] = useState(true);
  const toggle = () => {
    setIsSignInForm(!isSignInForm);
  }

  return (
    <div>
        <Header/>
        <form className="absolute w-3/12 mx-auto right-0 left-0 my-[200px] bg-black p-4 m-2 rounded-md bg-opacity-85 bg-gradient-to-b ">
          <h1 className="text-3xl text-white m-4 p-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
          {!isSignInForm && 
          <input type="text" placeholder="Full name" className="p-3  my-2 w-64 mx-10 rounded-md   bg-gray-800 text-white" />
          }
          <input type="text" placeholder="Email Address" className="p-3  my-2 w-64 mx-10 rounded-md   bg-gray-800 text-white" />
          <input type="password" placeholder="Password" className="p-3 mx-10 my-2 w-64 rounded-md  text-white bg-gray-800 "/>
          <button className="w-64 p-2 mx-10 my-2 bg-red-700 text-white rounded-md">{isSignInForm ? "Sign In" : "Sign up"}</button>
          <p className="text-white p-2 m-2 cursor-pointer" onClick={toggle}>{isSignInForm ? "New to Netflix Sign up Now" : "Already a member Sign In"}.</p>
        </form>
    </div>
  )
}

export default Login