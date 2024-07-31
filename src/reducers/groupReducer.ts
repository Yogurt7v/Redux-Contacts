import { GroupContactsDto } from "../types/dto/GroupContactsDto";

const initialState: GroupContactsDto[] = []

export const groupReducer = (state: GroupContactsDto[] = initialState, action: { type: string, payload: GroupContactsDto[] }) => {
    switch (action.type) {
        case 'FETCH_GROUP_CONTACTS':
            return [...action.payload]
        default:
            return state
    }
}