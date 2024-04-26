import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../Redux/Slice1'
import { fetchData } from '../Redux/DisplaySlice'



const Home = () => {

    const dispatch=useDispatch();
    // let wrd=useSelector(state=>state.srchword)
    
    
   
  const URL="https://dummyjson.com/products?limit=5"
  
 
//   const items=useSelector(state=>state.cart)
//   const [items,setitems]=useState([])



    // useEffect(() => {
         
    //         // let data = await fetch(`${URL}`);
    //         // let res = await data.json();
    //         let filteredItems = items.filter(item => {return(item.title===wrd)});
    //         setitems(filteredItems);
    //     }
         
    // , [wrd])

   
  const getData=async ()=>{
    console.log("get Data called")
    let data=await fetch(`${URL}`);
    let res=await data.json();
    // setitems(res.products);
    let newarr=res.products;
    console.log(newarr);
     newarr=newarr.map((item)=>{return({...item,qty:5});})
    
    dispatch(fetchData(newarr));
    // console.log(items);


}
   getData()
   const items=useSelector((state)=>state.display.items)
    // const wrd=useSelector((state)=>state.display.srchword)
  //  console.log("wrd in Homejs",wrd);
    
   const handleAddToCart=(idx)=>{
    dispatch(addToCart(items[idx]))
   }
   
  
    return (
    <div className="container ">
         <div className="row">
        {items!==undefined&&items.map((item,idx)=>{console.log(item.images[0]);  return(<div className="col-md-4 "><img src={`${item.images[0]}`}></img><h4>{item.title}</h4><br></br><h3>Item Description</h3>{item.description?item.description:404}<br></br><h3>qty:{item.qty}</h3><br></br><button className="btn btn-primary" onClick={(e)=>{handleAddToCart(idx)}}>Add To Cart</button></div>
        );
    
    
    })}
    
        </div>
      



    </div>
  



)
}

export default Home



