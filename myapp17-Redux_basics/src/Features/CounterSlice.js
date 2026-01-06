import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
}

export const CounterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increament : (state) =>{
            state.value += 1
        },
        decreament : (state) =>{
            state.value -= 1
        },
        increamentByAmount : (state, action) =>{
            state.value += action.payload;
        },
    },
})

export const {increament, decreament, increamentByAmount} = CounterSlice.actions

export default CounterSlice.reducer