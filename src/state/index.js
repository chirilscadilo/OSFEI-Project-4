import { configureStore , combineReducers} from "@reduxjs/toolkit";
import { 
    persistReducer, 
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, 
} from "redux-persist";
import storage from 'redux-persist/lib/storage'; // Defaults to localStorage for web
import todoItemsSlice from "./todoItems-slice";
import handleModalSlice from "./handleModal-slice";
import editTodoSlice from "./editTodo-slice";
import filterSlice from "./filter-slice";


const reducers = combineReducers({
    todoItems: todoItemsSlice,
    handleModal: handleModalSlice,
    editObject: editTodoSlice,
    filter: filterSlice,
});

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer:persistedReducer,
    /*adding to ignore the error warn for using non-serializable values in state or actions.*/
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;