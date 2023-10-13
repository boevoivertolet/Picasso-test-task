import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
      reducerPath: 'api',
      baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
      endpoints: (build) => ({
            getPosts: build.query({
                  query: ({ limit = 7, start = 0 }) => ({
                        url: '/posts',
                        params: {
                              _limit: limit,
                              _start: start,
                        },
                  }),
            }),
      }),
})

export const { useGetPostsQuery } = api
