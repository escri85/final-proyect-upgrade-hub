import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {connect} from 'react-redux';
import {Input} from '@nextui-org/react';
import './Register.scss';
import { registerUser } from '../../redux/actions/authActions';

const INITIAL_STATE = {
    email: '',
    password: ''
}

const Register = ({dispatch, error, ...restProps}) =>{
    const navigate = useNavigate();
    const [formData, setFormData] = useState(INITIAL_STATE);
    const [samePasswords, setSamePasswords] = useState(true);

    const submitForm = (ev) =>{
        ev.preventDefault();
        console.log(formData);
        dispatch(registerUser(formData));
        setFormData(INITIAL_STATE);
        /* navigate('/profile'); */
        /* USUARIO REGISTRADO */
    }

    const changeInput = (ev) =>{
        const {name, value} = ev.target;
        const pass = document.getElementById('pass');
        const passRepeat = document.getElementById('passRepeat');

        setFormData({ ...formData, [name]: value});

        (pass.value === passRepeat.value) ? setSamePasswords(false) : setSamePasswords(true);


    }
    return (
        <form onSubmit={submitForm} className="register">
        <label>
            <Input className="register-input" bordered labelPlaceholder="Correo electrónico" color="secondary" type='email' name='email' id="email" value={formData.email} onChange={changeInput}/>
        </label>
        <label>
            <Input className="register-input" bordered labelPlaceholder="Contraseña" color="secondary" type='password' name='password' id="pass" value={formData.password} onChange={changeInput}/>
        </label>
        <label>
            <Input className="register-input" bordered labelPlaceholder="Repetir contraseña" color="secondary" type='password' name='passwordRepeat' id="passRepeat" value={formData.passwordRepeat} onChange={changeInput}/>
        </label>
        <div>
            <button className="register-btn" disabled={samePasswords}>Registrar</button>
        </div>
    </form>
    )
}
const mapStateToProps = (state) =>({
    error: state.auth.error,
})
export default connect(mapStateToProps)(Register);