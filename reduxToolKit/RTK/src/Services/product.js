import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  endpoints: (builder) => ({
    getProductsByName: builder.query({
      query: (name) => ({
        url: `/products`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetProductsByNameQuery } = productApi;
