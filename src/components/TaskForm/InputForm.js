import React, {useState} from "react";
import {StyledInputForm} from '../../styles/InputForm.styled'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';
//import CartContext from "../../state/cart-Context";
import { useDispatch } from "react-redux";
import { addingNewTodo } from "../../state/todoItems-slice";
import { nanoid } from "@reduxjs/toolkit";

const InputForm = ()=>{
    //const context = useContext(CartContext);
    const dispatch = useDispatch();
    const [toDoInput, setToDoInput] = useState('');
    
    const sumbitHandler = (event)=>{
        event.preventDefault();

        if(toDoInput.trim().length > 0){
            dispatch(addingNewTodo({id: nanoid() ,text:toDoInput, done:false}));
        }
        setToDoInput('');
    };

    return(
        <StyledInputForm> 
            <div>
                <form onSubmit={sumbitHandler} noValidate autoComplete="off">
                    <TextField
                    value={toDoInput}
                    onChange={(e)=>setToDoInput(e.target.value)}
                    label="Create Todo"
                    variant="outlined" 
                    color="secondary"
                    fullWidth
                    required
                    />
                    
                    <Button disabled={!toDoInput} type="submit" variant="contained">Add</Button>
                </form>
            </div>
        </StyledInputForm>
    )
}

export default InputForm