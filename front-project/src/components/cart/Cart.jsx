import './Cart.scss'

//Boostrap
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

const Cart = ({cart, setCart}) => {


  
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
                <Button variant="primary">Eliminar</Button>
              </Card.Body>
            </Card>
          )}
        </div>
  
        </div>)
}

export default Cart