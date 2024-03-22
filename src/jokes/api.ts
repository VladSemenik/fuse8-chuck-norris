import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Joke, JokesList } from "./types";

export const jokesApi = createApi({
  reducerPath: "jokesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.chucknorris.io/jokes/" }),
  endpoints: (builder) => ({
    getRandomJoke: builder.query<Joke, void>({
      query: () => `random`,
    }),
    getJokes: builder.query<JokesList, string>({
      query: (query) => `search?query=${query}`,
    }),
  }),
});

export const { useGetRandomJokeQuery, useGetJokesQuery } = jokesApi;
