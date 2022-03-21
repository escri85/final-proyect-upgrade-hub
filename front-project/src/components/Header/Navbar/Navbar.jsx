import React, { useContext } from "react";
import { useState } from "react";
import { Menubar } from "primereact/menubar";
import { InputText } from "primereact/inputtext";
import { useNavigate } from "react-router-dom";
import {connect} from 'react-redux';
import { loginUser } from "../../../redux/actions/authActions";
import { FilterContext } from "../../../Contexts/FilterContext";
import { Modal, Button, Input, Text, Row, Checkbox  } from '@nextui-org/react';
import GoogleLogin from 'react-google-login';
// import { useGoogleLogin } from 'react-google-login'
/*
APUNTES:

Si no hay usuario -> añadir botón de login y seguir mostrando registro.
Si hay usuario -> ocultar botones y mostrar logout & perfil.
*/
const INITIAL_STATE = {
    email: '',
    password: ''
}

const Navbar = ({dispatch, error, user}) => {
    const navigate = useNavigate();
    const [visible, setVisible] = React.useState(false);
    const [formData, setFormData] = useState(INITIAL_STATE);
    const [filteredProducts, setFilteredProducts] = useContext(FilterContext);
    console.log(user);
    
    // const client_id=process.env.GOOGLE_CLIENT_ID
    
    console.log(process.env);
    const local_Storage= localStorage.getItem('loginData') ? JSON.parse(localStorage.getItem('loginData')) : null

const [loginData,setLoginData]=useState(local_Storage)
    console.log('esto es el loginData',loginData);
    
    const registerUserForGoogl = ()=>{
        console.log(loginData);
    }
    const needToRegister = () =>{
        setVisible(false);
        navigate('/access');
    };

    const closeHandler = () => {
        setVisible(false);
    };
    const responseGoogle=(response)=>{
        console.log('esta es otro login',response);
        localStorage.setItem('loginData',JSON.stringify(response))
        setLoginData(response)
        setVisible(false)
    }

    
// const handleLogin=(googleData)=>{
//     console.log(googleData);
// }
const handleLogout=()=>{
    localStorage.removeItem('loginData')
}
    const submitLogin = (ev) =>{
        ev.preventDefault();
        console.log('Con esto vas a loguear',formData);
        dispatch(loginUser(formData));
        setVisible(false);
        navigate('/profile');
    };

    const changeInput = (ev) =>{
        const {name, value} = ev.target;
        setFormData({...formData, [name]: value});
    };

    const sendProductToFilter = (ev)=> {
        if(ev.target.value.length <1){
            setFilteredProducts({
                inputValue: '',
                isTrusted: false
            })
        }else{
            setFilteredProducts({
                inputValue: ev.target.value,
                isTrusted: true
            });
        }
    }

    


    const items = [
        {label:loginData.profileObj.givenName},
        {
        label: "Hombre",

        items: [
            {
            label: "Ropa",
            command: () => {
                navigate("/man");
            },
            },
            {
            label: "Calzado",
            command: () => {
                navigate("/manshoes");
            },
            },
            // {
            //     separator: true
            // },
        ],
        },
        {
        label: "Mujer",
        items: [
            {
            label: "Ropa",
            command: () => {
                navigate("/women");
            },
            },
            {
            label: "Calzado",
            command: () => {
                navigate("/womenshoes");
            },
            },
            {
            label: "Complementos",
            command: () => {
                navigate("/accessories");
            },
            },
        ],
        },
        {
        label: "Subir producto",
        icon: "pi pi-fw pi-plus",
        command: () => {
            navigate("/add");
        },
        },

        {
        label: "Carrito",
        icon: "pi pi-fw pi-shopping-cart",
        command: () => {
            navigate("/cart");
        },
        },
        {
        label: "Cuenta",
        icon: "pi pi-fw pi-power-off",
        items: [
            {
            label: "Logout",
            icon: "pi pi-fw pi-cog",
            command: () => {
             handleLogout();
            },
            },
            { label: "Iniciar sesión",
            icon: "pi pi-fw pi-power-off",
            command: () =>{
                setVisible(true);
            }
            },
        ],
        },
    ];

    const start = 
     
         (loginData &&   <img
            style={{borderRadius:'100%'}}
            alt="logo"
            // src=''
            
            src={loginData.profileObj.imageUrl}
            onError={(e) =>
                (e.target.src =
                    "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
                }
                height="40"
                className="mr-2"
                />)
    
    const end = <InputText
                placeholder="Search"
                type="text"
                onChange={sendProductToFilter}/>;

    return (
        <div>
        <div className="card">
            <Menubar model={items} start={start} end={end} />
        </div>
        <Modal
        closeButton
        blur
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
    >
        <Modal.Header>
            <Text id="modal-title" size={18}>
                {/* Texto alternativo */}
            <Text b size={18}>
                Inicio de sesión
            </Text>
            </Text>
        </Modal.Header>
        <Modal.Body>
            <Input
                clearable
                bordered
                fullWidth
                color="primary"
                size="lg"
                labelPlaceholder="Email"
                type='email'
                name="email"
                value={formData.email}
                onChange={changeInput}
            />
            <Input
                clearable
                bordered
                fullWidth
                color="primary"
                size="lg"
                name="password"
                type="password"
                value={formData.password}
                onChange={changeInput}
                labelPlaceholder="Contraseña"
            />
              <Row justify="space-between">
            <Checkbox>
                <Text size={14}>
                Mantener sesión
                {/* COOKIES */}
                </Text>
            </Checkbox>
            <Button auto onClick={submitLogin}>
            Iniciar sesión
            </Button>
            </Row>
            <Row justify="center" >
            <GoogleLogin
    clientId='966171888634-u11jhbnktfnhd6uto6ojn3se5s3eof14.apps.googleusercontent.com'
    buttonText="Iniciar sesion con Google"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
    // onClick={registerUserForGoogl}
  />
    </Row>
        </Modal.Body>
        <Modal.Footer justify="center">
            <Button auto flat color="success" onClick={needToRegister}>
            Necesito registrarme
            </Button>
        </Modal.Footer>
    </Modal>
        </div>
    );
};

const mapStateToProps = (state) =>({
    user: state.auth.user,
    error: state.auth.error,
});

export default connect(mapStateToProps)(Navbar);
