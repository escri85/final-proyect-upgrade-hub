import React, { useContext } from 'react';
import { Row, Text, Input, Button, Modal, Checkbox, Avatar } from '@nextui-org/react';
import { PanelMenu } from 'primereact/panelmenu';
import { ProfileContext } from '../../Contexts/ProfileContext';
import {connect} from 'react-redux';
import { changeEmail } from "../../redux/actions/authActions";
import { Navigate, useNavigate } from 'react-router-dom';


const INITIAL_STATE = {
    email: '',
    password: ''
}

const UserSettingsModal = ({user, dispatch}) =>{
    const [profileNavbarActions, setProfileNavbarActions] = useContext(ProfileContext);
    const [visible, setVisible] = React.useState(true);
    const [formData, setFormData] = React.useState(INITIAL_STATE);
    
    const closeHandler = () => {
        setVisible(false);
        console.log('closed');
        setProfileNavbarActions({
            showUserMailSettings: false,
        })
    };

    const handleInput = (ev) =>{
        const {name, value} = ev.target;
        setFormData({...formData, [name] : value});
    }

    const submitForm = (ev) =>{
        console.log(formData);
        dispatch(changeEmail(formData, user._id))
    }

    return (
        <div>
            <Modal
                closeButton
                preventClose
                aria-labelledby="modal-title"
                open={visible}
                onClose={closeHandler}
            >
                <Modal.Header>
                    <Text id="modal-title" size={18}>
                    <Text b size={18}>
                        Ajustes de usuario
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
                            labelPlaceholder="Nuevo correo electrónico"
                            type="email"
                            name="email"
                            onChange={handleInput}
    /*                        ICONO -> contentLeft={<Mail />} */
                        />
                        <Input
                            clearable
                            bordered
                            fullWidth
                            color="primary"
                            size="lg"
                            labelPlaceholder="Tu contraseña"
                            type="password"
                            name="password"
                            onChange={handleInput}
                        />
                    <Row justify="space-between">
                    <Text size={14}>
                        Has olvidado tu contraseña?
                    </Text>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button auto flat color="error" onClick={closeHandler}>
                    Close
                    </Button>
                    <Button auto onClick={submitForm}>
                    Sign in
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

const mapStateToProps = (state) =>({
    user: state.auth.user,
})

export default connect(mapStateToProps)(UserSettingsModal);