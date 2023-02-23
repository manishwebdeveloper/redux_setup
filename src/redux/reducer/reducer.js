import { Action_type } from "../constant/actionsType";

//SERVICES_SHOW
export const ServicesShow = (state = { servicesData: [] }, { type, payload }) => {
    switch (type) {
        // --request
        case Action_type.SERVICES_REQ:
            return { ...state, loading: true }
            break;
        // --success
        case Action_type.SERVICES_SHOW:
            return { ...state, loading: false, servicesData: payload }
            break;
        // --fail
        case Action_type.SERVICES_FAIL:
            return { loading: false, ...state }
            break;
        default:
            return state
    }
}

//Cart_Data
export const CartData = (state = { cartData: [] }, { type, payload }) => {
    switch (type) {
        case Action_type.CARTDATAREQ:
            return { ...state, loading: true }
        // --
        case Action_type.CARTDATA:
            return { ...state, loading: false, cartData: payload }
        // --
        case Action_type.CARTDATAFAIL:
            return { ...state, loading: false }
        default:
            return state
    }
}

// dispatch({ type: Action_type.PRODUCTDETIALS_REQ })
export const ProductDetials = (state = { productData: [] }, { type, payload }) => {
    switch (type) {
        case Action_type.PRODUCTDETIALS_REMOVE:
            return { ...state, loading: true, productData: [] }
            break;
        case Action_type.PRODUCTDETIALS_REQ:
            return { ...state, loading: true }
            break;
        case Action_type.PRODUCTDETIALS_SUCCESS:
            return { ...state, loading: false, productData: payload }
            break;
        case Action_type.PRODUCTDETIALS_FAIL:
            return { loading: true }
            break;
        default:
            return state
    }
}