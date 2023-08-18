import {configureStore} from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import userSlics from "./userSlice";

const store=configureStore({
    reducer:{
        cart:cartSlice,
        user:userSlics
    }
});

export default store;
