import { configureStore } from "@reduxjs/toolkit";
import user from "./slicers/userSlice";
import message from "./slicers/messageSlice";

export default configureStore({
    reducer: {
        user: user,
        message: message 
    },
})