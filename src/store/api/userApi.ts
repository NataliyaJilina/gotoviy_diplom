import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../utils/baseUrl";
import { IDetailsResponse, IPropertyResponse } from "./types";

export const propertyApi = createApi({
  reducerPath: "propertyApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "9b8e6c1fd2msh08f241e0c727f8cp10e82ajsn87f924e539f6"
      );
      headers.set("X-RapidAPI-Host", "bayut.p.rapidapi.com");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getProperties: builder.query<IPropertyResponse, string>({
      query: (locationExternalIDs) => ({
        url: "/properties/list",
        params: {
          locationExternalIDs,
        },
      }),
    }),
  }),
});

export const { useGetPropertiesQuery } = propertyApi;

export const detailsApi = createApi({
  reducerPath: "detailsApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "9b8e6c1fd2msh08f241e0c727f8cp10e82ajsn87f924e539f6"
      );
      headers.set("X-RapidAPI-Host", "bayut.p.rapidapi.com");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getDetails: builder.query<IDetailsResponse, string>({
      query: (externalID) => ({
        url: "/properties/detail",
        params: {
          externalID,
        },
      }),
    }),
  }),
});

export const { useGetDetailsQuery } = detailsApi;

export const newDetailsApi = createApi({
  reducerPath: "newDetailsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://bayut.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set("x-rapidapi-host", "bayut.p.rapidapi.com");
      headers.set("x-rapidapi-key", "YOUR_RAPIDAPI_KEY");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getNewDetails: builder.query<IDetailsResponse, string>({
      query: (externalID) => ({
        url: "/properties/detail",
        params: {
          externalID,
        },
      }),
    }),
  }),
});

export const { useGetNewDetailsQuery } = newDetailsApi;
