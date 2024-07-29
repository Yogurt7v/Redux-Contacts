import { ContactDto } from "../types/dto/ContactDto";

const initialState: ContactDto[] = []

export const contactsReducer = (state: ContactDto[] = initialState, action: { type: string, payload: ContactDto[] }) => {
    switch (action.type) {
        case 'FETCH_CONTACTS':
            return [...state, ...action.payload]
        default:
            return state
    }
}