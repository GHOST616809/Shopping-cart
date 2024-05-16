import { createSlice } from '@reduxjs/toolkit';

// Define initial state
const initialState = {
  cart: [],
  Balance:0,
  popItems:[],
   
  
};

// Create a slice
const counterSlice = createSlice({
  name: 'counter', // Name of your slice
  initialState,   // Initial state
  reducers: {
    // Define reducers
    addToCart(state,action) {
        // let newarr=state.cart.filter((item)=>{return(item=={}?<h1>404</h1>:item.title===action.payload.title)})
       
        // let newarr = state.cart.filter((item) => {
        //   return (
        //       item.title === action.payload.title
        //   );
        // });
        const index = state.cart.findIndex((item) => item.title===action.payload.title);
        console.log("add to cart called",state.cart)
        // action.payload.cartqty=action.payload.cartqty+1;
        const newItem = { ...action.payload, cartqty: action.payload.cartqty+1 };
        // state.cart.push(newItem);
         
        // state.cart[sz-1].cartqty=1;
        
        if(index==-1)
        {
            
              state.Balance=state.Balance+action.payload.price;
              (state.cart).push(newItem);
              let sz;
              sz=(state.cart).length;
               
        }
        else{
            // newarr[0].qty=newarr[0].qty+1;
            (state.cart[index]).cartqty=(state.cart[index]).cartqty+1;
            state.Balance=state.Balance+action.payload.price;
            console.log("test",state.cart[index]);

        }
        state.popItems=state.cart;
        state.popItems.sort((a,b)=>b.cartqty-a.cartqty);
        
        
      
      
    },
    removeFromCart(state,action) {
      let newarr = state.cart.map((item,idx) => {
        if(item.title===action.payload.title)
        {
          console.log("test",item.qty)
          item.qty=item.qty-1;
          state.Balance=state.Balance-action.payload.price;
          if(item.qty!==0)
          {
            // console.log("return",item);
            return item;
          }


        }
        else{
          return(item);
        }
        
      }).filter(Boolean);
      console.log(newarr)
      state.cart = newarr;
     
    }

   
    
  },
});

// Export action creators
export const { addToCart, removeFromCart, searchword} = counterSlice.actions;

// Export reducer
export default counterSlice.reducer;
