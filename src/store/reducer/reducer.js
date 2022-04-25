import { combineReducers } from '@reduxjs/toolkit';

import AuthReducer from './auth_reducer/Auth_Reducer';
import  ProductReducer  from './product_reducer/Product_Reducer';

const Reducer = combineReducers(
    { AuthReducer,ProductReducer }
)


export default Reducer