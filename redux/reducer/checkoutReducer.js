import { actionTypes } from "../constant/actionsTypes";

const initialState = {
    checkoutToken: null,
    shippingSubdivisions: [],
    shippingOptions: [],
    addressFormData: [],
    incomingOrder: []
}

export const setCheckoutReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.GENERATE_CHECKOUT_TOKEN:
            return { ...state, checkoutToken: payload }

        case actionTypes.FETCH_SHIPPING_SUBDIVISION:
            return { ...state, shippingSubdivisions: payload }

        case actionTypes.FETCH_SHIPPING_OPTIONS:
            return { ...state, shippingOptions: payload }

        case actionTypes.SET_ADDRESS_FORM_DATA:
            return { ...state, addressFormData: payload }

        case actionTypes.CAPTURE_CHECKOUT:
            return { ...state, incomingOrder: payload }

        default:
            return state
    }
}