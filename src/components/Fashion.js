import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { addToCart } from '../Redux/Slice1'
import { reduceQty } from '../Redux/DisplaySlice'

const Fashion = () => {
const [modal,setModal]=useState({})
    const dispatch=useDispatch();
const items=useSelector(state=>state.display.fashion)
const ref=useRef(null);

const handleAddToCart=(idx)=>{
    dispatch(addToCart(items[idx]))
    // const newCartitem={...items[idx],cartqty:items[idx].qty-1}
    //  items[idx]=newCartitem;
    dispatch(reduceQty(idx))
   }

   const displayModal=(item)=>{
    
        setModal(item)
        ref.current.click();




   }
 

  return (
    <div>


<button ref={ref} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  
  </button>
         
<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">{modal.title}</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="card">
        <div className="card-body">
      <div className="modal-body">
        <div className='container'><img src={`${modal.thumbnail}`} className="img-fluid"></img></div>
        {modal.description}
      </div>
      </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        {/* <button type="button" className="btn btn-primary">Save changes</button> */}
      </div>
    </div>
  </div>
</div>
        
        <div className="row">
        {items!==undefined&&items.map((item,idx)=>{console.log(item.images[0]);  return(<div className="col-md-4 "><div className="card"><img src={`${item.images[0]}`}></img><div className="card-body"><h4>{item.title}</h4><br></br><h3>Item Description</h3>{item.description?item.description:404}<br></br><h5>Rs:{item.price}</h5><br></br><h5>{item.qty?<h5>qty:{item.qty}</h5>:<h5>Out of Stock</h5>}</h5><br></br><button className="btn btn-primary" onClick={(e)=>{handleAddToCart(idx)}}>Add To Cart</button><button className="btn btn-primary mx-4" onClick={()=>{displayModal(item)}}>Details</button></div></div></div>
        );
    
    
    })}
    
    </div>
    </div>
  )
}

 

 
export default Fashion
