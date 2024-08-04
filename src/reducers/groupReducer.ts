import { GroupContactsDto } from "../types/dto/GroupContactsDto";
import { createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { fetchGroupContacts } from "src/api";
// import { PayloadAction } from "@reduxjs/toolkit";


const initialState: GroupContactsDto[] = []

export const groupSlice = createSlice({
    name: 'groups',
    initialState,
    reducers: {},
})

export const groupApiSlice = createApi({
    reducerPath: 'groupApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3003' }),
    endpoints: (builder) => ({
        getGroupContacts: builder.query<GroupContactsDto[], void>({
            query: () => '/group_contacts',
        }),
    }),
})

export const { useGetGroupContactsQuery } = groupApiSlice

// export const getGroupContactsAsync = createAsyncThunk('groups/getGroupContactsAsync', async () => {
//     const groupContacts = await fetchGroupContacts()
//     return groupContacts
// })

// export const groupSlice = createSlice({
//     name: 'groups',
//     initialState,
//     reducers: {},
//     extraReducers: (builder) => {
//         builder.addCase(getGroupContactsAsync.fulfilled,
//             (state: GroupContactsDto[], action: PayloadAction<GroupContactsDto[]>): GroupContactsDto[] => {
//                 return [...action.payload]
//             }
//         );
//     }
// })