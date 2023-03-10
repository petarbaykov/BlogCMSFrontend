import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const authenticated = Cookies.get("authenticated");

export const userSlice = createSlice({
    name: 'auth',
    initialState: {
        user: Boolean(authenticated)
    },
    reducers: {
        setUser: (state, { payload }) => {
            state.user = payload;
        }
    }
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;