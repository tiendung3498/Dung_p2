import ProductReducer from './Product'
import { combineReducers } from 'redux';
import CartReducer from './Cart';
import UserReducer from './User';
const RootReducer = combineReducers({
    product: ProductReducer,
    cart: CartReducer,
    user: UserReducer
});
export default RootReducer;