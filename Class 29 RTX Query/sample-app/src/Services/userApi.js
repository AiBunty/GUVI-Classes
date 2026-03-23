import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({

    //unique key that defines where the Redux store will store our cache
    reducerPath: 'userApi',

    //base query is the function that will be used to fetch data from the server
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => 'users',
        }),
    }),
});

export const { useGetUsersQuery } = userApi;
