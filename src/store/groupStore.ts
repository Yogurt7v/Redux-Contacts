import { makeAutoObservable } from "mobx";
import { fetchGroupContacts } from "src/api/groupFetch";
import { GroupContactsDto } from "src/types/dto/GroupContactsDto";


export const GroupsStore = makeAutoObservable({
    groups: [] as GroupContactsDto[] | [],
    *getGroups() {
        const response: GroupContactsDto[] = yield fetchGroupContacts()
        this.groups = response
    }
})