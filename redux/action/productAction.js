import commerce from "../../lib/commerce";
import { actionTypes } from "../constant/actionsTypes";

export const fetchAllProducts = () => async (dispatch, getState) => {
    const { data: products } = await commerce.products.list()
    dispatch({ type: actionTypes.FETCH_ALL_PRODUCTS, payload: products })
}

export const fetchSingleProduct = (permalink) => async (dispatch, getState) => {
    const product = await commerce.products.retrieve(permalink, { type: 'permalink' })
    dispatch({ type: actionTypes.SELECTED_SINGLE_PRODUCT, payload: product })
}

export const removeSelectedProduct = () => async (dispatch, getState) => {
    dispatch({ type: actionTypes.REMOVE_SELECTED_PRODUCT })
}

export const fetchSingleCategory = (slug) => async (dispatch, getState) => {
    const category = await commerce.categories.retrieve(slug, { type: "slug" });
    dispatch({ type: actionTypes.SELECTED_SINGLE_CATEGORY, payload: category })
}

export const removeSelectedCategory = () => async (dispatch, getState) => {
    dispatch({ type: actionTypes.REMOVE_SELECTED_CATEGORY })
}

export const fetchProductsByCategory = (slug) => async (dispatch, getState) => {
    const { data: products } = await commerce.products.list({ category_slug: slug });
    dispatch({ type: actionTypes.FETCH_PRODUCTS_BY_CATEGORY, payload: products })
}

export const removeProductsByCategory = () => async (dispatch, getState) => {
    dispatch({ type: actionTypes.REMOVE_SELECTED_CATEGORY_PRODUCTS })
}