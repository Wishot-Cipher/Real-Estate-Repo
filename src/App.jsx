import { useState } from 'react'
import Container from 'react-bootstrap/Container';
import './Main.css'
import BrandExample from './components/vendors/Navber'
import { SearchForm } from './components/vendors/searchForm';
import { Login } from './components/pages/login';
import { FormInputs } from './components/vendors/formInputs';

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
    <div className="navback">
      <div className="overlay">
          <BrandExample />
          <SearchForm />
      </div>
    </div>
    
    <Login/>
   
   </>
  )
}

export default App
