import React from 'react'
import useFeach from '../components/useFeach'
import { DetailsComp } from '../components/propertyDetailsComponents/detailsSwiperComp'
import { useParams } from 'react-router-dom'

export const PropertyDetails = () => {
    const {id} = useParams()
    const { data : properties , loading, setData} = useFeach("https://real-eastate-json-server.onrender.com/posts/" + id);

  return (
    <div>
      {properties && <DetailsComp setData={setData} properties={properties}/>}
    </div>
  )
}
