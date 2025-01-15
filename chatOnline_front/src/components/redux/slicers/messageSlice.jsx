import { createSlice } from "@reduxjs/toolkit";

export const message = createSlice({
    name: 'message',
    initialState: {
        contentMessage: ''
    },
    reducers: {
        sendMessage: (state, { payload }) => {
            return {...state, contentMessage: payload}
        }
    }
})

export const { sendMessage } = message.actions

export default message.reducer