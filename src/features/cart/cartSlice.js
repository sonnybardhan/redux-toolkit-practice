import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import cartItems from '../../cartItems';
const URL = 'https://course-api.com/react-useReducer-cart-project';

export const getCartItems = createAsyncThunk('cart/getCartItems', async () => {
  try {
    const res = await axios(URL);
    return res.data;
  } catch (error) {
    return error;
  }
});
// export const getCartItems = createAsyncThunk('cart/getCartItems', () => {
//   return fetch(URL)
//     .then((res) => res.json())
//     .catch(console.log);
// });

const initialState = {
  cartItems: [],
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
  extraReducers: {
    [getCartItems.pending]: (state) => {
      state.isLoading = true;
    },
    [getCartItems.fulfilled]: (state, action) => {
      state.cartItems = action.payload;
      state.isLoading = false;
    },
    [getCartItems.rejected]: (state, action) => {
      console.log('Error response: ', action?.payload);
      state.isLoading = false;
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
