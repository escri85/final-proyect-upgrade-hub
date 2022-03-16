import './Cart.scss'

//Boostrap
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { AddOneProductToCart, SustractOneProductToCart } from '../../redux/actions/cartActions';

const Cart = (props) => {

  // useEffect(() => {
  //   localStorage.setItem("products", JSON.stringify(cart));
  // }, [cart]);
  
  const price = props.cart.reduce(( curNumber  , item ) => {
  
    return curNumber + (item.price * item.amount)

  }, 0);


  return (<>
    
        {!props.cart.length && <div>No hay nada de nada</div>}
        <div className="c-cart">
          {props.cart.map((element) => 
            <Card key={element._id} style={{ width: '15rem', height: '450px', margin: '15px' }}>
              <Card.Img variant="top" style={{ width: '100%' , height: '250px'}} src={element.image} />
              <Card.Body>
                <Card.Title>{element.title}</Card.Title>
                  <div>
                    <p>{element.price} €</p>
                    <p>Cantidad: {element.amount}</p>
                  </div>
                  <div className="c-cart__buttons">
                    <Button variant="secondary" onClick={()=>{props.dispatch(SustractOneProductToCart(element))}}>-</Button>
                    <Button variant="secondary" onClick={()=>{props.dispatch(AddOneProductToCart(element))}}>+</Button>
                  </div>
              </Card.Body>
            </Card>)}
          </div>
          <div>
            <h4>Total: {price} €</h4>
          </div>  
        </>)
}

const mapStateToProps = (state) => ({

  cart: state.cart,

})

export default connect(mapStateToProps)(Cart);