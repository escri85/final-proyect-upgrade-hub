import React from 'react'

//Boostrap

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'
import Rating from '@mui/material/Rating';


export const ModalPaid = (props) => {

    const [value, setValue] = React.useState(1);

    return (
        <Modal.Dialog>
        <Modal.Header >
            <Modal.Title>Tu pedido se ha registrado correctamente</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <p>El tiempo de entrega serán {props.timeToSend} días </p>
            <h5>Valore su experiencia con ZARANDO</h5>
                    <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                        setValue(newValue);
                        }}
                    />
        </Modal.Body>

        <Modal.Footer>
            <Button onClick={props.closeAll} variant="primary">Cerrar</Button>
        </Modal.Footer>
    </Modal.Dialog> 
    )
}
