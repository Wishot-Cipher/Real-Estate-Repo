import {Route, Routes} from "react-router-dom"
import './Main.css'
import { Login } from './screens/login';
import { Home } from './screens/home';
import { Navbar2 } from './components/Navbar2';
import { BuySearchForm } from "./components/home Components/buySearchForm";
import { RentSearchForm } from "./components/home Components/rentSearchform";
import { Footer } from "./components/footer";
import { Properties } from "./screens/properties";
import { About } from "./screens/about";
import { PropertyDetails } from "./screens/propertyDetails";
import useFeach from './components/useFeach'

function App() {
  const { data : posts , loading, setData} = useFeach("http://localhost:8000/posts");

  return (
    <>
     {/* <NavbarComp /> */}
   <Navbar2 />
     <Routes> 
       <Route path='/' element={<Home />}> 
          <Route index element={<BuySearchForm />}/>
          <Route path="buy" element={<BuySearchForm  setData={setData}/>}/>
          <Route path="rent" element={<RentSearchForm />} />
       </Route>
       <Route path="/properties" element={<Properties />}></Route>
       <Route path="/about" element={<About />}></Route>
       <Route path='/register' element={< Login/>}></Route>
       <Route path='/properties/:id' element={<PropertyDetails />}></Route>
    </Routes>
    <Footer />
    </>
  )
}

export default App
