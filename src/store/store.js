import { configureStore } from "@reduxjs/toolkit";
import { createStore } from "redux";
import reducer from "./redusers";

const store = configureStore({
    reducer
});

export default store