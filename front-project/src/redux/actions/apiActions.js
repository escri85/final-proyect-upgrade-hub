import axios from 'axios';

export const GET_PRODUCTS = "[Api] getProducts";
export const GET_PRODUCTS_ERROR = "[Api] getProductsError";

const getProducts = (data) => ({

    type: GET_PRODUCTS,

    payload: data,

});

const getProductsError = () => ({
    type: GET_PRODUCTS_ERROR
})

export const getToApi = () => {

    return async (dispatch) => {

        try{
        const result = await axios.get('http://localhost:4000/management/products');
        const data = result.data;
        dispatch(getProducts(data));
        console.log(data)
        } catch (error) {
            console.log(error);
            dispatch(getProductsError());
        }        
    }
}
