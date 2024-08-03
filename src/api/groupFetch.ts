import { GroupContactsDto } from "../types/dto/GroupContactsDto";

export async function fetchGroupContacts(): Promise<GroupContactsDto[]> {
    return await fetch("http://localhost:3000/group_contacts").then((response) => {
        return response.json();
    })
}
