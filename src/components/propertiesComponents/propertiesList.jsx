import React from 'react'
import { Button, Container } from 'react-bootstrap'
import listImage from "../../assets/images/about-bg.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


export const PropertiesList = ({posts}) => {

  return (
    <Container fluid>   
            {
            posts.map((post)=>(
              <div className="contBackground" key={post.id}>
                            <div className="propertyList">
                            <div className='SinglePropCont'>
                                <div className="propImageCont">
                                <img src={post.image} alt="listImage" />
                                </div>
                                <div className="propDetailCont">
                                    <div className="propOptions">
                                        <div className="marketOptCont">
                                            <button className="marketOption"> {post.market_option}</button>
                                            <button className="featured"> {post.featured} </button>
                                        </div>
                                        <div className="marketPrice">
                                        {post.market_option ==="For Rent"? <h4>${post.market_price.toLocaleString()}/mo </h4> : <h4>${post.market_price.toLocaleString()} </h4>}
                                        </div>
                                    </div>
                                    <div className="moreDetail"> 
                                        <p>{post.property_type}</p>
                                        <Link to={`/properties/${post.id}`}>
                                        <h4> {post.property_name}</h4>  </Link>
                                        <p className="location"><i><FontAwesomeIcon icon={faLocationDot}/> </i>  {post.property_location}</p>
                                    </div>
                                      <div className=" forInfo"> 
                                          <p><b>Beds: {post.Bed}</b></p>
                                          <p><b>Baths: {post.Bath}</b> </p>
                                          <p><b>Sqft: {post.Sqft}</b> </p>
                                      </div>
                                      {/* <hr /> */}
                                      <div className="profileCont detailProfile">
                                        <div className="profileImg">
                                          <img src={post.image} alt="" /> <h6>Agent {post.agent_name}</h6>
                                        </div>
                                        <div className="datePosted"> <h6> {post.date_posted}</h6></div>
                                      </div>
                                </div>
                            </div>
                        </div>
                        <div className="secondPropDetail">
                          <div className=" forInfoTwo"> 
                              <p><b>Beds: {post.Bed}</b></p>
                              <p><b>Baths: {post.Bath}</b> </p>
                              <p><b>Sqft: {post.Sqft}</b> </p>
                            </div>
                        </div>
                </div>
                ))}
    </Container>
  )
}
