import { createSlice } from "@reduxjs/toolkit";

const handleModalSlice = createSlice({
    name:'handleModal',
    initialState: {openEdit:false},
    reducers:{
        handleOpenEdit(state){
            state.openEdit=true;
        },
        handleCloseEdit(state){
            state.openEdit=false;
        }
    }
})

export const {handleOpenEdit, handleCloseEdit} = handleModalSlice.actions;
export default handleModalSlice.reducer;