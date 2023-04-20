import {Container} from './styles/Container.styled';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/Global.styled'
import React from 'react';
import InputForm from './components/TaskForm/InputForm';
import TaskList from './components/TaskList/TaskList';
import EditForm from './components/TaskForm/EditForm';
import FilterButtonGroup from './components/FilterButtonsGroup/FilterButtonGroup';
//import CartContext from './state/cart-Context';
import { useSelector } from 'react-redux';


const theme = {
  colors: {
    body: `#c0cdcf`,
    input:`#fff`,
    buttons: `#09a4b3`,
    deleteButons: `#d63a0f`,
  }
};

function App() {
  //const context = useContext(CartContext);
  const openEdit = useSelector((state)=>state.handleModal.openEdit)
  const todoItems = useSelector((state)=>state.todoItems.items)
  const filter = useSelector((state)=>state.filter.filter);

  /*preset filters*/
  const filtrDoneItems=todoItems.filter(item =>{
    return item.done === true;
  })
  const filterTodoItems=todoItems.filter(item =>{
    return item.done === false;
  })

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Container>
        {openEdit && (<EditForm/>)}
        <InputForm />
        <FilterButtonGroup/>
        <TaskList todoItems={
          filter==='done'?filtrDoneItems 
          :filter==='todo'?filterTodoItems 
          :todoItems
          }/>
      </Container>
    </ThemeProvider>
  );
}

export default App;
