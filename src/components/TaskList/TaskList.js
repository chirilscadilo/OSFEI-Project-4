import React from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Typography from '@mui/material/Typography';
//import CartContext from "../../state/cart-Context";
import { Button } from "@mui/material";
import {StyledFlexButtons} from '../../styles/StyledFlexButtons.styled';
import { useDispatch } from "react-redux";
import { handleCheckClick, handleRemoveClick, removeAll, removeAllDone } from "../../state/todoItems-slice";
import { handleEditItem } from "../../state/editTodo-slice";
import { handleOpenEdit } from "../../state/handleModal-slice";

function TaskList(props){
    //const context = useContext(CartContext);
    const dispatch = useDispatch();
    if(props.todoItems.length === 0){
        return <Typography variant="h4" sx={{textAlign:'center'}}>No items found</Typography>
    };
    return(
        <>
        <List dense sx={{ width: '100%', maxWidth: 510, bgcolor: 'background.paper' , margin: '0 auto', borderRadius: 2}}>
            {props.todoItems.map((item, index) => (
                <ListItem key={item.id}>
                <ListItemIcon>
                    <Checkbox
                        checked={item.done}
                        onClick={() => dispatch(handleCheckClick(index))}
                    />
                </ListItemIcon>
                <ListItemText sx={item.done ?{fontSize:18, textDecoration: 'line-through',color: 'red'}:{fontSize:18}} primary={item.text} />
                <ListItemSecondaryAction>
                    {/*  */}
                    <IconButton onClick={() => dispatch(handleEditItem({id:item.id, text:item.text}), dispatch(handleOpenEdit()))}>
                        <EditIcon />
                    </IconButton>
                    <IconButton onClick={()=> dispatch(handleRemoveClick(item.id))}>
                    <DeleteIcon />
                    </IconButton>
                </ListItemSecondaryAction>
                </ListItem>
            ))}
        </List>
        <StyledFlexButtons>
            <Button variant="contained" onClick={()=>dispatch(removeAll())}>Delete All</Button>
            <Button variant="contained" onClick={()=>dispatch(removeAllDone())}>Delete Done</Button>
        </StyledFlexButtons>
            

        </>
    )
}

export default TaskList