import { useEffect } from 'react';
import {connect} from 'react-redux';
import { Navigate, useLocation } from "react-router-dom";
import { Access, RegisterForm } from "../../pages";

const PrivateRoute = ({user, component, ...restProps}) =>{

    const location = useLocation();

    console.log('USUARIO PRIVATE ROUTE->',user);

    if (!component) throw new Error('Jose, Luispa, Sergi y Hector no han pasado un componente :/');

    if (user === null) return <div>No hay usuario</div>

    if (user === false){
        {/* <Access userError = {user}/> */}
        return <Navigate to='/access' state={{prevRoute: location.pathname}} />
    }

    if (user) return component;


};

export default connect(({auth}) => ({user: auth.user}))(PrivateRoute);
