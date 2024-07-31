import { ContactDto } from "../types/dto/ContactDto";
import { FETCH_CONTACTS } from "../actions/actions";
import { ProjectActions } from "../actions/actions";


const initialState: ContactDto[] = []

export const contactsReducer = (state: ContactDto[] = initialState, action: ProjectActions) => {
    switch (action.type) {
        case FETCH_CONTACTS:
            return [...action.payload]
        default:
            return state
    }
}