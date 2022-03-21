import {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {connect} from 'react-redux';
import { registerUser, loginUser } from '../../redux/actions/authActions';
import { Modal, Button, Input, Text, Row, Checkbox  } from '@nextui-org/react';
import './Access.scss';

const INITIAL_STATE = {
    email: '',
    password: ''
}

const Access = ({dispatch, error, user}) =>{
    const navigate = useNavigate();
    const [formRegisterData, setFormRegisterData] = useState(INITIAL_STATE);
    const [loginFormData, setLoginFormData] = useState(INITIAL_STATE);

    //REGISTER

    const submitRegisterForm = (ev) =>{
        ev.preventDefault();
        dispatch(registerUser(formRegisterData));
        setFormRegisterData(INITIAL_STATE);
        navigate('/profile');
    }
    const handleInputRegister = (ev) =>{
        const {name, value} = ev.target;
        setFormRegisterData({ ...formRegisterData, [name]: value});
    }

    //LOGIN

    const submitLoginForm = (ev) =>{
        ev.preventDefault();
        const cb = () => navigate('/profile')
        dispatch(loginUser(loginFormData, cb));
    }

    const handleInputLogin = (ev) =>{
        const {name, value} = ev.target;
        setLoginFormData({ ...loginFormData, [name]: value});
    }

    return (
        <div className='access'>
            <div className='access__forms'>
                {(error)
                ?
                <>
                <form onSubmit={submitLoginForm} className='access__forms-login'>
                    <h2>Iniciar sesión</h2>
                    <p className='access__forms-login-error'>Las credenciales que has utilizado para iniciar sesión son incorrectas</p>
                        <label>
                            <Input className='access__forms-login-input' bordered labelPlaceholder='Correo electrónico' color="primary" type="email" name="email" value={loginFormData.email} onChange={handleInputLogin}></Input>
                        </label>
                        <label>
                            <Input className='access__forms-login-input' bordered labelPlaceholder='Contraseña' color="primary" type="password" name="password" value={loginFormData.password} onChange={handleInputLogin}></Input>
                        </label>
                    <div>
                        <Button auto flat color="success" className='access__forms-login-btn'>
                            Iniciar sesión
                        </Button>
                    </div>
                </form>
                </>
                :
                ''
            }
            <form onSubmit={submitRegisterForm} className="access__forms-register">
                <h2>Crear cuenta</h2>
                <label>
                    <Input className="access__forms-register-input" bordered labelPlaceholder="Correo electrónico" color="primary" type='email' name='email' id="email" value={formRegisterData.email} onChange={handleInputRegister}/>
                </label>
                <label>
                    <Input className="access__forms-register-input" bordered labelPlaceholder="Contraseña" color="primary" type='password' name='password' id="pass" value={formRegisterData.password} onChange={handleInputRegister}/>
                </label>
                <label>
                    <Input className="access__forms-register-input" bordered labelPlaceholder="Repetir contraseña" color="primary" type='password' name='passwordRepeat' id="passRepeat" value={formRegisterData.passwordRepeat} onChange={handleInputRegister}/>
                </label>
                <div>
                    {/* <button className="register__form-btn">Registrar</button> */}
                    <Button auto flat color="primary" className="access__forms-register-btn">
                        Registrarme
                    </Button>
                </div>
                <div className='register__form-line'></div>
                <div className='register__form-footer'>
                    <p>Al registrarte aceptas nuestras <a href="https://www.amazon.es/gp/help/customer/display.html/ref=ap_register_notification_condition_of_use?ie=UTF8&nodeId=200545940">condiciones de uso y venta.</a>Gracias</p>
                </div>
            </form>
            </div>
        </div>
    )
}
const mapStateToProps = (state) =>({
    user: state.auth.user,
    error: state.auth.error,
})
export default connect(mapStateToProps)(Access);