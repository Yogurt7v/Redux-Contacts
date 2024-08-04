import { ContactDto } from "src/types/dto/ContactDto";
import { makeAutoObservable } from "mobx";
import { fetchContacts } from "src/api/contactsFetch";


export const ContactsStore = makeAutoObservable({
    contacts: [] as ContactDto[] | [],
    *getContacts() {
        const response: ContactDto[] = yield fetchContacts()
        this.contacts = response
    }
})