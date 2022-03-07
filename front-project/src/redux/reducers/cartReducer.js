import { ADD_CART, DELETE_CART } from "../actions/cartActions";

const PRODUCTS = [];

export const cartReducer = (state = PRODUCTS, action) => {

    const {payload, type} = action;

    switch(type) {

        case ADD_CART: 

            state.forEach((element=>{
                if(element.id === payload.id){
                    return console.log("Este esta repe");
                }
                return console.log("Este no esta repe");
            }))

            return [payload, ...state]

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