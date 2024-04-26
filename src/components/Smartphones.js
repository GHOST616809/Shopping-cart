import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../Redux/Slice1'
const Smartphones = () => {
    const URL="https://dummyjson.com/products/category/smartphones?limit=10"
 
    const [items,setitems]=useState([])
  
    const getData=async ()=>{
      let data=await fetch(`${URL}`);
      let res=await data.json();
      setitems(res.products);
      setTimeout(()=>{},100);
  
  
  
  }
     getData()
      const dispatch=useDispatch();
     const handleAddToCart=(idx)=>{
      dispatch(addToCart(items[idx]))
     }
    
      return (
      <div className="container ">
           <div className="row">
          {items.map((item,idx)=>{console.log(item.images[0]); item.qty=0; return(<div className="col-md-4 "><img src={`${item.images[0]}`}></img><h4>{item.title}</h4><br></br><h3>Item Description</h3>{item.description?item.description:404}<br></br><button className="btn btn-primary" onClick={(e)=>{handleAddToCart(idx)}}>Add To Cart</button></div>
          );
      
      
      })}
      
          </div>
        
  
  
  
      </div>
    
  
  
  
  )
   
}

export default Smartphones
