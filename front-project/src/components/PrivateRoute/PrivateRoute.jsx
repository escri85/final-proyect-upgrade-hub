import { useEffect } from 'react';
import {connect} from 'react-redux';
import { Navigate, useLocation } from "react-router-dom";
import { Access, RegisterForm } from "../../pages";
import { FormattedMessage  as T} from 'react-intl';

const PrivateRoute = ({user, component, ...restProps}) =>{

    const location = useLocation();

    console.log('USUARIO PRIVATE ROUTE->',user);

    if (!component) throw new Error('Jose, Luispa, Sergi y Hector no han pasado un componente :/');

    if (user === null) return <div><T id='Register.noUser'/></div>

    if (user === false || !user.email){
        {/* <Access userError = {user}/> */}
        return <Navigate to='/access' state={{prevRoute: location.pathname}} />
    }

    if (user.email) return component;

};

export default connect(({auth}) => ({user: auth.user}))(PrivateRoute);
