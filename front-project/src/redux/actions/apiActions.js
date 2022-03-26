import axios from 'axios';
import { EDIT_USER_EMAIL_ERROR } from './authActions';

export const GET_ACCESSORIES = "[Api] getAccessories";
export const GET_ACCESORIES_ERROR = "[Api] getAccessoriesError";

export const GET_MANCLOTHES = "[Api] getManClothes";
export const GET_MANCLOTHES_ERROR = "[Api] getManClothesError";

export const GET_WOMENCLOTHES = "[Api] getWomenClothes";
export const GET_WOMENCLOTHES_ERROR = "[Api] getWomenClothesError";

export const GET_SHOES = "[Api] getShoes";
export const GET_SHOES_ERROR = "[Api] getShoesError";

export const EDIT_ACCESSORIES = "[Api] editAccessories";
export const EDIT_ACCESSORIES_OK = "[Api] editAccessoriesOk";
export const EDIT_ACCESSORIES_ERROR = "[Api] editAccessoriesError";

//ACCESORIES

const getAccesories = (data) => ({

    type: GET_ACCESSORIES,

    payload: data,

});

const getAccesoriesError = () => ({
    type: GET_ACCESORIES_ERROR
})

// const editAccessories = (data) => ({
//     type: EDIT_ACCESSORIES,
//     payload: data
// })

const editAccessoriesError = () => ({
    type: EDIT_ACCESSORIES_ERROR,
})

const editAccessoriesOK = (data, id) => ({

    type: EDIT_ACCESSORIES_OK,
    payload: {data: data, id: id}

})


//MANCLOTHES

const getManClothes = (data) => ({

    type: GET_MANCLOTHES,

    payload: data,

});

const getManClothesError = () => ({
    type: GET_MANCLOTHES_ERROR
})

//WOMANCLOTHES

const getWomenClothes = (data) => ({

    type: GET_WOMENCLOTHES,

    payload: data,

});

const getWomenClothesError = () => ({
    type: GET_WOMENCLOTHES_ERROR
})

//SHOES

const getShoes = (data) => ({

    type: GET_SHOES,

    payload: data,

});

const getShoesError = () => ({
    type: GET_SHOES_ERROR
})

//ACCESORIES

export const getAccesoriesToApi = () => {

    return async (dispatch) => {

        try{
            const result = await axios.get('http://localhost:4000/accessories');
            const data = result.data;
            const dataProducts = data.map((element =>{
                    return {amount: 1, ...element}
            }))
            dispatch(getAccesories(dataProducts));
        } catch (error) {
            console.log(error);
            dispatch(getAccesoriesError());
        }
    }
}

export const editAccessoriesToApi = (stock, id) => {

        return async(dispatch) =>{

            // dispatch(editAccessories);
            const EditAccessoryRequest = await fetch(`http://localhost:4000/accessories/edit/${id}`,{
                method: "PUT",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin" : "*",
                },
                credentials: "include",
                body: JSON.stringify(stock),
            });
            const accessoryResult = await EditAccessoryRequest.json();

            if(accessoryResult.ok){
                dispatch(editAccessoriesOK(accessoryResult, id))
            }else{
                dispatch(editAccessoriesError(accessoryResult.message))
            };

        };
}

//MANCLOTHES

export const getManClothesToApi = () => {

    return async (dispatch) => {

        try{
            const result = await axios.get('http://localhost:4000/manproducts');
            const data = result.data;
            const dataProducts = data.map((element =>{
                return {amount: 1, ...element}
        }))
            dispatch(getManClothes(dataProducts));
        } catch (error) {
            console.log(error);
            dispatch(getManClothesError());
        }        
    }
}

//WOMENCLOTHES

export const getWomenClothesToApi = () => {

    return async (dispatch) => {

        try{
            const result = await axios.get('http://localhost:4000/woman');
            const data = result.data;
            const dataProducts = data.map((element =>{
                return {amount: 1, ...element}
        }))
            dispatch(getWomenClothes(dataProducts));
        } catch (error) {
            console.log(error);
            dispatch(getWomenClothesError());
        }        
    }
}

//SHOES

export const getShoesToApi = () => {

    return async (dispatch) => {

        try{
            const result = await axios.get('http://localhost:4000/sneakers');
            const data = result.data;
            const dataProducts = data.map((element =>{
                return {amount: 1, ...element}
        }))
            dispatch(getShoes(dataProducts));
        } catch (error) {
            console.log(error);
            dispatch(getShoesError());
        }        
    }
}