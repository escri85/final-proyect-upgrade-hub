export const ADD_CART = "[Cart] add";
export const DELETE_CART = "[Cart] delete";

const addCartAction = (data) => ({

    type: ADD_CART,

    payload: data,

});

const deleteCartAction = (data) => ({

    type: DELETE_CART,

    payload: data,

});

export const addProductToCart = (data) => {

    return (dispatch) => {

        dispatch(addCartAction(data))

    }
};


export const deleteProductToCart = (data) => {

    return (dispatch) => {

        dispatch(deleteCartAction(data))

    }
}