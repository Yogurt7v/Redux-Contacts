import { DATA_GROUP_CONTACT } from "../__data__";
import { GroupContactsDto } from "../types/dto/GroupContactsDto";


export async function fetchGroupContacts(): Promise<GroupContactsDto[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(DATA_GROUP_CONTACT)
        }, 1100);
    })
}
