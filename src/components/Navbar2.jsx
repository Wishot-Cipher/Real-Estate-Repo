import React,{useState, useEffect, useRef} from 'react';
import { NavLink } from 'react-router-dom';
import logo2 from '../assets/images/logo-1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons'


export const Navbar2 = () => {
  const [active, setActive] = useState(false)
   const ref = useRef(null)

   const showMenu = () => {
    setActive(!active)
  }

   const handleClickOutside = (event) => {
    if ( ref.current && !ref.current.contains(event.target)) {
        setActive(false)
      // alert("cliked");
    }
  } ; 

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () =>{
      document.removeEventListener("mousedown", handleClickOutside)
    }
  
  }, [active])

  const navLinkStyles = ({isActive}) => {
    return {
      fontWeight : isActive ? "bold" : "normal",
      color : isActive ? '#FF5363' : 'rgba(5, 5, 5, 0.7)',
      textDecoration: isActive ? 'none':'none',
    }
  }
 
  return (
    <div className='header'>
        <div className="largeSc">
        <div className='logo'><img src={logo2}height={40} alt="logo"/></div>
        <div className="showmenu" onClick={showMenu}> <FontAwesomeIcon icon={faBarsStaggered} /></div>
        </div>
        <nav className={active ? "slider active" : "slider"} ref={ref}>
            <div className="logoLx"> <img src={logo2} height={40} alt="logo"/></div>
            <ul>
                <li className='menu'> Menu</li>
                <NavLink to="/" onClick={showMenu} style={navLinkStyles}> 
                    <li> Home </li>
                </NavLink>
                <NavLink to="/properties" onClick={showMenu} style={navLinkStyles}>
                    <li>  Properties  </li>
                </NavLink>
                <NavLink to="/about" onClick={showMenu} style={navLinkStyles}> 
                    <li>  About  </li> 
                </NavLink>
                <NavLink to="/contact" onClick={showMenu} style={navLinkStyles}> 
                    <li>  Contact  </li>
                 </NavLink>
                 <NavLink to="/register" onClick={showMenu} style={navLinkStyles}>
                    <li className="lastLink">  Register  </li> 
                 </NavLink>
            </ul>
        </nav>
    </div>
  )
}
