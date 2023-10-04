import { useRef } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import { Link } from "react-router-dom"
import "../styles/main.css"

const Navbar = () => {
    const navRef = useRef()

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }

    const handleLogout = () => {
        window.localStorage.clear() 
    }

    return (
      <div>
        <header>
            <nav ref={navRef}>
                <Link to="/"> Natty or Not </Link>
                <Link to="/profile"> Profile </Link>
                <Link to="/posts"> All Posts </Link>
                <Link to="/upload"> Upload Picture </Link>
                <Link to="/login" onClick={handleLogout}> Logout </Link>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes/>
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
      </div>
    );
  }
  
  export default Navbar