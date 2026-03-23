//import the configureStore function from the @reduxjs/toolkit package
import { configureStore } from '@reduxjs/toolkit';

//import the userApi from the userApi.js file
import { userApi } from '../Services/userApi';  

//create the store using the configureStore function
export const store = configureStore({
    //add the userApi reducer to the store
    reducer: {
        [userApi.reducerPath]: userApi.reducer,
    },
    //add the userApi middleware to the store
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(userApi.middleware),
});

//export the store as the default export
export default store;
