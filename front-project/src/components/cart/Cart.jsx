import './Cart.scss'

//Boostrap
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { deleteProductToCart } from '../../redux/actions/cartActions';

const Cart = (props) => {

  console.log("esto son las props", props);

  const [cantidad, setCantidad] = useState(1);

  // useEffect(() => {
  //   localStorage.setItem("products", JSON.stringify(cart));
  // }, [cart]);
	
  return (<div>
    
        {!props.cart.length && <div>

          No hay nada de nada

        </div>}

        <div className="c-cart">
          {props.cart.map(element => 
            <Card key={element._id} style={{ width: '15rem', height: '420px', margin: '15px' }}>
              <Card.Img variant="top" style={{ width: '100%' , height: '250px'}} src={element.image} />
              <Card.Body>
                <Card.Title>{element.title}</Card.Title>
                <Card.Text>
                  {element.price} €
                  <p>Cantidad: {cantidad}</p>
                </Card.Text>
                <Button onClick={()=>{props.dispatch(deleteProductToCart(element))}} variant="primary">Eliminar</Button>
              </Card.Body>
            </Card>
          )}
        </div>
  
        </div>)
}

const mapStateToProps = (state) => ({

  cart: state.cart,

})

export default connect(mapStateToProps)(Cart);