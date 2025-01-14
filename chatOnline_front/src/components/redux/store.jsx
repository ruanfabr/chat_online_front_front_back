import { configureStore } from "@reduxjs/toolkit";
import username from "./userSlice";

export default configureStore({
    reducer: {
        username: username
    },
})