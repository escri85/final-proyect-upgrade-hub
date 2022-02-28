import axios from 'axios';

export const GET_PRODUCTS = "[Api] getProducts";

const getProducts = (data) => ({

    type: GET_PRODUCTS,

    payload: data,

});

export const getToApi = () => {

    return async (dispatch) => {

        const result = await axios.get('http://localhost:4000/management/products');
        const data = result.data;
        dispatch(getProducts(data));
        console.log(data)
    }
}
