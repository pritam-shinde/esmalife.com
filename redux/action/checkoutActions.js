import commerce from "../../lib/commerce";
import { actionTypes } from "../constant/actionsTypes";

export const fetchShippingCountries = (checkoutTokenId) => async(dispatch, getState)=>{
    const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId);
    dispatch({type: actionTypes.FETCH_SHIPPING_COUNTRIES, payload: countries})
}

export const generateCheckoutToken = (cartId) => async(dispatch, getState) =>{
    const token = await commerce.checkout.generateToken(cartId, { type: 'cart' });
    dispatch({type: actionTypes.GENERATE_CHECKOUT_TOKEN, payload: token})
}