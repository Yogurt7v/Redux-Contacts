import { DATA_CONTACT } from "../__data__";
import { FavoriteContactsDto } from "../types/dto/FavoriteContactsDto";


export async function fetchFavoriteContacts(): Promise<FavoriteContactsDto> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([DATA_CONTACT[0].id, DATA_CONTACT[1].id, DATA_CONTACT[2].id, DATA_CONTACT[3].id])
        }, 1200);
    })
}
