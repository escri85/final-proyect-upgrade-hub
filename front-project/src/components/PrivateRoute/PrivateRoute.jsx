import { RegisterForm } from "../../pages";

const AuthRoute = ({user, component, ...restProps}) =>{
    const {error} = restProps;

    if(!component) throw new Error('Necesitas añadir una prop "component con el siguiente formato <Mi componente props />');

    if(error) return <div className="register-error">{error}</div>
    if(user) return component;

    if(!user) return <div>
                        Ups! Ha ocurrido un error, trata de usar las credenciales correctas o registrarte.
                    </div>
};

export default AuthRoute;
