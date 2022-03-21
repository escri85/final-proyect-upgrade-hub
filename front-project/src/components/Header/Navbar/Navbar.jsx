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
import { FormattedMessage  as T} from 'react-intl';


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

    const responseGoogle = (response) => {
        console.log(response);
    }

    const needToRegister = () =>{
        setVisible(false);
        navigate('/access');
    };

    const closeHandler = () => {
        setVisible(false);
    };

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
        {
        label: <T id="navbar.item.man" />,

        items: [
            {
            label: <T id="navbar.item.clothes" />,
            command: () => {
                navigate("/man");
            },
            },
            {
            label: <T id="navbar.item.sneakers" />,
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
        label: <T id="navbar.item.woman" />,
        items: [
            {
            label: <T id="navbar.item.clothes" />,
            command: () => {
                navigate("/women");
            },
            },
            {
            label: <T id="navbar.item.sneakers" />,
            command: () => {
                navigate("/womenshoes");
            },
            },
            {
            label: <T id="navbar.item.accessories" />,
            command: () => {
                navigate("/accessories");
            },
            },
        ],
        },
        {
        label: <T id="navbar.item.upload" />,
        icon: "pi pi-fw pi-plus",
        command: () => {
            navigate("/add");
        },
        },

        {
        label: <T id="navbar.item.cart" />,
        icon: "pi pi-fw pi-shopping-cart",
        command: () => {
            navigate("/cart");
        },
        // items: [
        //     {
        //         label: 'Edit',
        //         icon: 'pi pi-fw pi-pencil',
        //         items: [
        //             {
        //                 label: 'Save',
        //                 icon: 'pi pi-fw pi-calendar-plus'
        //             },
        //             {
        //                 label: 'Delete',
        //                 icon: 'pi pi-fw pi-calendar-minus'
        //             }
        //         ]
        //     },
        //     {
        //         label: 'Archieve',
        //         icon: 'pi pi-fw pi-calendar-times',
        //         items: [
        //             {
        //                 label: 'Remove',
        //                 icon: 'pi pi-fw pi-calendar-minus'
        //             }
        //         ]
        //     }
        // ]
        },
        {
        label: <T id="navbar.item.account"/>,
        icon: "pi pi-fw pi-power-off",
        items: [
            {
            label: < T id="navbar.item.logout" /> ,
            icon: "pi pi-fw pi-cog",
            // command: () => {
            //  navigate("/login");
            // },
            },
            { label: <T id="navbar.item.login" />,
            icon: "pi pi-fw pi-power-off",
            command: () =>{
                setVisible(true);
            }
            },
        ],
        },
    ];

    const start = (
        <img
        alt="logo"
        src="showcase/images/logo.png"
        onError={(e) =>
            (e.target.src =
            "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
        }
        height="40"
        className="mr-2"
        ></img>
    );
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
                <T id="navbar.item.login"/>
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
                <T id="navbar.item.session" />
                {/* COOKIES */}
                </Text>
            </Checkbox>
            <Button auto onClick={submitLogin}>
            <T id="navbar.item.login" />
            </Button>
            </Row>
            <Row justify="center" >
            <GoogleLogin
            
            
    clientId="966171888634-u11jhbnktfnhd6uto6ojn3se5s3eof14.apps.googleusercontent.com"
    buttonText="Iniciar sesion con Google"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
    </Row>
        </Modal.Body>
        <Modal.Footer justify="center">
            <Button auto flat color="success" onClick={needToRegister}>
            <T id="navbar.item.registerRequired" />
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
