import { FavoriteContactsDto } from "../types/dto/FavoriteContactsDto";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchFavoriteContacts } from "src/api";
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

const initialState: FavoriteContactsDto = []

export const getFavoriteContactsAsync = createAsyncThunk('favorite/getFavoriteContactsAsync', async () => {
    const favContacts = await fetchFavoriteContacts()
    return favContacts
})

export const favContactsSlice = createSlice({
    name: 'favContacts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getFavoriteContactsAsync.fulfilled,
            (state: FavoriteContactsDto, action: PayloadAction<FavoriteContactsDto>): FavoriteContactsDto => {
                return [...action.payload]
            }
        );
    }
})