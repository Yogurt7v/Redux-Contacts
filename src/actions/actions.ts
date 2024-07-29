import { ContactDto } from "../types/dto/ContactDto";
import { FavoriteContactsDto } from "../types/dto/FavoriteContactsDto";
import { GroupContactsDto } from "../types/dto/GroupContactsDto";

export const fetchContactsAction = (contacts: ContactDto[]): { type: string, payload: ContactDto[] } => {
    return {
        type: 'FETCH_CONTACTS',
        payload: [...contacts]
    }
}

export const fetchFavoriteContactsAction = (favorite: FavoriteContactsDto): { type: string, payload: FavoriteContactsDto } => {
    return {
        type: 'FETCH_FAVORITE_CONTACTS',
        payload: [...favorite]
    }
}
export const fetchGroupContactsAction = (group: GroupContactsDto[]): { type: string, payload: GroupContactsDto[] } => {
    return {
        type: 'FETCH_FAVORITE_CONTACTS',
        payload: [...group]
    }
}