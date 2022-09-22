import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../../cartItems';

const initialState = {
  cartItems,
  amount: 0,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    increase: (state, action) => {
      const foundItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      foundItem.amount += 1;
    },
    decrease: (state, action) => {
      const foundItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      foundItem.amount -= 1;
      state.cartItems = state.cartItems.filter((item) => item.amount);
    },
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
    calculateTotal: (state) => {
      state.total = state.cartItems.reduce(
        (cartTotal, currentItem) =>
          (cartTotal += currentItem.price * currentItem.amount),
        0
      );
    },
    calculateTotalAmount: (state) => {
      state.amount = state.cartItems.reduce(
        (cartTotalAmount, currentItem) =>
          (cartTotalAmount += currentItem.amount),
        0
      );
    },
  },
});

export const {
  clearCart,
  increase,
  decrease,
  removeItem,
  calculateTotal,
  calculateTotalAmount,
} = cartSlice.actions;
export default cartSlice.reducer;
