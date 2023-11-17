import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl:  "https://catfact.ninja/"}),
    endpoints: (builder) => ({
        getData: builder.query({
            query: () => 'fact'
        })
    })
})

export const { useGetDataQuery } = api;