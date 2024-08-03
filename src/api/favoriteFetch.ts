import { FavoriteContactsDto } from "../types/dto/FavoriteContactsDto";

export async function fetchFavoriteContacts(): Promise<FavoriteContactsDto> {
    let res = await fetch("http://localhost:3000/data_contacts").then(response => response.json())
    return [res[0].id, res[1].id, res[2].id, res[3].id]
}
