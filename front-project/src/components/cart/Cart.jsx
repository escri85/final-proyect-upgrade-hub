import './Cart.scss'

//Boostrap
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import { useEffect } from 'react';

const Cart = ({cart, setCart}) => {

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(cart));
  }, [cart]);
	const deleteFromCart = (_id) => {
console.log('esto es mio',_id);
// const id = cart._id
    setCart(cart.filter((item) => {
			if(item._id !== _id){
				return item;
			}
			// eslint-disable-next-line array-callback-return
			return
		}));
	}

  
  return (<div>
    
        {!cart.length && <div>

          No hay nada de nada

        </div>}

        <div className="c-cart">
          {cart.map(element => 
            <Card key={element._id} style={{ width: '15rem', height: '420px', margin: '15px' }}>
              <Card.Img variant="top" style={{ width: '100%' , height: '250px'}} src={element.image} />
              <Card.Body>
                <Card.Title>{element.title}</Card.Title>
                <Card.Text>
                  {element.price} €
                </Card.Text>
                <Button onClick={()=>{deleteFromCart(element._id)}} variant="primary">Eliminar</Button>
              </Card.Body>
            </Card>
          )}
        </div>
  
        </div>)
}

export default Cart