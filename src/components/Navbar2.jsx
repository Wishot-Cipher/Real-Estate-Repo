import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';
import logo2 from '../assets/images/logo-1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons'

export const Navbar2 = () => {
  const [active, setActive] = useState(false)

  const showMenu = () => {
     setActive(!active)
  }

  // const element = <FontAwesomeIcon icon={faBars} />


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
        <div className="showmenu" onClick={showMenu}>{active ? <FontAwesomeIcon icon={faXmark} />: <FontAwesomeIcon icon={faBarsStaggered} />}</div>
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
