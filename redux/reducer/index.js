import { combineReducers } from "redux";
import {setProductReducer} from './productReducer'
import {setCartReducer} from './cartReducer'
import { setCheckoutReducer } from "./checkoutReducer";

const reducer = combineReducers({
    setProductReducer, setCartReducer, setCheckoutReducer
})

export default reducer