 import { createSlice } from "@reduxjs/toolkit";
let initialState={
    items:[],
    srchword:"",
}


const displaySlice = createSlice({
  name: 'display',
  initialState,
  reducers: {


    fetchData(state,action)
    {
        console.log("fetchData called");
      state.items=action.payload;
      state.srchword="s"
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
    }
     
  },
});

export const {searchword,fetchData,reduceQty}=displaySlice.actions
export default displaySlice.reducer;