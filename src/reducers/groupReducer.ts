import { GroupContactsDto } from "../types/dto/GroupContactsDto";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchGroupContacts } from "src/api";
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";


const initialState: GroupContactsDto[] = []

export const getGroupContactsAsync = createAsyncThunk('groups/getGroupContactsAsync', async () => {
    const groupContacts = await fetchGroupContacts()
    return groupContacts
})

export const groupSlice = createSlice({
    name: 'groups',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getGroupContactsAsync.fulfilled,
            (state: GroupContactsDto[], action: PayloadAction<GroupContactsDto[]>): GroupContactsDto[] => {
                return [...action.payload]
            }
        );
    }
})