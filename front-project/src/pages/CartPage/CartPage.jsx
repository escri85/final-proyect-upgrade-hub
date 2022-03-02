import Cart from '../../components/Cart/Cart'
import './CartPage.scss'

export const CartPage = (props) => {


    return (<div>
        
        <Cart cart= {props.cart} setCart={props.setCart}></Cart>

        </div>)}
