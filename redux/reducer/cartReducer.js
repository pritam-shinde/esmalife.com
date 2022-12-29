import { actionTypes } from "../constant/actionsTypes";

let initialState = {
    cart: []
}

export const setCartReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.RETRIEVE_CART:
            return { ...state, cart: payload }

        case actionTypes.UPDATE_CART:
            return { ...state, cart: payload }

        case actionTypes.REMOVE_PRODUCT_FROM_CART:
            return { ...state, cart: payload }

        case actionTypes.EMPTY_CART:
            return { ...state, cart: payload }

        case actionTypes.ADD_TO_CART:
            return { ...state, cart: payload }

        case actionTypes.REFRESH_CART:
            return { ...state, cart: payload }

        default:
            return state
    }
}