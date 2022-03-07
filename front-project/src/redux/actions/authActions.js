export const AUTH_REGISTER = "AUTH_REGISTER";
export const AUTH_REGISTER_OK = "AUTH_REGISTER_OK";
export const AUTH_REGISTER_ERROR = "AUTH_REGISTER_ERROR";

export const AUTH_LOGIN = "AUTH_LOGIN";
export const AUTH_LOGIN_OK = "AUTH_LOGIN_OK";
export const AUTH_LOGIN_ERROR = "AUTH_LOGIN_ERROR";

export const CHECK_SESSION = "CHECK_SESSION";
export const CHECK_SESSION_OK = "CHECK_SESSION_OK";
export const CHECK_SESSION_ERROR = "CHECK_SESSION_ERROR"

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

export const loginUser = (form) =>{
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
        console.log(loginRequest);
        const result = await loginRequest.json();
        (loginRequest.ok) ? dispatch({type: AUTH_LOGIN_OK, payload: result}) : dispatch({type: AUTH_LOGIN_ERROR, payload: result.message});
    };
};