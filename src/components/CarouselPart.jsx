import React from 'react'

import './styles/Carousel.css';
import img1 from '../images/product1.png'
import img2 from '../images/product2.png'
import img3 from '../images/product3.png'
const CarouselPart = () => {
  return (
        <>
        <div className='main-div'>
            <div className='images'>
              <div className='main-img'>
              <img src={img1} width="581px" height="300px" />
              </div>
              <div className='sub-image'>
                    <div className='img1'><img src={img2} width="287px" height="200px"/></div>
                    <div className='img2'><img src={img3} width="290px" height="200px" /></div>
              </div>
            </div>

            <div className='description'>
                    <h3>Apple MacBook Pro 16" M2 Pro</h3>
                    <p><b>Product Type  : </b> Laptop</p>
                    <p><b>Series  : </b> Apple. Macbook Pro M2</p>
                    <p><b>OS Version  : </b> macOS</p>
                    <p><b>Screen Size  : </b> 	16"</p>
                    <p><b>RAM  : </b> 16 GB</p>
                    <p><b>price  : </b> <span >23,000,000 Rs</span></p>
            </div>
        </div>    
        </>


  )
}

export default CarouselPart