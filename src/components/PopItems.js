import React from 'react'
import { useSelector } from 'react-redux'

const PopItems = () => {

    const popItems=useSelector(state=>state.cart.popItems);
  return (
    <div>
      <div className="container my-5">
     
     <div className="row">
    {popItems!==undefined&&popItems.map((item,idx)=>{  return(idx<=2?<div className="col-md-4 "><div className="card"><img src={`${item.images[0]}`}></img><div className="card-body"><h4>{item.title}</h4><br></br><h3>Item Description</h3>{item.description?item.description:404}<br></br><br></br><button className="btn btn-primary"  >Add To Cart</button></div></div></div>:""
    );


})}

    </div>
  



</div>
    </div>
  )
}

export default PopItems
