import { ContactDto } from "../types/dto/ContactDto";
import { createSlice } from "@reduxjs/toolkit";
// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { fetchContacts } from "../api";
// import { PayloadAction } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"


const initialState: ContactDto[] | [] = []

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {},
})

export const contactsApiSlice = createApi({
    reducerPath: 'contactsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3003' }),
    endpoints: (builder) => ({
        getContacts: builder.query<ContactDto[], void>({
            query: () => '/data_contacts',
        }),
    }),
})

export const { useGetContactsQuery } = contactsApiSlice


// export const getContactsAsync = createAsyncThunk('contacts/getContactsAsync', async () => {
//     const contacts = await fetchContacts()
//     return contacts
// })

// export const contactsSlice = createSlice({
//     name: 'contacts',
//     initialState,
//     reducers: {},
//     extraReducers: (builder) => {
//         builder.addCase(getContactsAsync.fulfilled,
//             (state: ContactDto[], action: PayloadAction<ContactDto[]>): ContactDto[] => {
//                 return [...action.payload]
//             }
//         );
//     }
// })

