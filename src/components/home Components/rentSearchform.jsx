import React, {useState} from 'react'

export const RentSearchForm = () => {
  const [property, setProperty] = useState('property')
  const [location, setLocation] = useState("location")
  const [price, setPrice] = useState("price")


  const handelSubmit = (e) => {
    e.preventDefault()
    console.log(`Renting ${property}`);
    console.log(`Renting at ${location}`);
    console.log(`Renting for ${price}`);

    setProperty("property")
    setLocation("location")
    setPrice("price")
  }
  return (
    <div >
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
          <option value="price">Price Range</option>
          <option value="$1000">$1000</option>
          <option value="$10,000">$10,000</option>
          <option value="$50,000">$50,000</option>
          <option value="$100,000">$100,000</option>
        </select>
        <input type="submit" value="Search" />
        </form>

    </div>
  )
}
