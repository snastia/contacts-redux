import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
       setFilter(state, action){
          return state
       }
    }
}) 

export const { setFilter } = filterSlice.actions
export const filtersReducer = filterSlice.reducer

// reducer - функція яка приймає 2 аргумента - state, action і повертає стейт (оновлений або неоновлений)