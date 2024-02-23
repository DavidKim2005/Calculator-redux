import { createSlice } from "@reduxjs/toolkit";


interface CalculatorState {
    value: number;
}

const initialState: CalculatorState = {
    value: 0
}

export const calculatorSlice = createSlice({
    name: 'calculator',
    initialState,
    reducers: {
        plus: (state) => {
            state.value  
        },
        subtract: (state) => {
            state.value 
        },
        multiply: (state) => {
            state.value 
        },
        divide: (state) => {
            state.value 
        },
        clear: (state) => {
            state.value = 0;
        }
    }
})

export const calculatorReducers = calculatorSlice.reducer;

export const { plus, subtract, multiply, divide } = calculatorSlice.actions