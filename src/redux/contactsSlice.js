import { createSlice } from "@reduxjs/toolkit"
import { initialDetailsState } from './contactsDetails'
import { fetchContactsDataThunk, fetchContactsAddThunk, fetchContactsDeleteThunk  } from "./operations";



 const contactsDetailsSlice = createSlice({
    name: 'contactsDetails',
    initialState: initialDetailsState,
    reducers: {
        filterOnName: (state, action) => {
            state.filter = action.payload.toUpperCase();
        }
     },
     extraReducers: builder => builder
         .addCase(fetchContactsDataThunk.pending, (state, action) => {
             state.contacts.isLoading = true;
             state.contacts.error = null;
         })
         .addCase(fetchContactsDataThunk.fulfilled, (state, action) => { 
             state.contacts.isLoading = false;
             state.contacts.items = action.payload;         
         })
        .addCase(fetchContactsDataThunk.rejected, (state, action) => { 
            state.contacts.isLoading = false;
            state.contacts.error = action.payload ?? action.error.message;
        })
         .addCase(fetchContactsDeleteThunk.pending, (state, action) => {
             state.contacts.isLoading = true;
             state.contacts.error = null;
         })
        .addCase(fetchContactsDeleteThunk.fulfilled, (state, action) => { 
            state.contacts.isLoading = false;
            const index = state.contacts.items.findIndex(contact => contact.id === action.payload.id)
            state.contacts.items.splice(index, 1);
            state.contacts.error = null;
         })
        .addCase(fetchContactsDeleteThunk.rejected, (state, action) => { 
            state.contacts.isLoading = false;
            state.contacts.error = action.payload ?? action.error.message;
        })
         .addCase(fetchContactsAddThunk.pending, (state, action) => {
             state.contacts.isLoading = true;
             state.contacts.error = null;
         })
        .addCase(fetchContactsAddThunk.fulfilled, (state, action) => { 
            state.contacts.isLoading = false;
            state.contacts.error = null;
            state.contacts.items = [...state.contacts.items, action.payload ];
         })
        .addCase(fetchContactsAddThunk.rejected, (state, action) => { 
            state.contacts.isLoading = false;
            state.contacts.error = action.error.message;
         })
})


export const { filterOnName } = contactsDetailsSlice.actions;
export const contactsDetailsReducer = contactsDetailsSlice.reducer;