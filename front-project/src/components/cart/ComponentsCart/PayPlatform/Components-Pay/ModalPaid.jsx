import React from 'react'

//Boostrap

import Rating from '@mui/material/Rating';

import { Row, Text, Input, Button, Modal, Checkbox, Avatar } from '@nextui-org/react';

export const ModalPaid = (props) => {

    const [value, setValue] = React.useState(1);
    const [visible, setVisible] = React.useState(true);

    return (
        <Modal closeButton preventClose aria-labelledby="modal-title" open={visible}
        onClose={()=>{props.closeAll()}}>
        <Modal.Header>
            <Text id="modal-title" size={18}>
            <Text b size={18}>
                Tu pedido se ha registrado correctamente
            </Text>
            </Text>
        </Modal.Header>
        <Modal.Body>
        <Row justify="center">
            <Text size={18}>
                Valore su experiencia con Zarando
            </Text>
        </Row>
        <Row justify="center">
            <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                    setValue(newValue);
                    }}
            />   
        </Row>
        </Modal.Body>
        <Modal.Footer>
            <Button auto flat onClick={props.closeAll}>
            Cerrar
            </Button>
        </Modal.Footer>
    </Modal>
    )
}

// <Modal.Dialog>
//         <Modal.Header >
//             <Modal.Title>Tu pedido se ha registrado correctamente</Modal.Title>
//         </Modal.Header>

//         <Modal.Body>
//             <p>El tiempo de entrega serán {props.timeToSend} días </p>
//             <h5>Valore su experiencia con ZARANDO</h5>
//                     <Rating
//                         name="simple-controlled"
//                         value={value}
//                         onChange={(event, newValue) => {
//                         setValue(newValue);
//                         }}
//                     />
//         </Modal.Body>

//         <Modal.Footer>
//             <Button onClick={props.closeAll} variant="primary">Cerrar</Button>
//         </Modal.Footer>
//     </Modal.Dialog> 