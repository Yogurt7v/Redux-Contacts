import { ContactDto } from "../types/dto/ContactDto";

export async function fetchContacts(): Promise<ContactDto[]> {
    return await fetch("http://localhost:3003/data_contacts").then((response) => {
        return response.json();
    })
}
