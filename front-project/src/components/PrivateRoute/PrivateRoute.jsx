import { useEffect } from 'react';
import {connect} from 'react-redux';
import { Navigate, useLocation } from "react-router-dom";
import { Access, RegisterForm } from "../../pages";

const PrivateRoute = ({user, component, ...restProps}) =>{
    const location = useLocation();

    console.log(user);

    if (!component) throw new Error('Necesitas añadir una prop "component" al componente <PrivateRoute component={...} />');

    if (user === null) return <div>Cargando usuario...</div>

    if (user === false){
        {/* <Access userError = {user}/> */}
        return <Navigate to='/access' state={{prevRoute: location.pathname}} />
    }

    if (user) return component;


};

export default connect(({auth}) => ({user: auth.user}))(PrivateRoute);
