import React from "react";
import { combineReducers } from "redux";
import { CartData, ProductDetials, ServicesShow } from "./reducer";

export const rootReducer = combineReducers({
    "serviceShow": ServicesShow,
    "CartData": CartData,
    "ProductDetials": ProductDetials
})