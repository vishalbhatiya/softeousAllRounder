import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    c: 30,
    employees: [],
    products:[],
  },
  reducers: {
    getEmployees: (state) => {
      
    },
    getEmployeesSuccess: (state, action: PayloadAction<[]>) => {
      console.log('getEmployeeSuccess Function called')
      state.employees = action.payload;
    },
    getProductsSuccess: (state, action: PayloadAction<[]>) => {
      console.log('getEmployeeSuccess Function called')
      state.products = action.payload;
    },
    incrementBy: (state, action) => {
      state.c = state.c + 1;
    },
    incrementByValue: (state, action) => {
      // state.c+= 1
      state.c += action.payload;
    },

    decrementBy: (state, action) => {
      state.c -= 1;
    },
  },
});

export const { actions: counterActions, reducer: counterReducer } =
  counterSlice;
