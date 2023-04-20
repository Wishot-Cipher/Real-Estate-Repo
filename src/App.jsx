import { useState } from 'react'
import Container from 'react-bootstrap/Container';
import './Main.css'
import BrandExample from './components/Navber'
import { SearchForm } from './components/searchForm';

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
   
   </>
  )
}

export default App
