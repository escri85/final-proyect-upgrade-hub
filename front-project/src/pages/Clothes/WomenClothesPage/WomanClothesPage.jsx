import './WomanClothesPage.scss';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Rating } from 'primereact/rating';
import { getWomenClothesToApi } from '../../../redux/actions/apiActions';

const WomanClothesPage = (props) => {

    useEffect(() => {
        props.dispatch(getWomenClothesToApi())
        console.log(props.data);
            //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    return (<div className="container">
        {
            props.data.map(product => 
                    <div key={product._id} className="el-wrapper">
                    <div className="box-up">
                        <img className="img" src={product.image} alt=""/>
                        <div className="img-info">
                            <div className="info-inner">
                                <span className="p-name">{product.title}</span>
                                <span className="p-company">{product.categorie}</span>
                                <Rating value={product.rating} readOnly stars={5} cancel={false} /> 
                            </div>
                            <div className="a-size">{product.description}</div>
                        </div>
                    </div>
                
                        <div className="box-down">
                        <div className="h-bg">
                            <div className="h-bg-inner"></div>
                        </div>
            
                        <a className="cart"  >
                        <span className="price">{product.price}€</span>
                        <span className="add-to-cart">
                            <span className="txt">Añadir al carrito</span>
                        </span>
                        </a>
                    </div>
                    </div>
            )
        }
    </div>)

}

const mapStateToProps = (state) => ({

    data: state.api.womenClothes,

})

export default connect(mapStateToProps)(WomanClothesPage);


