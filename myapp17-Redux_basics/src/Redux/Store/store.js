import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Features/CounterSlice";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        // added a comment to check how this is working 
        
    },
});

export default store;
