import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice ({
    name: 'cart',
    initialState: {
        cart: []
    },
    reducers: {
        addtoCart: (state, action) => {
//            state.cart.push(action.payload)
            const item = action.payload;
            let productItem = state.cart.find(product => product.id === item.id);
            if (productItem){
                productItem.quantity += 1;
            }else{
                state.cart = [item, ...state.cart]
            }
        },
        removeFromCart: (state, action) => {
//            state.cart = state.cart.findIndex(elem => elem.id !== action.payload.id)
            const item = action.payload;

            state.cart = state.cart.filter(product => product.id !== item.id);
            
        }
    }
});

export default cartSlice.reducer;
export const {addtoCart, removeFromCart} = cartSlice.actions;

