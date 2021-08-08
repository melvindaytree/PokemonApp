import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { store } from '../app/store';

interface Pokemon {
    name: string;
}

export const pokeApiSlice = createApi({
    reducerPath: 'pokeApi',
    baseQuery: fetchBaseQuery({
      baseUrl: 'https://pokeapi.co/api/v2/',
    }),
    endpoints: (builder) => {
      return {
        fetchPokemon: builder.query<Pokemon[], number | void>({
          query(limit = 10) {
            return `/pokemon?limit=${limit}&offset=0`;
          },
        }),
  
        getPokemonByName: builder.query<Pokemon, string>({
          query: (name) => `pokemon/${name}`,
        }),

        getPokemonById: builder.query<Pokemon, number>({
            query: (id) => `pokemon/${id}`,
          }),
      };
    },
  });

  export const { useFetchPokemonQuery, useGetPokemonByNameQuery, useGetPokemonByIdQuery } = pokeApiSlice;