import { FavoriteContactsDto } from "../types/dto/FavoriteContactsDto";

const initialState: FavoriteContactsDto[] = []

export const favoriteReducer = (state: FavoriteContactsDto[] = initialState, action: { type: string, payload: FavoriteContactsDto[] }) => {
    switch (action.type) {
        case 'FETCH_FAVORITE_CONTACTS':
            return [...state, ...action.payload]
        default:
            return state
    }
}