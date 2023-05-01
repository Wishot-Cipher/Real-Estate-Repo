import React from 'react'
import NavbarComp from '../components/Navber';
import { SearchForm } from '../components/searchForm';

export const Home = () => {
  return (
        <div className="navback">
            <div className="overlay"> 
            {/* <NavbarComp />       */}
                <div className="text">
                    <div className='homeText'> 
                     <h1> Your Property, Our Priority.</h1>
                     <p>From as low as $10 per day with limited time offer discont</p>
                    </div>
                    <div>
                    <button className='button1'>Rent</button> 
                    <button className='button2'>Buy</button>
                    </div>
                    <SearchForm />
                </div>
            </div>
          </div>
  )
}
