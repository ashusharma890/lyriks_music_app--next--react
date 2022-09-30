import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';


  export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
      baseUrl:'https://shazam-core.p.rapidapi.com/v1',
      prepareHeaders: (headers) => {
        headers.set( 'X-RapidAPI-Key','3fe1fe0973msh820bd2055f350f4p102b5ajsna05ffa7bb447');

        return headers;
      },
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({query: (genre) => 
          '/charts/world'}),
        getSongDetails: builder.query({ query: ({ songid }) =>
         `/tracks/details?track_id=${songid}` }),
         getSongRelated: builder.query({ query: ({ songid }) => 
         `/tracks/related?track_id=${songid}` }),
         getArtistDetails: builder.query({ query: (artistId) => 
          `/artists/details?artist_id=${artistId}` }),
          getSongsByGenre: builder.query({ query: (genre) => 
          `/charts/genre-world?genre_code=${genre}` }),
          getSongsByCountry: builder.query({ query: (countryCode) => 
          `/charts/country?country_code=${countryCode}` }),
          getSongsBySearch: builder.query({ query: (searchTerm) => 
          `/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}` }),
    }), 
  });

  export const {
    useGetTopChartsQuery,
    useGetSongDetailsQuery,
    useGetSongRelatedQuery,
    useGetArtistDetailsQuery,
    useGetSongsByCountryQuery,
    useGetSongsByGenreQuery,
    useGetSongsBySearchQuery,
  } = shazamCoreApi;