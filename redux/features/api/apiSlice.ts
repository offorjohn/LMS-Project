import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { userLoggedIn } from "../auth/authSlice";

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_SERVER_URI,

    }),
    endpoints: (builder) => ({
        refreshToken: builder.query({
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            query: (data) => ({
                url: "refresh",
                method: "GET",
                credentials: "include" as const,
            }),
        }),
        loadUser: builder.query({
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            query: (data) => ({
                url:"me",
                method: "GET",
                credentials: "include" as const,
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch}) {
                try {
                    const result = await queryFulfilled;
                    dispatch(
                        userLoggedIn({
                            accessToken: result.data.accessToken,
                            user: result.data.user,
                        })
                    );
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                } catch (error:any) {
                    console.log(error);
                }
            }
        })
    }),
});

export const {useRefreshTokenQuery, useLoadUserQuery} = apiSlice;