import { useRef, useState } from "react"
import Header from "./Header"
import { BACK_URL } from "../utils/netflixurl";
import { checkValidate } from "../utils/checkvalidation";
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";


const Login = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const[isSignInForm, setIsSignInForm] = useState(true);
  const[errorMessage, setErrorMessage] = useState(null);

  const toggle = () => {
    setIsSignInForm(!isSignInForm);
  }

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleform = () => {
    const message = checkValidate(email.current.value, password.current.value);
    setErrorMessage(message);
    //Authentication
    if(message) return;
    if(!isSignInForm){
       //signup form
        createUserWithEmailAndPassword(auth,email.current.value, password.current.value)
  .then( (userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
      displayName: name.current.value
    }).then(() => {
      // Profile updated!
      // ...
      const {uid, email, displayName} = auth.currentUser;
      dispatch(addUser({uid:uid, email:email, displayName:displayName}));
      navigate("/browse")
    }).catch((error) => {
      // An error occurred
      // ...
      setErrorMessage(error.message)
    });
    console.log(user)
  
    
  
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message; 
    setErrorMessage(errorCode + "-" + errorMessage);
    // ..
  });
      }
      else{
         signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user.displayName);
    navigate("/browse");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage);
  });
      }

  }

  return (
    <div>
        <Header/>
        <form onSubmit={(e) => e.preventDefault()} className="absolute w-3/12 mx-auto right-0 left-0 my-[200px] bg-black p-4 m-2 rounded-md bg-opacity-85 bg-gradient-to-b ">
          <h1 className="text-3xl text-white m-4 p-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
          {!isSignInForm && 
          <input type="text" ref={name} placeholder="Full name" className="p-3  my-3 w-64 mx-10 rounded-md   bg-gray-800 text-white" />
          }
          <input type="text" ref={email} placeholder="Email Address" className="p-3  my-3 w-64 mx-10 rounded-md   bg-gray-800 text-white" />
          <input type="password" ref={password} placeholder="Password" className="p-3 mx-10 my-3 w-64 rounded-md  text-white bg-gray-800 "/>
          <p className="px-11  my-3 text-red-700 font-bold">{errorMessage}</p>
          <button className="w-64 p-3 mx-10 my-10 bg-red-700 text-white rounded-md" onClick={handleform}>{isSignInForm ? "Sign In" : "Sign up"}</button>
          <p className="text-white p-2 m-2 cursor-pointer" onClick={toggle}>{isSignInForm ? "New to Netflix Sign up Now" : "Already a member Sign In"}.</p>
        </form>
        <div className="bg-gradient-to-b from-black">
          <img src={BACK_URL} alt="background"/>  
        </div>
    </div>
  )
}

export default Login