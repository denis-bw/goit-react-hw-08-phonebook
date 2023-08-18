import { createSlice } from "@reduxjs/toolkit"
import { initialUserState } from "./userDetails";
import { fetchAuthorizationUser, fetchLogUser, fetchLogout, refreshUser } from "./operations";


const authSlice = createSlice({
    name: 'userDetails',
    initialState: initialUserState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(refreshUser.pending, (state, action) => {            
            state.error = null;
         })
        .addCase(refreshUser.fulfilled, (state, action) => {        
            state.user.name = action.payload.name;     
            state.user.email = action.payload.email;
            state.isLoggedIn = true;
         })
         .addCase(fetchAuthorizationUser.pending, (state, action) => {

             state.error = null;
         })
        .addCase(fetchAuthorizationUser.fulfilled, (state, action) => { 
            state.user = action.payload.user;     
            state.token = action.payload.token;
            state.isLoggedIn = true;
         })
        .addCase(fetchAuthorizationUser.rejected, (state, action) => { 
            state.error = action.error.message;
        })
         .addCase(fetchLogUser.pending, (state, action) => {
             state.error = null;
         })
        .addCase(fetchLogUser.fulfilled, (state, action) => { 
            state.user = action.payload.user;     
            state.token = action.payload.token;
            state.isLoggedIn = true;
         })
        .addCase(fetchLogUser.rejected, (state, action) => { 
            console.log(action)
            state.error = action.error.message;
        })
          .addCase(fetchLogout.pending, (state, action) => {

             state.error = null;
         })
        .addCase(fetchLogout.fulfilled, (state, action) => { 
            state.user = null;     
            state.token = null;
            state.isLoggedIn = false;
         })
        .addCase(fetchLogout.rejected, (state, action) => { 
            state.error = action.error.message;
        })
})

export const reducerAuthorization = authSlice.reducer;
