import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';
import logo2 from '../assets/images/logo-1.png'

export const Navbar2 = () => {
  const [active, setActive] = useState(false)

  const showMenu = () => {
     setActive(!active)
  }

  const navLinkStyles = ({isActive}) => {
    return {
      fontWeight : isActive ? "bold" : "normal",
      color : isActive ? '#FF5A5F' : 'black',
      textDecoration: isActive ? 'none':'none',
    }
  }
 
  return (
    <div className='header'>
        <div className="largeSc">
        <div className='logo'><img src={logo2}height={40} alt="logo"/></div>
        <div className="showmenu" onClick={showMenu}>{active ? "+" : "=" }</div>
        </div>
        <nav className={active ? "slider active" : "slider"}>
            <div className="logoLx"> <img src={logo2} height={40} alt="logo"/></div>
            <ul>
                <li>
                    <NavLink to="/" onClick={showMenu} style={navLinkStyles}>Home </NavLink>
                </li>
                <li>
                    <NavLink to="/members" onClick={showMenu} style={navLinkStyles}>Members </NavLink>
                </li>
                <li>
                    <NavLink to="/about" onClick={showMenu} style={navLinkStyles}> About </NavLink>
                </li>
                <li>
                    <NavLink to="/contact" onClick={showMenu} style={navLinkStyles}> Contact </NavLink>
                </li>
                <li>
                    <NavLink to="/register" onClick={showMenu} style={navLinkStyles}>Register </NavLink>
                </li>
            </ul>
        </nav>
    </div>
  )
}
