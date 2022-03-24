import './PayPlatform.scss'

//MUI
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { connect } from 'react-redux';
import { cleanCartRedux } from '../../../../redux/actions/cartActions';
import { ModalPaid } from './Components-Pay/ModalPaid';

const PayPlatform = (props) => {

    const precio = props.price;

    const [payType, setPayType] = React.useState('');
    const [price , setPrice] = React.useState(precio);
    const [payDone, setPayDone] = React.useState(false);
    const [orderSent, setOrderSent] = React.useState(false);

    const handleChange = (event) => {
        setPayType(event.target.value);
    };

    const payFunction = () => {
        localStorage.removeItem('productsCart')
        setOrderSent(true)} 

    const closeAll = () => {

        setOrderSent(false);
        props.setGoToPay(false);
        props.dispatch(cleanCartRedux())
    }    

    var timeToSend = 1; 

    const timeToSendP = props.cart.map((element)=>{
        
        if(element.shoppingFrom === "España"){
            return timeToSend = 2;  
        }
        if(element.shoppingFrom === "Francia"){
            return timeToSend = 3;
        }
        if(element.shoppingFrom === "Italia"){
            return timeToSend = 4;
        }
        if(element.shoppingFrom === "Alemania"){
            return timeToSend = 5;
        }else{
            return timeToSend = 5;
        }
    })

    return (<>
        <div className="c-platform">
            <div className="c-platform__modal">
                <div className="c-platform__modal__div">
                    <h4>Dirección de Envío</h4>
                    <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' },}}
                        noValidate
                        autoComplete="off"
                    >
                        <div>
                            <TextField
                            required
                            id="name"
                            label="Nombre"
                            variant="filled"
                            />
                            <TextField
                            required
                            id="surname"
                            variant="filled"
                            label="Apellidos"
                            />
                        </div>
                        <div>
                            <TextField
                            required
                            id="adress"
                            label="Dirección"
                            variant="filled"
                            />
                        </div>
                    </Box>
                </div>
                <div className="c-platform__modal__div">
                    <h4>Método de pago</h4>
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Método de pago</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={payType}
                            label="Método de pago"
                            onChange={handleChange}
                            >
                            <MenuItem value={1}>Tarjeta de Crédito</MenuItem>
                            <MenuItem value={2}>PayPal</MenuItem>
                            <MenuItem value={3}>Contrarrembolso</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    {payType === 1 && <div>
                        <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' },}}
                        noValidate
                        autoComplete="off">
                            <TextField
                            required
                            id="telephone"
                            label="Número de tarjeta"
                            variant="filled"
                            onChange={()=>{setPayDone(true)}}
                            />
                        </Box>
                    </div>}
                    {payType === 2 && <div>
                        <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' },}}
                        noValidate
                        autoComplete="off">
                            <TextField
                            required
                            id="telephone"
                            label="Teléfono"
                            variant="filled"
                            onChange={()=>{setPayDone(true)}}
                            />
                        </Box>
                    </div>}
                    {payType === 3 && <div>
                        <h5>**Vas a pagar con contrarrembolso</h5>
                        <h5>**Esto tendrá un sobrecoste de 2€ en el precio total</h5>
                    </div>}
                </div>
                <div className="c-platform__modal__div">
                    <h4>Confirmación de pago</h4>
                    <div className="c-platform__modal__images">
                        <div>
                            {props.cart.map(element =><img key={element.id} src={element.image} alt="miniatura"></img>)}
                        </div>
                        <div className="c-platform__modal__images__price">
                            <h3>Importe total: {price} €</h3> 
                        </div>
                    </div>       
                </div>
                <div className="c-platform__buttons">
                    <button className="c-platform__buttons__button" onClick={()=>{props.setGoToPay(false)}}>Cancelar</button>
                    {payDone && <button className="c-platform__buttons__button" onClick={payFunction}>Comprar</button>}
                </div>
            </div>
            { orderSent && <div className="c-platform__order"><ModalPaid timeToSend={timeToSend} closeAll={closeAll} /></div>}
        </div>
    </>)
}

const mapStateToProps = (state) => ({
    cart: state.cart,
});

export default connect(mapStateToProps)(PayPlatform)

