import { actionTypes } from "../constant/actionsTypes";

const initialState = {
    shippingCountries: [],
    checkoutToken: null
}

export const setCheckoutReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.FETCH_SHIPPING_COUNTRIES:
            return { ...state, shippingCountries: payload }

        case actionTypes.GENERATE_CHECKOUT_TOKEN:
            return { ...state, checkoutToken: payload }

        default:
            return state
    }
}