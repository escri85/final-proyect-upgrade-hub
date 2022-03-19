import axios from 'axios';

export const GET_ACCESSORIES = "[Api] getAccessories";
export const GET_ACCESORIES_ERROR = "[Api] getAccessoriesError";

export const GET_MANCLOTHES = "[Api] getManClothes";
export const GET_MANCLOTHES_ERROR = "[Api] getManClothesError";

export const GET_WOMENCLOTHES = "[Api] getWomenClothes";
export const GET_WOMENCLOTHES_ERROR = "[Api] getWomenClothesError";

export const GET_SHOES = "[Api] getShoes";
export const GET_SHOES_ERROR = "[Api] getShoesError";


//ACCESORIES

const getAccesories = (data) => ({

    type: GET_ACCESSORIES,

    payload: data,

});

const getAccesoriesError = () => ({
    type: GET_ACCESORIES_ERROR
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