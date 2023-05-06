import {Route, Routes} from "react-router-dom"
import './Main.css'
import { Login } from './screens/login';
import { Home } from './screens/home';
import { Navbar2 } from './components/Navbar2';
import { SearchForm } from "./components/searchForm";
import { BuySearchForm } from "./components/buySearchform";

function App() {
  return (
    <>
     {/* <NavbarComp /> */}
     <Navbar2 />
     <Routes> 
       <Route path='/' element={<Home />}> 
          <Route index element={<SearchForm />} />
          <Route path="sale" element={<SearchForm />} />
          <Route path="buy" element={<BuySearchForm />}/>
       </Route>
       <Route path='/register' element={< Login/>}></Route>
    </Routes>
    </>
  )
}

export default App
