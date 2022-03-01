import { GET_ACCESORIES_ERROR, GET_ACCESSORIES, GET_MANCLOTHES, GET_MANCLOTHES_ERROR, GET_WOMENCLOTHES, GET_WOMENCLOTHES_ERROR } from "../actions/apiActions";


const INITIAL_STATE = ({

    products: [],

    error: null,

});

export const apiReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case GET_ACCESSORIES : 
            return {
                ...state,
                products: action.payload,            
            }

        case GET_ACCESORIES_ERROR: 
            return { 
                ...state,
                error: true,
            }  

        case GET_MANCLOTHES : 
            return {
                ...state,
                products: action.payload,
            }

        case GET_MANCLOTHES_ERROR: 
            return { 
                ...state,
                error: true,
            }
            
        case GET_WOMENCLOTHES : 
            return {
                ...state,
                products: action.payload,
            }

        case GET_WOMENCLOTHES_ERROR: 
            return { 
                ...state,
                error: true,
            }
        
        default:
            return state

    }

}