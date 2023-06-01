import React, {useState} from 'react'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'
import { Properties } from '../../screens/properties'

export const BuySearchForm = ({setData}) => {
  const [property, setProperty] = useState('property')
  const [location, setLocation] = useState("location")
  const [price, setPrice] = useState("price")

  const navigate = useNavigate()
  

  const handelSubmit = (e) => {  
    e.preventDefault()
        
    axios.get(`https://real-eastate-json-server.onrender.com/posts?_sort=market_price&housetype=${property}&country=${location}&market_price_gte=${price}&market_price_lte=100000`)
    .then((response) => {
      console.log(response.data);
      setData(response.data);
    }) .catch((err) => console.log(err));
    
    if(property, price, location){
      history.push(`/properties/${(property,price,location)}`)
      // history.push({p})
    }
    console.log(`Buying ${property}`);
    console.log(`Buying at ${location}`);
    console.log(`Buying for ${price}`);
    
    // setProperty("property")
    // setLocation("location")
    // setPrice("price")
  }
 
  return (
    <div>
        <form action="" onSubmit={handelSubmit} className="search">
        <select name="Property type" id="Property type" value={property} onChange={(e)=> setProperty(e.target.value)}>
        <option value="property">Property</option>
          <option value="Duplex">Duplex</option>
          <option value="Bungalow">Bungalow</option>
          <option value="Semi-detached">Semi-detached</option>
          <option value="Mansion">Mansion</option>
        </select>

        <select name="location" id="location" value={location} onChange={(e)=>setLocation(e.target.value)}>
        <option value="location">Location</option>
          <option value="Nigeria">Nigeria</option>
          <option value="Ghana">Ghana</option>
          <option value="SouthAfrica">SouthAfrica</option>
          <option value="America">America</option>
        </select>

        <select name="price" id="price" value={price} onChange={(e)=>setPrice(e.target.value)}>
          <option>Price Range</option>
          <option value="1500">$1,500 - $100,000</option>
          {/* <option value="3500">$3,000</option>
          <option value="10000">$10,000</option>
          <option value="15000">$15,000</option>
          <option value="50000">$50,000</option>
          <option value="100000">$100,000</option> */}
        </select>
        <input type="submit" value="Search" onClick={() => navigate("/Properties")} />
        </form>

    </div>
  )
}
