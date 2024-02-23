import { configureStore } from "@reduxjs/toolkit"; 
import { calculatorReducers } from "../containers/Calculation";

export const store = configureStore({
    reducer: {
        calculator: calculatorReducers
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;