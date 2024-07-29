import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension';
import { contactsReducer } from '../reducers/contactsReducer'
import { thunk } from 'redux-thunk';
import { } from 'redux';


// export type RootState = ReturnType<typeof rootReducer>

// const rootReducer = combineReducers({
//     contacts: contactsReducer,
// })
export const store = createStore(contactsReducer, composeWithDevTools(applyMiddleware(thunk)))
// export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store;