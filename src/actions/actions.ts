// import { ContactDto } from "../types/dto/ContactDto";
// import { FavoriteContactsDto } from "../types/dto/FavoriteContactsDto";
// import { GroupContactsDto } from "../types/dto/GroupContactsDto";
import { fetchContacts, fetchFavoriteContacts, fetchGroupContacts } from "../api";


export const fetchContactsAction = () => (dispatch: any) => {
    fetchContacts()
        .then(contactsData => {
            const contacts = [...contactsData];
            dispatch({
                type: 'FETCH_CONTACTS',
                payload: contacts
            });
        });
}


export const fetchFavoriteContactsAction = () => (dispatch: any) => {
    fetchFavoriteContacts()
        .then(favContacts => {
            dispatch({
                type: 'FETCH_FAVORITE_CONTACTS',
                payload: favContacts
            });
        });
}

export const fetchGroupContactsAction = () => (dispatch: any) => {
    fetchGroupContacts()
        .then(groupContacts => {
            dispatch({
                type: 'FETCH_GROUP_CONTACTS',
                payload: groupContacts
            });
        });
}
