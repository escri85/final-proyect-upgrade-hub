import { GET_PRODUCTS, GET_PRODUCTS_ERROR } from "../actions/apiActions";
const INITIAL_STATE = ({

    products: [],

    error: null,

});

export const apiReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case GET_PRODUCTS : 
            return {

                ...state,
                products: action.payload,
                
            }

        case GET_PRODUCTS_ERROR: 
            return { 
                ...state,
                error: true,
            }    
        
        default:
            return state

    }

}