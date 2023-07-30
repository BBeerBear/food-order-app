import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCartItem(state, action) {
      // action is item
      const existingCartItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingCartItem) {
        existingCartItem.amount += 1;
      } else {
        // state.items.push(action.payload); this is not possible
        state.items = state.items.concat(action.payload);
      }
      state.totalAmount += action.payload.amount * action.payload.price;
    },
    removeCartItem(state, action) {
      const existingCartItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingCartItem.amount === 1) {
        state.items.filter((item) => item.id !== action.payload.id);
      } else {
        existingCartItem.amount -= 1;
      }
      state.totalAmount -= action.item.amount * action.item.price;
    },
    clearCartItems(state) {
      state.items = [];
      state.totalAmount = 0;
    },
  },
});

const store = configureStore({
  reducer: { cart: cartSlice.reducer },
});

export const cartActions = cartSlice.actions;
export default store;
