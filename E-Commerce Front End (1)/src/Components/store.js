import { configureStore } from "@reduxjs/toolkit";
import MasterReducer from '../Slice';


const store = configureStore({
    reducer : {
        carts : cartReducer
    }
});






export default store;