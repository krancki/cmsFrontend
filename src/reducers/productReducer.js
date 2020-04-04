import {
    FETCH_PRODUCTS,
    FETCH_PRODUCT,
    REMOVE_PRODUCT,
    INSERT_PRODUCT,
    EDIT_PRODUCT_DATA,
    EDIT_PRODUCT
} from "../actions/types";

export default function reducer(state = {
    editProductData: {
        id: null,
        title: "",
        description: "",
        price: 0
    }
}, action) {

    switch (action.type) {
        case FETCH_PRODUCTS : {
            state = {...state, products: action.payload.data};
            break;
        }
        case FETCH_PRODUCT: {
            break;
        }
        case REMOVE_PRODUCT: {
            state = {...state, products: state.products.filter(product => product.id !== action.payload.productId)};
            break;
        }
        case INSERT_PRODUCT: {
            state = {...state, successInserted: true};
            break;
        }
        case EDIT_PRODUCT_DATA: {
            state = {...state, editProductData: action.payload};
            break;
        }
        case EDIT_PRODUCT: {

            const productList = state.products.map(product => {
                if (product.id === action.payload.id) {
                    return action.payload
                }
                 return product
            });

            state = {...state, products: productList};
            break;
        }

    }

    return state;

}