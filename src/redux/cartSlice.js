import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    isOpen: false,
  },
  reducers: {
    addtoCart: (state, action) => {
      //            state.cart.push(action.payload)
      const item = action.payload;
      let productItem = state.cart.find((product) => product.id === item.id);
      if (productItem) {
        productItem.quantity += 1;
      } else {
        state.cart = [item, ...state.cart];
      }
    },
    incrementQty: (state, action) => {
      const index = action.payload;

      state.cart = state.cart.map((elem) => {
        if (elem.id === index) {
          elem.quantity++;
        }
        return elem;
      });
    },
    decreaseQty: (state, action) => {
      const index = action.payload;

      state.cart = state.cart.map((elem) => {
        if (elem.id === index && elem.quantity > 1) {
          elem.quantity--;
        }
        return elem;
      });
    },
    removeFromCart: (state, action) => {
      //            state.cart = state.cart.findIndex(elem => elem.id !== action.payload.id)
      const id = action.payload;

      const index = state.cart.findIndex(
        elem => elem.id === parseInt(id)
      );

      state.cart.splice(index,1);
      //            state.cart = state.cart.filter((product) => product.id !== item.id);
    },
    deleteAll: (state, action) => {
        state.cart=[];
    }
  },
});

export default cartSlice.reducer;
export const { addtoCart, incrementQty, decreaseQty, removeFromCart, deleteAll } =
  cartSlice.actions;
