import {Route, Routes} from "react-router-dom"
import './Main.css'
import { Login } from './screens/login';
import { Home } from './screens/home';
import { Navbar2 } from './components/Navbar2';
import { BuySearchForm } from "./components/home Components/buySearchForm";
import { RentSearchForm } from "./components/home Components/rentSearchform";
import { Footer } from "./components/footer";

function App() {
  return (
    <>
     {/* <NavbarComp /> */}
   <Navbar2 />
     <Routes> 
       <Route path='/' element={<Home />}> 
          <Route index element={<BuySearchForm />} />
          <Route path="buy" element={<BuySearchForm />}/>
          <Route path="rent" element={<RentSearchForm />} />
       </Route>
       <Route path='/register' element={< Login/>}></Route>
    </Routes>
    <Footer />
    </>
  )
}

export default App
