import React from 'react'
import './Campus.css'
import campus1 from '../../assets/gallery-1.png'
import campus2 from '../../assets/gallery-2.png'
import campus3 from '../../assets/gallery-3.png'
import campus4 from '../../assets/gallery-4.png'
import whitearrow from '../../assets/white-arrow.png'

const Campus = () => {
  return (
    <div className='campus'>
      <div className="gallery">
        <img src={campus1} alt="" className='campus-images' />
        <img src={campus2} alt="" className='campus-images' />
        <img src={campus3} alt="" className='campus-images' />
        <img src={campus4} alt="" className='campus-images' />
      </div>
      <button className='btn dark-btn'>See More Here <img src={whitearrow}/></button>
    </div>
  )
}

export default Campus
