import { createSlice } from "@reduxjs/toolkit";

const editTodoSlice = createSlice({
    name: 'editTodo',
    initialState:{editedTodo:null},
    reducers:{
        handleEditItem(state,action){
            const {id, text} = action.payload;
            state.editedTodo = {
                id,
                text,
            };
        }
    }
});

export const {handleEditItem} = editTodoSlice.actions;
export default editTodoSlice.reducer;