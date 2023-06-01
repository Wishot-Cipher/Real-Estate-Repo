import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { PropertiesList } from './propertiesList'
import { BuySearchForm } from '../home Components/buySearchForm'



export const Property = ({posts, setData}) => {

  const handleReset = () =>{
    axios.get("https://real-eastate-json-server.onrender.com/posts?_sort=market_price")
    .then((response) => {
      console.log(response.data);
      setData(response.data);
    }) .catch((err) => console.log(err));
  }
  return (
    <div>
        <div className="propertiesHeader">
              <div className="headerLinks"> <h6> <Link to={"/"}> Home</Link> </h6>  {">"} <h6 className='activeLink' onClick={handleReset}> Properties-List</h6> </div>
               <div className="saveSearch">
                <h6> Save Searches</h6>
              </div>
            </div>
              <h3 className='headName'>Properties</h3>
            <div className="propertiesContainer">
                <div className="latestprop">
                  <marquee behavior="" direction="left">...This will Feach You Both Properties Which Are For Sell And For Rent</marquee>
                    <BuySearchForm setData={setData} />
                </div>
                <div className='propertyList'>
                <PropertiesList posts={posts} />
                </div>
            </div>
    </div>
  )
}
