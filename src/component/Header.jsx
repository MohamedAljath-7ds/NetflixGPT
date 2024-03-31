import { useSelector } from "react-redux"
import { NETFLIX_URL_IMG } from "../utils/netflixurl"
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";


const Header = () => {

  
  const navigate = useNavigate()
  const user = useSelector((store) => store.User);
  const handleLogout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")
      
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
  }

  return (
  
    <div className="absolute w-full   py-2   bg-gradient-to-b from-black to-transparent z-20 flex justify-between">
        <img src={NETFLIX_URL_IMG} alt="logo" className="w-44"/> 
        {user &&
        <div >
          <p>{user?.displayName}</p>
         <button className="font-bold text-red-700 p-2 m-2 bg-red-800" onClick={handleLogout}>signout</button>
         </div> }
    </div>
  
  )
}

export default Header