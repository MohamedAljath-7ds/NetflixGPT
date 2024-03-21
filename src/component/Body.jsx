import Login from "./Login"
import { BACK_URL } from "../utils/netflixurl"

const Body = () => {
  return (
    <>
        <Login/>
        <div>
          <img src={BACK_URL} alt="background" className="bg-gradient-to-b"/>  
        </div>   
    </>
  )
}

export default Body