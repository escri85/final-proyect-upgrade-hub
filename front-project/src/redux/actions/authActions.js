export const AUTH_REGISTER = "AUTH_REGISTER";
export const AUTH_REGISTER_OK = "AUTH_REGISTER_OK";
export const AUTH_REGISTER_ERROR = "AUTH_REGISTER_ERROR";

export const AUTH_LOGIN = "AUTH_LOGIN";
export const AUTH_LOGIN_OK = "AUTH_LOGIN_OK";
export const AUTH_LOGIN_ERROR = "AUTH_LOGIN_ERROR";

export const CHECK_SESSION = "CHECK_SESSION";
export const CHECK_SESSION_OK = "CHECK_SESSION_OK";
export const CHECK_SESSION_ERROR = "CHECK_SESSION_ERROR"


export const EDIT_USER_EMAIL = "EDIT_USER_EMAIL";
export const EDIT_USER_EMAIL_OK = "EDIT_USER_EMAIL_OK";
export const EDIT_USER_EMAIL_ERROR = "EDIT_USER_EMAIL_ERROR";

export const registerUser = (form) =>{
    return async(dispatch) =>{
        dispatch({ type: AUTH_REGISTER});

        const registerRequest = await fetch('http://localhost:4000/auth/register', {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            credentials: "include",
            body: JSON.stringify(form),
        });
        const result = await registerRequest.json();
        (registerRequest.ok) ? dispatch({ type: AUTH_REGISTER_OK, payload: result}) : dispatch({ type: AUTH_REGISTER_ERROR, payload: false});
    };
};

export const loginUser = (form, cb) =>{
    return async (dispatch) =>{
        dispatch({ type: AUTH_LOGIN });

        const loginRequest = await fetch('http://localhost:4000/auth/login', {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin" : "*",
            },
            credentials: "include",
            body: JSON.stringify(form),
        });
        const result = await loginRequest.json();
        console.log(result);

        if(loginRequest.ok){
            dispatch({type: AUTH_LOGIN_OK, payload: result})
            cb()
        }else{
            dispatch({type: AUTH_LOGIN_ERROR, payload: result.message})
        }
    };
};

export const changeEmail = (form, id) =>{
    console.log('ID QUE LLEGA (REDUX) ->',id);
    return async(dispatch) =>{
        dispatch({type: EDIT_USER_EMAIL });
        const changeEmailRequest = await fetch(`http://localhost:4000/auth/edit/${id}`,{
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin" : "*",
            },
            credentials: "include",
            body: JSON.stringify(form),
        });
        const changeEmailResult = await changeEmailRequest.json();
        console.log('RESULTADOS DE PUT ->',changeEmailResult);
        if(changeEmailResult.ok){
            dispatch({type:EDIT_USER_EMAIL_OK, payload: changeEmailResult})
        }else{
            dispatch({type:EDIT_USER_EMAIL_ERROR, payload: changeEmailResult.message})
        };
    };
}