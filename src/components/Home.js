import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../Redux/Slice1'
import { fetchData, reduceQty } from '../Redux/DisplaySlice'
import Slider from './Slider'




const Home = () => {

    const dispatch=useDispatch();
    // let wrd=useSelector(state=>state.srchword)
    const ref=useRef(null);
    
   
  const URL="https://dummyjson.com/products"
  
 
//   const items=useSelector(state=>state.cart)
//   const [items,setitems]=useState([])



    // useEffect(() => {
         
    //         // let data = await fetch(`${URL}`);
    //         // let res = await data.json();
    //         let filteredItems = items.filter(item => {return(item.title===wrd)});
    //         setitems(filteredItems);
    //     }
         
    // , [wrd])

   const [flag,setFlag]=useState(0);
   const [modal,setModal]=useState({})
  const getData=async ()=>{
    // console.log("get Data called")
    let data=await fetch(`${URL}`);
    let res=await data.json();
    // setitems(res.products);
    let newarr=res.products;
    // console.log(newarr);
     newarr=newarr.map((item)=>{return({...item,qty:5,cartqty:0});})
    setFlag(1);
    dispatch(fetchData(newarr));
    // console.log(items);


}
  if(flag==0)
   getData()
   const items=useSelector((state)=>state.display.items)
    // const wrd=useSelector((state)=>state.display.srchword)
  //  console.log("wrd in Homejs",wrd);
    
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
      <>


   
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
    
      <div className="my 5"><Slider></Slider></div>

      <div className="row my-3 ">
      <div className="col-md-4 card">
        <img src="https://picsum.photos/200/300" style={{width:"100%",height:"70%"}}></img>
        
        <div className="card-body lead">Revamp your Home with the new decors !!!Fresh of the Boat</div>
      </div>

      <div className="col-md-4 card">
        <img src="https://picsum.photos/200/300" style={{width:"100%",height:"70%"}}></img>
        
        <div className="card-body lead">Boat Coming Your Way!!!</div>
      </div>

      <div className="col-md-4 card">
        <img src="https://picsum.photos/200/300" style={{width:"100%",height:"70%"}}></img>
        
        <div className="card-body lead">Grab the latest fashionwears from the top brands</div>
      </div>
      </div>

    <div className="container my-5">
     
         <div className="row">
        {items!==undefined&&items.map((item,idx)=>{console.log(item.images[0]);  return(<div className="col-md-4 "><div className="card"><img src={`${item.images[0]}`}></img><div className="card-body"><h4>{item.title}</h4><br></br><h3>Item Description</h3>{item.description?item.description:404}<br></br><h3>{item.qty?<h4>qty:{item.qty}</h4>:<h4>Out of Stock</h4>}</h3><br></br><button className="btn btn-primary" onClick={(e)=>{handleAddToCart(idx)}}>Add To Cart</button><button className="btn btn-primary mx-4" onClick={()=>{displayModal(item)}}>Details</button></div></div></div>
        );
    
    
    })}
    
        </div>
      



    </div>

     

    </>
  



)
}

export default Home



