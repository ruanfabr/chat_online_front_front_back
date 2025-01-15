import { createSlice } from "@reduxjs/toolkit";

export const user = createSlice({
    name: 'user',
    initialState: {
        name: '',
        chatRoom: ''
    },
    reducers: {
        changeUserName: (state, { payload }) => {
            return { ...state, name: payload }
        },

        setChatRoom: (state, { payload }) => {
            return {...state, chatRoom: payload}
        }
    }
})

export const { changeUserName, setChatRoom } = user.actions

export default user.reducer