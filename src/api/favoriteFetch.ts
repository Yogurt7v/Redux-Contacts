import { FavoriteContactsDto } from "../types/dto/FavoriteContactsDto";
export async function fetchFavoriteContacts(): Promise<FavoriteContactsDto> {
    const result = await fetch("http://localhost:3003/data_contacts").then(response => response.json())
    return [result[0].id, result[1].id, result[2].id, result[3].id]
}
