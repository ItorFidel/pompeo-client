import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import {
  ProductProps,
  ProductQueryProps,
  UserProps,
  LoginProps,
  TransactionProps,
  SendEmailProps,
} from "./types";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    // baseUrl: "http://localhost:8080/api/",
    baseUrl: "https://pompeo-server.onrender.com/api/",
    credentials: "include",
  }),
  refetchOnReconnect: true,
  tagTypes: ["getProducts"],
  endpoints: (build) => ({
    register: build.mutation<string, UserProps>({
      query: (body) => ({
        url: "auth/register",
        method: "post",
        body,
      }),
    }),
    login: build.mutation<UserProps, LoginProps>({
      query: (body) => ({
        url: "auth/login",
        method: "post",
        body,
      }),
    }),
    logout: build.mutation<void, void>({
      query: () => ({
        url: "/auth/logout",
        method: "post",
      }),
    }),
    sendEmail: build.mutation<void, SendEmailProps>({
      query: (body) => ({
        url: "/auth/sendEmail",
        method: "post",
        body,
      }),
    }),
    getProducts: build.query<Array<ProductProps>, ProductQueryProps>({
      query: (query: ProductQueryProps) => ({
        url: `product?category=${query.category}&homePage=${query.homePage}&relatedItems=${query.relatedItems}`,
      }),
    }),
    updateUser: build.mutation<Array<UserProps>, UserProps>({
      query: (body) => ({
        url: `user/${body._id}`,
        method: "put",
        body,
      }),
    }),
    order: build.mutation<void, TransactionProps>({
      query: (body) => ({
        url: "transaction",
        method: "post",
        body,
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useLogoutMutation,
  useLoginMutation,
  useSendEmailMutation,
  useGetProductsQuery,
  useUpdateUserMutation,
  useOrderMutation,
} = api;
