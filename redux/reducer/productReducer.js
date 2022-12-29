import { actionTypes } from "../constant/actionsTypes";

const initialState = {
    allProducts: [],
    selectedSingleProduct: [],
    selectedSingleCategory: [],
    selectedProductsByCategory: []
}

export const setProductReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.FETCH_ALL_PRODUCTS:
            return { ...state, allProducts: payload }

        case actionTypes.SELECTED_SINGLE_PRODUCT:
            return { ...state, selectedSingleProduct: payload }

        case actionTypes.REMOVE_SELECTED_PRODUCT:
            return { ...state, selectedSingleProduct: {} }

        case actionTypes.SELECTED_SINGLE_CATEGORY:
            return { ...state, selectedSingleCategory: payload }

        case actionTypes.REMOVE_SELECTED_CATEGORY:
            return { ...state, selectedSingleCategory: {} }

        case actionTypes.FETCH_PRODUCTS_BY_CATEGORY:
            return { ...state, selectedProductsByCategory: payload }

        case actionTypes.REMOVE_SELECTED_CATEGORY_PRODUCTS:
            return { ...state, selectedProductsByCategory: [] }

        default:
            return state
    }
}