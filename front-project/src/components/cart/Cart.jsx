import "./Cart.scss";

//Boostrap
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import {AddOneProductToCart,SustractOneProductToCart} from "../../redux/actions/cartActions";
import { PayPlatform } from "./ComponentsCart/PayPlatform/PayPlatform";
import  NoCart from './ComponentsCart/NoCart.jsx/NoCart'

const Cart = (props) => {
  
  useEffect(() => {
    localStorage.setItem("productsCart", JSON.stringify(props.cart));
  }, [props.cart]);

  const price = props.cart.reduce((curNumber, item) => {
    return curNumber + item.price * item.amount;
  }, 0);

  const newPrice = price.toFixed(2);

  const amount = props.cart.map((item) => {
    return item.amount;
  });

  let suma = 0;
  amount.forEach((element) => {
    suma += element;
  });

  const [goToPay, setGoToPay] = useState(false);

  return (
    <>
      <div className="container__all">
        {!props.cart.length && <div><NoCart/></div>}
        {props.cart.length>0 && <div className="items">
          {props.cart.map((item) => (
            <div key={item.id} className="container">
              <div className="images">
                <img src={item.image} alt="" />
              </div>
              <div className="product">
                <p>{item.categorie}</p>
                <h1>{item.title}</h1>
                <h2>{item.price} €</h2>
                <p className="desc">{item.description}</p>
                <div className="buttons">
                  <p>Cantidad {item.amount}</p>
                  <button onClick={() => {props.dispatch(SustractOneProductToCart(item))}}>-</button>
                  <button onClick={() => {props.dispatch(AddOneProductToCart(item))}}>+</button>
                </div>
              </div>
            </div>
          ))}
        </div>}
        {props.cart.length>0 && <div className="tramitar">
          <button onClick={() => { setGoToPay(true)}}> Tramitar pedido </button>
          <h1>Resumen del pedido</h1>
          <h1>{suma} Productos</h1>
          <h2>Total: {newPrice} €</h2>
        </div>}
      </div>
      {goToPay && (
        <PayPlatform
          price={newPrice}
          cart={props.cart}
          setGoToPay={setGoToPay}
        />
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Cart);
