import {Route, Routes} from "react-router-dom"
import './Main.css'
import { Login } from './screens/login';
import { Home } from './screens/home';
import { Navbar2 } from './components/Navbar2';

function App() {
  return (
    <>
     {/* <NavbarComp /> */}
     <Navbar2 />
     <Routes> 
       <Route path='/' element={<Home />}> </Route>
       <Route path='/register' element={< Login/>}></Route>
    </Routes>
    </>
  )
}

export default App
