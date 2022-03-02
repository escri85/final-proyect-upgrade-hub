import React from "react";
import { Menubar } from "primereact/menubar";
import { InputText } from "primereact/inputtext";
import { useNavigate } from "react-router-dom";
import { Modal, Button, Input, Text, Container, Row, Col, Checkbox  } from '@nextui-org/react';

/*
APUNTES:

Si no hay usuario -> añadir botón de login y seguir mostrando registro.
Si hay usuario -> ocultar botones y mostrar logout & perfil.
*/


const Navbar = () => {
    const navigate = useNavigate();
    const [visible, setVisible] = React.useState(false);
    const handler = () => setVisible(true);
    const closeHandler = () => {
        setVisible(false);
        console.log('closed');
    };

    const items = [
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
        label: "Cuenta",
        icon: "pi pi-fw pi-power-off",
        items: [
            {
            label: "Logout",
            icon: "pi pi-fw pi-cog",
            // command: () => {
            //  navigate("/login");
            // },
            },
            { label: "Sign Out",
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
    const end = <InputText placeholder="Search" type="text" />;

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
                Registro de usuarios
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
                placeholder="Email"
                /* contentLeft={<Mail />} */
            />
            <Input
                clearable
                bordered
                fullWidth
                color="primary"
                size="lg"
                placeholder="Password"
                /* contentLeft={<Password />} */
            />
            <Row justify="space-between">
            <Checkbox>
                <Text size={14}>
                Recordar credenciales
                </Text>
            </Checkbox>
            <Text size={14}>
                <a href="#">Ya tengo cuenta</a>
            </Text>
            </Row>
        </Modal.Body>
        <Modal.Footer>
            <Button auto flat color="error" onClick={closeHandler}>
            Cerrar
            </Button>
            <Button auto onClick={closeHandler}>
            Registrarme
            </Button>
        </Modal.Footer>
    </Modal>
        </div>
    );
};

export default Navbar;
