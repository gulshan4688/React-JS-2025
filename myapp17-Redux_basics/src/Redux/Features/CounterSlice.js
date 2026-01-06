import { createSlice } from "@reduxjs/toolkit";

export const CounterSlice = createSlice({
    name: 'counter',
    initialState :{
        value: 0,
    },
    reducers: {
        increament: (state) => {
            state.value += 1;
        },
        decreament: (state) => {
            state.value -= 1;
        },
        increamentByAmount: (state, action) => {
            state.value += action.payload;
        },
    },
})

export const { increament, decreament, increamentByAmount } = CounterSlice.actions

export default CounterSlice.reducer 