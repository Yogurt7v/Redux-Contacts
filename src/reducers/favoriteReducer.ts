import { FavoriteContactsDto } from "../types/dto/FavoriteContactsDto";
import { FETCH_FAVORITE_CONTACTS } from "../actions/actions";
import { ProjectActions } from "../actions/actions";

const initialState: FavoriteContactsDto = []

export const favoriteReducer = (state: FavoriteContactsDto = initialState, action: ProjectActions) => {
    switch (action.type) {
        case FETCH_FAVORITE_CONTACTS:
            return [...action.payload]
        default:
            return state
    }
}