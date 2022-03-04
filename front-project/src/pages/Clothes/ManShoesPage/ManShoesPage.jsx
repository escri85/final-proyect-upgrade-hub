import './ManShoesPage.scss';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Rating } from 'primereact/rating';
import { getShoesToApi } from '../../../redux/actions/apiActions';

const ManShoesPage = (props) => {

    useEffect(() => {
        props.dispatch(getShoesToApi())
        console.log(props.data);
          //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    

    const [productsCart] = useState([])

    console.log(props);

    const addToCart = (product) => {
        productsCart.unshift(product);
        props.setCart(productsCart);
    }

    const result = props.data.filter(element => element.subcategorie === "Man");
    console.log(result);

    return (<div className="container">
        {
            result.map(product => 
                    <div key={product._id} className="el-wrapper">
                    <div className="box-up">
                        <img className="img" src={product.image} alt=""/>
                        <div className="img-info">
                            <div className="info-inner">
                                <span className="p-name">{product.title}</span>
                                <span className="p-company">{product.categorie}</span>
                                <Rating value={product.rating} readOnly stars={5} cancel={false} /> 
                            </div>
                            <div className="a-size">{product.description}  {(product.stock <10) ? <h5 className='lastUnits' >Ultimas unidades</h5> : ''}  </div>
                        </div>
                    </div>
                
                        <div className="box-down">
                        <div className="h-bg">
                            <div className="h-bg-inner"></div>
                        </div>
            
                        <div className="cart"  >
                        <span className="price">{product.price}€</span>
                        <span className="add-to-cart">
                            <button onClick={()=>addToCart(product)} className="txt">Añadir al carrito</button>
                        </span>
                        </div>
                    </div>
                    </div>
            )
        }
    </div>)

}

const mapStateToProps = (state) => ({

    data: state.api.sneakers,

})

export default connect(mapStateToProps)(ManShoesPage);

