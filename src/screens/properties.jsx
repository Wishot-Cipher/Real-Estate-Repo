import React from 'react'
// import { PropertiesList } from '../components/propertiesComponents/propertiesList'
import useFeach from '../components/useFeach'
import { Property } from '../components/propertiesComponents/property';

export const Properties = () => {
  const { data : posts , loading, setData} = useFeach("https://real-eastate-json-server.onrender.com/posts?_sort=market_price");
  return (
      <div>
        {loading && <div style={{display:"flex", justifyContent :"center"}}> Loading.... </div> }
        {/* { posts &&  <PropertiesList posts={posts} />} */}
        {posts &&<Property posts={posts} setData={setData} />}
       </div>
  )
}
