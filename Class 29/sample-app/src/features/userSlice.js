






// create the asyncthunk + slice in one step

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// import the api method to fetch the user data
import { fetchUserdata } from '../api/userApi';

// create the async thunk to fetch user data
export const fetchUserdata = createAsyncThunk(

// action name
"user/fetchUserdata";

//async function to fetch user data

async() => {

    //  call teh api

    const response = await fetchUserdata();

    // return the data

    return response.data;
}


// initial state of the redux store

const initialState = {

    user: [], // store the user list
    loading: false, // to track the loading state
    error: null // to store any error that occurs during the fetch
};
// create the slice

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},

    // handle the async thunk actions
    extraReducers: (builder) => {
        builder
        // when api reqest starts
        .addCase(fetchUserdata.pending, (state) => {
            state.loading = true;
            
        })

        //WHEN THE API REQEST IS SUCEEDED
        .addCase(fetchUserdata.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload; // update the user list with the fetched data
        })

        // when the api request fails
        .addCase(fetchUserdata.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message; // store the error message
        });

    }
});

// export the reducer to be used in the store
export default userSlice.reducer;
