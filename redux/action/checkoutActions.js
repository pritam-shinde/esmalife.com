import commerce from "../../lib/commerce";
import { actionTypes } from "../constant/actionsTypes";

export const generateCheckoutToken = (cartId) => async(dispatch, getState) =>{
    const token = await commerce.checkout.generateToken(cartId, { type: 'cart' });
    dispatch({type: actionTypes.GENERATE_CHECKOUT_TOKEN, payload: token})
}

export const fetchShippingSubdivison = (checkoutTokenId, countryCode)=> async(dispatch, getState)=>{
    const { subdivisions } = await commerce.services.localeListShippingSubdivisions(checkoutTokenId, countryCode);
    dispatch({type: actionTypes.FETCH_SHIPPING_SUBDIVISION, payload: subdivisions})
}

export const fetchShippingOptions = (checkTokenId, country, region) => async(dispatch, getState)=>{
    const options = await commerce.checkout.getShippingOptions(checkTokenId, { country, region });
    dispatch({type: actionTypes.FETCH_SHIPPING_OPTIONS, payload: options})
}

export const setAddressFormData = (data) => async(dispatch, getState)=>{
    dispatch({type: actionTypes.SET_ADDRESS_FORM_DATA, payload: data})
}

export const captureCheckout = (checkoutTokenId, newOrder) => async(dispatch, getState)=>{
    const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);
    // console.log('inc', incomingOrder)
    dispatch({type: actionTypes.CAPTURE_CHECKOUT, payload: incomingOrder})
}