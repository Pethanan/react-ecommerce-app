import { createSlice } from "@reduxjs/toolkit";

const initialShowCartState = { showCart: false, notification: null };

const showCartSlice = createSlice({
  name: "cart",
  initialState: initialShowCartState,
  reducers: {
    showCart(state) {
      state.showCart = true;
    },
    closeCart(state) {
      state.showCart = false;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export default showCartSlice.reducer;

export const showCartActions = showCartSlice.actions;
