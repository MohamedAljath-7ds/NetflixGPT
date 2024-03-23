import { NETFLIX_URL_IMG } from "../utils/netflixurl"


const Header = () => {
  return (
    <div>
        <img src={NETFLIX_URL_IMG} alt="logo" className="w-48 py-2 mx-6 my-2 bg-gradient-to-b from black absolute z-20"/> 
    </div>
  )
}

export default Header