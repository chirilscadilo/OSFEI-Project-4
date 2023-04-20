import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: 'filter',
    initialState:{filter:'all'},
    reducers:{
        handleFiltres(state,action){
            state.filter = action.payload;
        }
    }
});

export const {handleFiltres} = filterSlice.actions;
export default filterSlice.reducer;