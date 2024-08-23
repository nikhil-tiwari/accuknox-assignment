import { configureStore } from "@reduxjs/toolkit";
import cspmReducer from "./slices/cspm";
import cwppReducer from "./slices/cwpp";
import imageReducer from "./slices/image";
import ticketReducer from "./slices/ticket";

export const store = configureStore({
    reducer: {
        cspmWidgets: cspmReducer,
        cwppWidgets: cwppReducer,
        imageWidgets: imageReducer,
        ticketWidgets: ticketReducer
    }
})