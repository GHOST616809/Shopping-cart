import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { addToCart, removeFromCart } from '../Redux/Slice1';

const Cart = () => {

const item= useSelector(state=>state.cart.cart)
 const x=useSelector(state=>state.cart.Balance)
const dispatch=useDispatch();
  return (
    <div className='container mt-6'>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">Item Name</th>
      <th scope="col">Price</th>
      <th scope="col">Qty</th>
      
    </tr>
    </thead>
    <tbody>

     
     
 
      {item.map((item,idx)=>{  return(<tr><th>{item.title}</th><td>{item.price}</td><button className="btn btn-primary" onClick={()=>{dispatch(addToCart(item))}}>+</button><td>{item.cartqty}</td><button className="btn btn-primary" onClick={()=>{dispatch(removeFromCart(item))}}>-</button></tr>)})}
    <th>Total Balance</th><td>{x}</td><td></td>
      </tbody>
</table>
</div>
     )
     
  }
  


export default Cart
