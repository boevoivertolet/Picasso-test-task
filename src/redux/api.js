import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
      reducerPath: 'api',
      baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/todos' }),
      endpoints: (build) => ({
            getPosts: build.query({
                  query: () => '',
            }),
      }),
})

export const { useGetPostsQuery } = api
