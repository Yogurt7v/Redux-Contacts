import { GroupContactsDto } from "../types/dto/GroupContactsDto";
import { FETCH_GROUP_CONTACTS } from "../actions/actions";
import { ProjectActions } from "../actions/actions";


const initialState: GroupContactsDto[] = []

export const groupReducer = (state: GroupContactsDto[] = initialState, action: ProjectActions) => {
    switch (action.type) {
        case FETCH_GROUP_CONTACTS:
            return [...action.payload]
        default:
            return state
    }
}