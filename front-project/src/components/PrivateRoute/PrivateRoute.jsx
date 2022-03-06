import {connect} from 'react-redux';
import { Navigate, useLocation } from "react-router-dom";
import { RegisterForm } from "../../pages";

const PrivateRoute = ({user, component, ...restProps}) =>{
    console.log(user);
    const location = useLocation();

    if(!component) throw new Error('Necesitas añadir una prop "component con el siguiente formato <Mi componente props />');

    if((user === null) || (user === false)) return <div>NO HAY USUARIO</div>

    /* if(user === false) return <Navigate to="/login" state={{prevRoute: location.pathname}} /> */

    if(user) return component;
};

export default connect(({auth}) => ({user: auth.user}))(PrivateRoute);
