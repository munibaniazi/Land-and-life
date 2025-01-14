import React from 'react'
import Back from '../common/Back'
import img from "../images/services.jpg"
import FeaturedCard from '../home/featured/FeaturedCard'


const Services = () => {
  return (
    <>
    <section className='services mb'>
        <Back title="All types of Services are listed here." cover={img}/>
    <div className="featured container">
        <FeaturedCard/>
    </div>
    </section>
    </>
  )
}

export default Services