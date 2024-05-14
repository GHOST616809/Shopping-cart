 import { createSlice } from "@reduxjs/toolkit";
let initialState={
    items:[],
    srchword:"",
    modal:{},
    location:"",
    smartphones:[]
     
}


const displaySlice = createSlice({
  name: 'display',
  initialState,
  reducers: {


    fetchData(state,action)
    {
        console.log("fetchData called");
      state.items=action.payload;
      // state.srchword="s"
      state.smartphones=state.items.filter(item=>item.category=="smartphones");
      console.log("items =",state.items);
      
    },    

    searchword(state,action)
    {
        console.log("searchword called");
      state.srchword=action.payload;
     
      
    },

    reduceQty(state,action)
    {
        // console.log("reduceQty called");
      state.items[action.payload].qty--;
    },

    addToModal(state,action)
    {
      state.modal=action.payload;
      state.showModal=1;
    },
    removeModal(state,action)
    {
       
      state.showModal=0;
    },
    addLocation(state,action)
    {
      state.location=action.payload;
    }

     
  },
});

export const {searchword,fetchData,reduceQty,addToModal,addLocation}=displaySlice.actions
export default displaySlice.reducer;