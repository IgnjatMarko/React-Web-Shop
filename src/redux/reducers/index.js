import {combineReducers} from 'redux';
import { productReducer, selectedProductReducer } from './productReducer';
import cartSlice from '../cartSlice';


const reducers = combineReducers({
    allProducts: productReducer,
    product: selectedProductReducer,
    cart: cartSlice
});

export default reducers;