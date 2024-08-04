import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { contactsSlice } from "../reducers/contactsReducer";
import { groupSlice } from "../reducers/groupReducer";
import { favContactsSlice } from "../reducers/favoriteReducer";
import { contactsApiSlice } from "../reducers/contactsReducer"
import { groupApiSlice } from "../reducers/groupReducer"

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const rootReducer = combineReducers({
  contacts: contactsSlice.reducer,
  [contactsApiSlice.reducerPath]: contactsApiSlice.reducer,
  favoriteContacts: favContactsSlice.reducer,
  groupContacts: groupSlice.reducer,
  [groupApiSlice.reducerPath]: groupApiSlice.reducer,

});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(contactsApiSlice.middleware).concat(groupApiSlice.middleware),
})


export default store;
