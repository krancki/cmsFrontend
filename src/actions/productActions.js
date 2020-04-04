import {
    EDIT_PRODUCT,
    EDIT_PRODUCT_DATA,
    FETCH_PRODUCT,
    FETCH_PRODUCTS,
    INSERT_PRODUCT, NOTIFICATION,
    REMOVE_PRODUCT,
    SERVER_ADDRES
} from "./types"
import axios from "axios";


export function fetchProductById(productId) {
    return function (dispatch) {
        get("/api/product/" + productId)
            .then(product => {
                dispatch({type: FETCH_PRODUCT, payload: product});
            });
    }
}

export function fetchProduct() {
    return function (dispatch) {
        axios.get("/api/product")
            .then(products => {
                    dispatch({type: FETCH_PRODUCTS, payload: products})
                }
            ).catch(reason => {
            dispatch({type: NOTIFICATION, payload: {status: "error", info: reason.response.data.message}});
        })
    }
}

export function editProduct(editedProduct) {
    return function (dispatch) {

        axios.put("/api/product/" + editedProduct.id, {
            title: editedProduct.title,
            description: editedProduct.description,
            price: editedProduct.price
        }).then(() => {
            dispatch({type: EDIT_PRODUCT, payload: editedProduct});
            dispatch({type: NOTIFICATION, payload: {status: "success", info: "You edit product"}});
        }).catch(reason => {
            dispatch({type: NOTIFICATION, payload: {status: "error", info: reason.response.data.message}});
        })
    }
}

export function sendProjectToEditModal(editedProduct) {
    return function (dispatch) {
        dispatch({type: EDIT_PRODUCT_DATA, payload: editedProduct});
    }
}

export function insertProduct(productData) {
    return function (dispatch) {

        axios.post("/api/product",
            productData
        ).then(value => {
            dispatch({type: INSERT_PRODUCT, payload: productData});
            dispatch({type: NOTIFICATION, payload: {status: "success", info: "Product has been inserted"}});
        }).catch(reason => {
            dispatch({type: NOTIFICATION, payload: {status: "error", info: reason.response.data.message}});
        })
    }
}


export function deleteProduct(productId) {
    return function (dispatch) {
        axios.delete("/api/product/" + productId)
            .then(() => {
                dispatch({type: REMOVE_PRODUCT, payload: {productId: productId}});
                dispatch({type: NOTIFICATION, payload: {status: "success", info: "Product has been deleted"}});
            })
            .catch(reason => {
                dispatch({type: NOTIFICATION, payload: {status: "error", info: reason.response.data.message}});
            })
    }
}
