import { GroupContactsDto } from "../types/dto/GroupContactsDto";

const initialState: GroupContactsDto[] = []

export const contactsReducer = (state: GroupContactsDto[] = initialState, action: { type: string, payload: GroupContactsDto[] }) => {
    switch (action.type) {
        case 'FETCH_GROUP_CONTACTS':
            return [...state, ...action.payload]
        default:
            return state
    }
}