import { createSlice } from "@reduxjs/toolkit";

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: [
        {
            id: 1,
            name: 'Sophia',
            num: '+38 096 945 45 88'
        }
    ],
    reducers: {
        addContact(state, action){
            return state
        }
     }
})

export const { addContact } = contactsSlice.actions
export const contactsReducer = contactsSlice.reducer