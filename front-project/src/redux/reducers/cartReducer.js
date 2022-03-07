import { useState } from "react";
import { ADD_CART, DELETE_CART } from "../actions/cartActions";

const PRODUCTS = [];



export const cartReducer = (state = PRODUCTS, action) => {

    let {payload, type} = action;

    switch(type) {

        case ADD_CART: 

            const duplicatedProducts = state.find(element =>element._id === payload._id);

            if(duplicatedProducts) {

                duplicatedProducts.amount += 1;
                
                return [...state]

            }else{

                return [payload, ...state]

            }

        case DELETE_CART:

            const position = state.indexOf(payload);

            state.splice(position, 1)

            return [
                ...state,
            ]

            

        default: 
            return state;

    }   
}