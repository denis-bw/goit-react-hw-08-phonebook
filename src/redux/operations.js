import { createAsyncThunk } from "@reduxjs/toolkit"
// import { fethUser } from "api/fethUser";
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
    
const token = {
    setToken(token) {
        axios.defaults.headers.Authorization = `Bearer ${token}`;
    },
    unsetToken() {
        axios.defaults.headers.Authorization = '';
    }
}


export const fetchAuthorizationUser = createAsyncThunk('userDetails/fetchAuthorizationUser',
    async (dataUser, thunkApi) => {
        try {   
             
            const {data} = await axios.post('/users/signup', dataUser)
            token.setToken(data.token)
            return data;

        } catch (err) {    
            return thunkApi.rejectWithValue(err.massage)
        }

    });

export const fetchLogUser = createAsyncThunk('userDetails/fetchLogUser',
    async (dataUser, thunkApi) => {
        try {   
             
            const { data } = await axios.post('/users/login', dataUser)
            token.setToken(data.token)
            return data;

        } catch (err) { 
            return thunkApi.rejectWithValue(err.massage)
        }
});

export const fetchLogout = createAsyncThunk('userDetails/fetchLogIn',
    async (_, thunkApi) => {
        try {   
             
            await axios.post('/users/logout')
            token.unsetToken()

        } catch (err) {  
            return thunkApi.rejectWithValue(err.massage)
        }
    });

export const refreshUser = createAsyncThunk('userDetails/refreshUser',
    async (_, thunkApi) => {
        
        const { userDetails } = thunkApi.getState()
        if (!userDetails.token) throw new Error('cannot read properties of undefined reading token');
        token.setToken(userDetails.token);
        
        try {
            const res = await axios.get('/users/current')
            return res.data;

        } catch (error) {
            console.log(error,'err')
            return thunkApi.rejectWithValue(error.massage)
        }
    })

    // ------ contact Thunk--------------------------------------

export const fetchContactsDataThunk = createAsyncThunk('contactsDetails/fetchContactsDataThunk',
    async (_, thunkApi) => {
        try {
            const {data}  = await axios.get('/contacts')
            return data;
        }
        catch (error) {
            return thunkApi.rejectWithValue(error.massage)
        }
}
)

export const fetchContactsAddThunk = createAsyncThunk('contactsDetails/fetchContactsAddThunk',
    async (contact, thunkApi) => {
        try {
           
            const { data }  = await axios.post('/contacts', contact)
            return data;
        }
        catch (error) {
            return thunkApi.rejectWithValue(error.massage)
        }
})

export const fetchContactsDeleteThunk = createAsyncThunk('contactsDetails/fetchContactsDeleteThunk',
    async (contactId, thunkApi) => {
        try {
            const { data }  = await axios.delete(`/contacts/${contactId}`)
            return data;
        }
        catch (error) {
            return thunkApi.rejectWithValue(error.massage)
        }
})
