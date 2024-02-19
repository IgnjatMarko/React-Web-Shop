import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice ({
    name: 'cart',
    initialState: {
        cart: []
    },
    reducers: {
        addtoCart: (state, action) => {
            state.cart.push(action.payload)
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.findIndex(elem => elem.id !== action.payload.id)
            
        }
    }
});

export default cartSlice.reducer;
export const {addtoCart, removeFromCart} = cartSlice.actions;

