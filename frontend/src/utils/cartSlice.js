import {createSlice} from "@reduxjs/toolkit";


const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[],
    },
    reducers:{

          // to add any particular item in cart

          addItem:(state,action)=>{
             state.items.push(action.payload);
          },


        // to remove any particular item in cart
          removeItem:(state,action)=>{
             
              //  console.log(action.payload)
                const arrayafterremoval=state.items.filter((item)=>{
                  return item.card.info.id !== action.payload;
                });
                state.items=arrayafterremoval;
           },

         // to lear whole cart 
          clearCart:(state)=>{
            state.items=[];
          },

    }
})

export const {addItem,removeItem,clearCart}= cartSlice.actions;
export default cartSlice.reducer;
