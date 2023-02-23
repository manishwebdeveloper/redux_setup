import axios from "axios"
import { Action_type } from "../constant/actionsType"


//SERVICES_SHOW
export const Services_show = () => async (dispatch) => {
    // --request
    dispatch({ type: Action_type.SERVICES_REQ })
    // --call api
    await axios.get("https://fakestoreapi.com/products").then((res) => {
        // --success--
        dispatch({ type: Action_type.SERVICES_SHOW, payload: res.data })
    }).catch(() => {
        // --fail
        dispatch({ type: Action_type.SERVICES_FAIL })
    })
}

//service fliter by cat
export const Services_filter = () => async (dispatch) => {
    // --request
    dispatch({ type: Action_type.SERVICES_REQ })
    // --call api
    await axios.get("https://fakestoreapi.com/products").then((res) => {
        const resData = res.data
        // --success--
        dispatch({ type: Action_type.SERVICES_SHOW, payload: res.data })
    }).catch(() => {
        // --fail
        dispatch({ type: Action_type.SERVICES_FAIL })
    })
}


// CARTDATA
export const Cart_Data = () => async (dispatch) => {
    dispatch({ type: Action_type.CARTDATAREQ })
    // --api call--
    await axios.get("https://fakestoreapi.com/carts").then((res) => {
        console.log(res, "res----")
        dispatch({ type: Action_type.CARTDATA, payload: res.data })
    }).catch(() => {
        dispatch({ type: Action_type.CARTDATAFAIL })
    })
}

//PRODUCTDETIALS
export const Product_detials = (e) => async (dispatch) => {

    dispatch({ type: Action_type.PRODUCTDETIALS_REQ })
    // --api call
    await axios.get(`https://fakestoreapi.com/products/${e}`).then((res) => {
        console.log(res)
        dispatch({ type: Action_type.PRODUCTDETIALS_SUCCESS, payload: res.data })
    }).catch(() => {
        dispatch({ type: Action_type.PRODUCTDETIALS_FAIL })
    })
}

// --
export const Product_detials_remove = () => (dispatch) => {
    dispatch({ type: Action_type.PRODUCTDETIALS_REMOVE })
}
