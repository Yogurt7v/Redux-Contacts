import { makeAutoObservable } from "mobx";
import { fetchFavoriteContacts } from "src/api/favoriteFetch";
import { FavoriteContactsDto } from "src/types/dto/FavoriteContactsDto";


export const FavoriteContactsStore = makeAutoObservable({
    favoriteContacts: [] as FavoriteContactsDto[] | [],
    *getFavorite() {
        const response: FavoriteContactsDto[] = yield fetchFavoriteContacts()
        this.favoriteContacts = response
    }
})