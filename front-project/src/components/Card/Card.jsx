import './Card.scss'

import { Rating } from 'primereact/rating';

export const Card = ({product}) => {
    
    return (
        <div key={product._id} className="el-wrapper">
        <div className="box-up">
            <img className="img" src={product.image} alt=""/>
            <div className="img-info">
                <div className="info-inner">
                    <span className="p-name">{product.title}</span>
                    <span className="p-company">{product.categorie}</span>
                    <Rating value={product.rating} readOnly stars={5} cancel={false} />
                </div>
                    
                <div className="a-size">{product.description}  {(product.stock <4) ? <h5 className='lastUnits' >Solo quedan  {product.stock}  </h5> : ''} </div>
            </div>
        </div>
        
            <div className="box-down">
            <div className="h-bg">
                <div className="h-bg-inner"></div>
            </div>
    
            <div className="cart">
                <span className="price">{product.price}€</span>
                <span className="add-to-cart">
                    <button onClick={()=>{console.log(product)}} className="txt">Añadir al carrito</button>
                </span>
            </div>
        </div>
    </div>
    )
}
