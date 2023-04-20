import React, {useState} from "react";
import {StyledInputForm} from '../../styles/InputForm.styled'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
//import CartContext from "../../state/cart-Context";
import {StyledFlexButtons} from '../../styles/StyledFlexButtons.styled';
import { useSelector, useDispatch } from "react-redux";
import { handleCloseEdit } from "../../state/handleModal-slice";
import { updateTodo } from "../../state/todoItems-slice";

const EditForm = ()=>{
    const dispatch = useDispatch();
    const editedTodo = useSelector((state)=>state.editObject.editedTodo)
    const openEdit = useSelector((state)=>state.handleModal.openEdit)
    const [newupdatedTodo, setUpdateTodo] = useState(editedTodo.text);

    const sumbitHandler = (event)=>{
        event.preventDefault();
        dispatch(updateTodo({...editedTodo, text:newupdatedTodo}));
        dispatch(handleCloseEdit())
    };

    return(
        <Modal open={openEdit} onClose={() => dispatch(handleCloseEdit())} onSubmit={sumbitHandler}>
            <StyledInputForm>
            <div>
                <h2>Edit Item</h2>
                <form noValidate autoComplete="off">
                <TextField
                    value={newupdatedTodo}
                    onInput={(e)=>setUpdateTodo(e.target.value)}
                    label="Update Todo"
                    variant="outlined" 
                    color="secondary"
                    fullWidth
                    required
                />
                <StyledFlexButtons changeColor>
                    <Button disabled={!newupdatedTodo} type="submit" variant="contained" color="primary">
                        Update Item
                    </Button>
                    <Button onClick={() => dispatch(handleCloseEdit())} variant="contained" color="secondary">
                        Cancel
                    </Button>
                </StyledFlexButtons>
                </form>
        </div>
        </StyledInputForm>
        </Modal> 
    )
}

export default EditForm