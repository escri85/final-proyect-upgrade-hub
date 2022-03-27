import React, { useContext, useState } from 'react';
import { Row, Text, Input, Button, Modal, Checkbox, Avatar } from '@nextui-org/react';
import { PanelMenu } from 'primereact/panelmenu';
import { AdminContext } from '../../../Contexts/AdminContext';

const AdmingModalSettings = () => {
    const [visible, setVisible] = useState(true);
    const closeHandler = () => setVisible(false);

    const [stock, setStock, handleModal, setHandleModal] = useContext(AdminContext);

    const handleChangeStock = (event) => {
        setStock(event.target.value)
    }

    const setProductStocks = () => {
        setHandleModal(!handleModal)
        setVisible(false)
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
                Editar Stock
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
                    labelPlaceholder="Introduce el nuevo stock de este artículo"
                    type="number"
                    name="stock"
                    value={stock}
                    onChange={handleChangeStock}
/*                        ICONO -> contentLeft={<Mail />} */
                />
            <Row justify="space-between">
            <Text color="error" size={14}>
                Una vez actualizado no podrás volver atrás
            </Text>
            </Row>
        </Modal.Body>
        <Modal.Footer>
            <Button auto onClick={(setProductStocks)}>
            Actualizar stock
            </Button>
        </Modal.Footer>
    </Modal>
</div>
)
}

export default AdmingModalSettings