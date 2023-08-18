import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({

    name:"user",
    initialState:{
        user:"nnn",
    },

    reducers:{
        loginUser:(state,action)=>{
            state.user=action.payload;
        }
    }
})

export const {loginUser}= userSlice.actions;
export default userSlice.reducer;