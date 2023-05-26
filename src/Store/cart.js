import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  showCart: false,
  items: [],
  totalAmount: 0,
  totalQuantity: 0,
  changed: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    clearCart(state) {
      state = initialCartState;
      console.log("state changed");
    },
    retrieveData(state, action) {
      state.items = action.payload.items ? action.payload.items : [];
      state.totalAmount = action.payload.totalAmount;
      state.totalQuantity = action.payload.totalQuantity;
      state.changed = false;
    },
    addItem(state, action) {
      const item = action.payload;
      const itemToUpdateIndex = state.items.findIndex(
        (cartItem) => item.id === cartItem.id
      );

      const itemToUpdate = state.items[itemToUpdateIndex];
      let updatedCartItems;

      if (itemToUpdate) {
        const upatedItem = {
          ...itemToUpdate,
          amount: +itemToUpdate.amount + 1,
        };

        state.items[itemToUpdateIndex] = upatedItem;
        state.totalAmount = state.totalAmount + item.price;
      } else {
        const newItem = {
          ...item,
          amount: 1,
        };

        console.log(`1 ${newItem.title} added to the cart!`);
        state.items = [...state.items, newItem];
        state.totalAmount = state.totalAmount + item.price;
      }
      state.totalQuantity++;
      state.changed = true;
    },

    updateChangeState(state) {
      state.changed = false;
    },

    removeItem(state, action) {
      const item = action.payload;
      const itemToUpdateIndex = state.items.findIndex(
        (cartItem) => item.id === cartItem.id
      );

      const itemToUpdate = state.items[itemToUpdateIndex];
      let updatedCartItems;

      if (itemToUpdate.amount > 1) {
        const upatedItem = {
          ...itemToUpdate,
          amount: +itemToUpdate.amount - 1,
        };

        state.items[itemToUpdateIndex] = upatedItem;
        state.totalAmount = state.totalAmount - item.price;
      } else {
        state.items = state.items.filter((cartItem) => item.id !== cartItem.id);
        state.totalAmount = state.totalAmount - item.price;
      }
      state.totalQuantity--;
      state.changed = true;
    },
  },
});

export default cartSlice.reducer;

export const cartActions = cartSlice.actions;
