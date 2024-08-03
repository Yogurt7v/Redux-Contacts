import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { contactsSlice } from "../reducers/contactsReducer";
import { groupSlice } from "../reducers/groupReducer";
import { favContactsSlice } from "../reducers/favoriteReducer";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const rootReducer = combineReducers({
  contacts: contactsSlice.reducer,
  favoriteContacts: favContactsSlice.reducer,
  groupContacts: groupSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
})


export default store;
