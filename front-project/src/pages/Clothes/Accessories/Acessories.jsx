import './Accesories.scss';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Rating } from 'primereact/rating';
import { getAccesoriesToApi } from '../../../redux/actions/apiActions';
import { addProductToCart } from '../../../redux/actions/cartActions';
import { Card } from '../../../components/Card/Card';

const Accesories = (props) => {

    useEffect(() => {
        props.dispatch(getAccesoriesToApi())
            //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

        //NEW FILTER

    const panuelos = props.data.filter(product => product.filteredBy === "Pañuelo");
    const pendientes = props.data.filter(product => product.filteredBy === "Pendientes");
    const collares = props.data.filter(product => product.filteredBy === "Collar");
    const gorro = props.data.filter(product => product.filteredBy === "Gorro");
    const cinturon = props.data.filter(product => product.filteredBy === "Cinturon");    

    const [panuelosActives, setPanuelosActived] = useState();
    const [pendientesActived, setPendientesActived] = useState();
    const [collaresActived, setCollaresActived] = useState();
    const [cinturonesActived, setCinturonesActived] = useState();
    const [gorrosActived, setGorrosActived] = useState();

    const handleChangePañuelos = (event) => {

        if(event.target.checked){
            setPanuelosActived(true)
        }else{
            setPanuelosActived(false)    
        }
    }

    const handleChangePendientes = (event) => {

        if(event.target.checked){
            setPendientesActived(true)
        }else{
            setPendientesActived(false)    
        }

    }

    const handleChangeCollares = (event) => {

        if(event.target.checked){
            setCollaresActived(true)
        }else{
            setCollaresActived(false)    
        }

    }

    const handleChangeGorros = (event) => {

        if(event.target.checked){
            setGorrosActived(true)
        }else{
            setGorrosActived(false)    
        }

    }

    const handleChangeCinturones = (event) => {

        if(event.target.checked){
            setCinturonesActived(true)
        }else{
            setCinturonesActived(false)    
        }

    }

    return (
    
        <>

        <div className="c-finder">

            {/* <label className="c-finder__label" htmlFor="finder">Filtra por producto</label>
            <input className="c-finder__input" type="text" onChange={inputValueFn} /> */}
            <label htmlFor="checkbox">Pañuelos</label>
            <input type="checkbox" onChange={handleChangePañuelos} />

            <label htmlFor="checkbox">Pendientes</label>
            <input type="checkbox" onChange={handleChangePendientes} />

            <label htmlFor="checkbox">Collares</label>
            <input type="checkbox" onChange={handleChangeCollares} />

            <label htmlFor="checkbox">Gorros</label>
            <input type="checkbox" onChange={handleChangeGorros} />

            <label htmlFor="checkbox">Cinturones</label>
            <input type="checkbox" onChange={handleChangeCinturones} />

        </div>

        <div className="container">    
        {
            panuelosActives && panuelos.map(product => 
                <Card key={product._id} product={product}></Card>
            )
        }
        { pendientesActived && pendientes.map(product => 
                <Card key={product._id} product={product}></Card>
            )
        }
        {collaresActived && collares.map(product => 
                <Card key={product._id} product={product}></Card>
            )
        }
        {gorrosActived && gorro.map(product => 
                <Card key={product._id} product={product}></Card>
            )
        }
        {cinturonesActived && cinturon.map(product => 
                <Card key={product._id} product={product}></Card>
            )
        }
        
        
        {
            !cinturonesActived && !gorrosActived && !pendientesActived && !panuelosActives && !collaresActived && props.data.map(product => 
                    
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
                            <button onClick={()=>{props.dispatch(addProductToCart(product))}} className="txt">Añadir al carrito</button>
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
    cart: state.cart

})

export default connect(mapStateToProps)(Accesories);


