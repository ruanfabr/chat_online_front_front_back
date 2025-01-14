import { createSlice } from "@reduxjs/toolkit";

export const username = createSlice({
    name: 'username',
    initialState: {
        name: ''
    },
    reducers: {
        changeUserName: (state, { payload }) => {
            return { ...state, name: payload }
        }
    }
})

export const { changeUserName } = username.actions

export default username.reducer