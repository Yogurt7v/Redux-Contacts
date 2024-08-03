import { ContactDto } from "../types/dto/ContactDto";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchContacts } from "../api";
import { PayloadAction } from "@reduxjs/toolkit";


const initialState: ContactDto[] | [] = []

export const getContactsAsync = createAsyncThunk('contacts/getContactsAsync', async () => {
    const contacts = await fetchContacts()
    return contacts
})

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getContactsAsync.fulfilled,
            (state: ContactDto[], action: PayloadAction<ContactDto[]>): ContactDto[] => {
                return [...action.payload]
            }
        );
    }
})
