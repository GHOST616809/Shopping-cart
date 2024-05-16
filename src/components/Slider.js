import React from 'react'
import { useSelector } from 'react-redux'

const Slider = () => {

  const popItem=useSelector(state=>state.cart.popItem)
  return (
    <div>
        <div id="carouselExample" className="carousel slide my-5">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={popItem!==undefined&&popItem.length()>0?popItem[0].image[0]:"https://cdn.dummyjson.com/product-images/1/1.jpg"} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={popItem!==undefined&&popItem.length()>1?popItem[0].image[1]:"https://cdn.dummyjson.com/product-images/1/2.jpg"} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://cdn.dummyjson.com/product-images/1/3.jpg" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
      
    </div>
  )
}

export default Slider

