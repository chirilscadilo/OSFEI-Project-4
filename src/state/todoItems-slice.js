import { createSlice } from "@reduxjs/toolkit";

const todoItemsSlice = createSlice({
    name: 'todoList',
    initialState:{
        items: [],
    },
    reducers:{
        addingNewTodo(state, action){
            const newTodo = action.payload;
            state.items.push({
                id:newTodo.id,
                text:newTodo.text,
                done:newTodo.done,
            });
        },
        handleCheckClick(state,action){
            const newListItems = [...state.items];
            newListItems[action.payload].done = !newListItems[action.payload].done;
            state.items = [...newListItems];
        },
        handleRemoveClick(state, action){
            const id = action.payload;
            state.items = state.items.filter(item=>item.id !== id);                
        },
        updateTodo(state, action){
            const {id, text} = action.payload;
            const existingItem = state.items.find(item=>item.id === id);
            if(existingItem){
                existingItem.text = text;
            }
        },
        removeAll(state){
            state.items= []
        },
        removeAllDone(state){
            const filtrDoneItems = state.items.filter(item => item.done !== true);
            state.items= [...filtrDoneItems];
        }
    },
});

export const {
    addingNewTodo, 
    handleCheckClick, 
    handleRemoveClick, 
    updateTodo, 
    removeAll, 
    removeAllDone} = todoItemsSlice.actions;
export default todoItemsSlice.reducer;