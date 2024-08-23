import { createSlice } from "@reduxjs/toolkit";

const ticketSlice = createSlice({
    name: "ticketSlice",
    initialState: [],
    reducers: {
        addWidget: (state, action) => {
            state.push(action.payload);
            return state;
        },
        toggleWidget: (state, action) => {
            state[action.payload].checked = !state[action.payload].checked;
            return state;
        },
        deleteWidget: (state, action) => {
            const index = action.payload;
            if (index >= 0 && index < state.length) {
              state.splice(index, 1);
            }
        }
    }
})

export const { addWidget, toggleWidget, deleteWidget } = ticketSlice.actions;

export default ticketSlice.reducer; 