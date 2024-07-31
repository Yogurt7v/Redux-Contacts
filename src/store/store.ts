import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { contactsReducer } from "../reducers/contactsReducer";
import { favoriteReducer } from "../reducers/favoriteReducer";
import { groupReducer } from "../reducers/groupReducer";
import { thunk } from "redux-thunk";
import { } from "redux";

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  contacts: contactsReducer,
  favoriteContacts: favoriteReducer,
  groupContacts: groupReducer,
});
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
export default store;
