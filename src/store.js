import { configureStore } from "@reduxjs/toolkit";
import themeReducer from './common/Header/ThemeSwitch/themeSlice';

export default configureStore({
    reducer: {
        theme: themeReducer,
    },
});