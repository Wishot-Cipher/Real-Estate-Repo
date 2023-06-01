import React, {useState} from 'react'
import { Container } from 'react-bootstrap'
import profileDetailImage2 from "../../assets/images/me.jpg"
import { BuySearchForm } from '../home Components/buySearchForm'

export const PropertyDetailsOverview = ({setData, properties}) => {
    const [visibleNum, setVisibleNum] = useState(true)
   const handelNumVisible= () => { 
        setVisibleNum(!visibleNum)
    }

  return (
    <>
      <Container> 
        <div className="detailHeaderCont">
            <div className="detailHeader">
               <div className="headerFlex"><h4>{properties.property_name}</h4><button className="featured">{properties.featured}</button> </div>
               <h6>{properties.property_location}</h6>
            </div>    
            <div className="detailPrice">
            {properties.market_option ==="For Rent"? <h4 className='marketPrice'>${properties.market_price.toLocaleString()}/mo </h4> : <h4 className='marketPrice'>${properties.market_price.toLocaleString()} </h4>}
            </div> 
        </div>
        <div className="detailBodycont">
            <div className="detailBodyContDivHouse">
                <div className="propDetailOverview">
                    <div className="propdetailSubSection">
                        <h6>{properties.property_type}</h6>
                        <h6>Beds: {properties.Bed}</h6>
                        <h6>Baths: {properties.Bath}</h6>
                        <h6>{properties.Sqft} Sqft</h6>
                    </div>
                    <h4>Overview</h4>
                    <div>
                        {properties.overview_body}
                    </div>
                </div>
                <div className="details">
                    <h5>Details</h5>
                    <div className="detailsFlex">
                        <div className="detailFlexLeft">
                            <div><h6>Lot area (sqft):</h6> <h6>{properties.Details.Lot_area}  sqft</h6>  </div>
                            <div><h6>Lot dimensions (sqft):</h6> <h6> {properties.Details.lot_dimension}☓100</h6>  </div>
                            <div><h6>Beds:</h6> <h6> {properties.Bed}</h6>  </div>
                            <div><h6>Garages:</h6> <h6> {properties.Details.garages}</h6> </div>
                            <div><h6>Year built:</h6> <h6> {properties.Details.Year_built}</h6> </div>
                        </div>
                        <div className="detailFlexRight">
                            <div><h6>Home area (sqft):</h6> <h6> {properties.Sqft}sqft</h6>  </div>
                            <div><h6>Rooms:</h6> <h6> {properties.Details.Rooms}</h6>  </div>
                            <div><h6>Baths:</h6> <h6> {properties.Bath}</h6>  </div>
                            <div><h6>Price ($):</h6> {properties.market_option ==="For Rent"? <h6>${properties.market_price.toLocaleString()}/mo </h6> : <h6>${properties.market_price.toLocaleString()} </h6>}  </div>
                            <div><h6>Status:</h6> <h6> {properties.market_option}</h6>  </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="detailContactform">
                <div className='detailContatDivHouse'>
                   <h4>Contact Agent {properties.agent_name}</h4>
                   <div className="agentContactDetails">
                        <div className="DetailprofileImage">
                            <img src={profileDetailImage2} alt="" />
                        </div>
                        <div className="emailContact"> 
                           <h6>Agent {properties.agent_name}</h6>
                           <h6>{visibleNum? "0803****309 ": "080-3834-309 "} 
                               <button onClick={handelNumVisible}>{visibleNum? "Show": "Hide"}</button>
                           </h6>
                           <h6>agent@apus.com</h6>
                        </div>
                    </div>
                    <form action="">
                        <input type="text"  placeholder='Name'/>
                        <input type="email" name="email" id="email" placeholder='E-mail'/>
                        <input type="number" name="number" id="number" placeholder='Phone' />
                        <input type="text"  placeholder='Property Special Code'/>
                        <textarea name="Message" id="message" cols="30" rows="10"></textarea>
                    </form>
                </div>
                <div className="latestprop">
                  <marquee behavior="" direction="left">
                       ...This will Feach You Both Properties Which Are For Sell And For Rent
                  </marquee>
                    <BuySearchForm setData={setData}/>
                </div> <br />
            </div>
        </div>
      </Container>
    </>
  )
}
