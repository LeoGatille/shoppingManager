import { notesReducer } from './noteReducer';
import { createStore, combineReducers } from '@reduxjs/toolkit';
import { sidebarReducer } from './sidebar/sibearReducers'
const rootReducer = combineReducers({
    notesReducer,
    sidebarReducer
})
export const store = createStore(
    rootReducer, 
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
    );
