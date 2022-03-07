import './Accesories.scss';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Rating } from 'primereact/rating';
import { getAccesoriesToApi } from '../../../redux/actions/apiActions';

const Accesories = (props) => {

    const [productsCart] = useState([])


    const addToCart = (product) => {
        productsCart.unshift(product, ...props.cart);
        props.setCart(productsCart);
        console.log(productsCart);
    }

    useEffect(() => {
        props.dispatch(getAccesoriesToApi())
            //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    //FILTER
        
        const [results, setResults] = useState([]);
        const [productsFound, setProductsFound] = useState(false);

        const filterProducts = (value) => {
            const productsFiltered = props.data.filter(product => product.title.toLowerCase().includes(value.toLowerCase()));
            setResults(productsFiltered);
            productsFiltered.length ? setProductsFound(true) : setProductsFound(false);
        };
    
        const inputValueFn = (ev) => {
            const { value } = ev.target;
            filterProducts(value);
        };


    return (
    
        <>

        <div className="c-finder">
            <label className="c-finder__label" htmlFor="finder">Filtra por producto</label>
            <input className="c-finder__input" type="text" onChange={inputValueFn} />
        </div>

        <div className="container">
        {
            productsFound && results.map(product => 
                <div key={product._id} className="el-wrapper">
                    <div className="box-up">
                        <img className="img" src={product.image} alt=""/>
                        <div className="img-info">
                            <div className="info-inner">
                                <span className="p-name">{product.title}</span>
                                <span className="p-company">{product.categorie}</span>
                                <Rating value={product.rating} readOnly stars={5} cancel={false} />
                            </div>
                                
                            <div className="a-size">{product.description}  {(product.stock <4) ? <h5 className='lastUnits' >Ultimas unidades</h5> : ''} </div>
                        </div>
                    </div>
                    
                        <div className="box-down">
                        <div className="h-bg">
                            <div className="h-bg-inner"></div>
                        </div>
                
                        <div className="cart">
                            <span className="price">{product.price}€</span>
                            <span className="add-to-cart">
                                <button onClick={()=>addToCart(product)} className="txt">Añadir al carrito</button>
                            </span>
                        </div>
                    </div>
                </div>
            )
        }
        {
            !productsFound && props.data.map(product => 
                    
            <div key={product._id} className="el-wrapper">
                <div className="box-up">
                    <img className="img" src={product.image} alt=""/>
                    <div className="img-info">
                        <div className="info-inner">
                            <span className="p-name">{product.title}</span>
                            <span className="p-company">{product.categorie}</span>
                            <Rating value={product.rating} readOnly stars={5} cancel={false} />
                        </div>
                            
                        <div className="a-size">{product.description}  {(product.stock <4) ? <h5 className='lastUnits' >Ultimas unidades</h5> : ''} </div>
                    </div>
                </div>
                
                    <div className="box-down">
                    <div className="h-bg">
                        <div className="h-bg-inner"></div>
                    </div>
            
                    <div className="cart">
                        <span className="price">{product.price}€</span>
                        <span className="add-to-cart">
                            <button onClick={()=>addToCart(product)} className="txt">Añadir al carrito</button>
                        </span>
                    </div>
                </div>
            </div>
            )
        }
    </div>

    </>)
}

const mapStateToProps = (state) => ({

    data: state.api.accessories,

})

export default connect(mapStateToProps)(Accesories);


