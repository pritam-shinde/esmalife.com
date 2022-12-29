import commerce from '../../lib/commerce'
import { actionTypes } from "../constant/actionsTypes";

export const retriveCart = () => async (dispatch, getState) => {
    const cart = await commerce.cart.retrieve();
    dispatch({ type: actionTypes.RETRIEVE_CART, payload: cart })
}

export const updateCart = (productId, quantity) => async (dispatch, getState) => {
    const cart = await commerce.cart.update(productId, { quantity });
    dispatch({ type: actionTypes.UPDATE_CART, payload: cart })
}

export const removeProductFromCart = (productId) => async (dispatch, getState) => {
    const cart = await commerce.cart.remove(productId);
    dispatch({ type: actionTypes.REMOVE_PRODUCT_FROM_CART, payload: cart })
}

export const makeCartEmpty = () => async (dispatch, getState) => {
    const cart = await commerce.cart.empty();
    dispatch({ type: actionTypes.EMPTY_CART, payload: cart })
}

export const addToCart = (productId, quantity) => async (dispatch, getState) => {
    const cart = commerce.cart.add(productId, quantity);
    dispatch({ type: actionTypes.ADD_TO_CART, payload: cart })
}

export const handleCartRefresh = () => async(dispatch, payload)=>{
    const cart = commerce.cart.refresh();
    dispatch({type: actionTypes.REFRESH_CART, payload: cart})
}