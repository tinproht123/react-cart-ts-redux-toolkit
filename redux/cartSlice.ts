import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import data from '../data';

export type CartType = {
  id: number;
  title: string;
  price: number;
  image: string;
  amount: number;
};

interface CartState {
  cartItems: CartType[];
  total: number;
  amount: number;
}

const initialState: CartState = {
  cartItems: data,
  total: 0,
  amount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      return { ...state, cartItems: [] };
    },
    getTotals: (state) => {
      let { total, amount } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;
          const itemTotal = price * amount;
          cartTotal.amount += amount;
          cartTotal.total += itemTotal;
          return cartTotal;
        },
        {
          total: 0,
          amount: 0,
        }
      );
      total = parseFloat(total).toFixed(2);
      return { ...state, total, amount };
    },
    removeItem: (state, action: PayloadAction<CartType>) => {
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    },
    incrementAmount: (state, action: PayloadAction<CartType>) => {
      let tempCart = state.cartItems
        .map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, amount: item.amount + 1 };
          }
          return item;
        })
        .filter((item) => item.amount !== 0);

      return { ...state, cartItems: tempCart };
    },
    decrementAmount: (state, action: PayloadAction<CartType>) => {
      let tempCart = state.cartItems
        .map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, amount: item.amount - 1 };
          }
          return item;
        })
        .filter((item) => item.amount !== 0);

      return { ...state, cartItems: tempCart };
    },
  },
});

export const {
  clearCart,
  getTotals,
  removeItem,
  incrementAmount,
  decrementAmount,
} = cartSlice.actions;

export default cartSlice.reducer;
