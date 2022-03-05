import {combineReducers} from "redux";
import { apiReducer } from "./apiReducer";
import { authReducer } from "./authReducer";

export const rootReducer = combineReducers({
    api: apiReducer,
    auth: authReducer
});