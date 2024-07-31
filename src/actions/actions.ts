import { FavoriteContactsDto } from "src/types/dto/FavoriteContactsDto";
import { fetchContacts, fetchFavoriteContacts, fetchGroupContacts } from "../api";
import { ContactDto } from "../types/dto/ContactDto";
import { Dispatch } from "redux";
import { GroupContactsDto } from "src/types/dto/GroupContactsDto";
export const FETCH_CONTACTS = 'FETCH_CONTACTS';
export const FETCH_FAVORITE_CONTACTS = 'FETCH_FAVORITE_CONTACTS';
export const FETCH_GROUP_CONTACTS = 'FETCH_GROUP_CONTACTS';

export interface IfetchContactsAction {
    type: typeof FETCH_CONTACTS
    payload: ContactDto[]
}

export interface IfetchfavoriteContactsAction {
    type: typeof FETCH_FAVORITE_CONTACTS
    payload: FavoriteContactsDto
}

export interface IfetchGroupContactsAction {
    type: typeof FETCH_GROUP_CONTACTS
    payload: GroupContactsDto[]
}


export const fetchContactsAction = () => (dispatch: Dispatch<{ type: string, payload: ContactDto[] }>) => {
    fetchContacts()
        .then(contactsData => {
            dispatch({
                type: FETCH_CONTACTS,
                payload: [...contactsData]
            });
        });
}


export const fetchFavoriteContactsAction = () => (dispatch: Dispatch<{ type: string, payload: FavoriteContactsDto }>) => {
    fetchFavoriteContacts()
        .then(favContacts => {
            dispatch({
                type: FETCH_FAVORITE_CONTACTS,
                payload: [...favContacts]
            });
        });
}

export const fetchGroupContactsAction = () => (dispatch: Dispatch<{ type: string, payload: GroupContactsDto[] }>) => {
    fetchGroupContacts()
        .then(groupContacts => {
            dispatch({
                type: FETCH_GROUP_CONTACTS,
                payload: groupContacts
            });
        });
}


export type ProjectActions = IfetchContactsAction | IfetchfavoriteContactsAction | IfetchGroupContactsAction