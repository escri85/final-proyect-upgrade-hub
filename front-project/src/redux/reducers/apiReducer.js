import { GET_PRODUCTS } from "../actions/apiActions";

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

        default:
            return state

    }

}