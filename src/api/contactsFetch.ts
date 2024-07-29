import { DATA_CONTACT } from "../__data__";
import { ContactDto } from "../types/dto/ContactDto";


export async function fetchContacts(): Promise<ContactDto[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(DATA_CONTACT);
        }, 1500);
    });
}
