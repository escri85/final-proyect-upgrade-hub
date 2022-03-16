import './Accesories.scss';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
// import { Rating } from 'primereact/rating';
import { getAccesoriesToApi } from '../../../redux/actions/apiActions';
// import { addProductToCart } from '../../../redux/actions/cartActions';
import Card  from '../../../components/Card/Card';

const Accesories = (props) => {

    useEffect(() => {
        props.dispatch(getAccesoriesToApi())
            //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const [maxPrice, setMaxPrice] = useState(50);

    const accessories = props.data.filter(product => 
        product.price < maxPrice )

    //NEW FILTER

    const [panuelosActived, setPanuelosActived] = useState();
    const [pendientesActived, setPendientesActived] = useState();
    const [collaresActived, setCollaresActived] = useState();
    const [cinturonesActived, setCinturonesActived] = useState();
    const [gorrosActived, setGorrosActived] = useState();

    const isFilterApplied = panuelosActived || pendientesActived || collaresActived || cinturonesActived || gorrosActived;

    const getSelectedCategories = () => {
        
        const categories = [];  //["Pañuelo", "Pendientes"]

        if (panuelosActived) {categories.push("Pañuelo")};
        if (pendientesActived) {categories.push("Pendientes")};
        if (collaresActived) {categories.push("Collar")};
        if (gorrosActived) {categories.push("Gorro")};
        if (cinturonesActived) {categories.push("Cinturon")};

        return categories;
    }

    const isCategorySelected = (category) => {
        const selectedCategories = getSelectedCategories();  // ["Pañuelo","Pendientes"]
        return selectedCategories.includes(category);
    }


    const filteredAccesories = props.data.filter(product => isCategorySelected(product.filteredBy) && product.price <= maxPrice)

    const handleChangePañuelos = (event) => setPanuelosActived(event.target.checked)
    const handleChangePendientes = (event) => setPendientesActived(event.target.checked)
    const handleChangeCollares = (event) => setCollaresActived(event.target.checked)
    const handleChangeGorros = (event) => setGorrosActived(event.target.checked)
    const handleChangeCinturones = (event) => setCinturonesActived(event.target.checked)
    const handleChangePrice = (event) => {setMaxPrice(event.target.value)}

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

            <label htmlFor="precio">Precio</label>
            <input type="range" max="50" min="10" step="5" onChange={handleChangePrice} />
            <p>{maxPrice}</p>
        </div>

        <div className="container">
            {isFilterApplied && filteredAccesories.map(product => <Card key={product._id} product={product}></Card>)}    
            {!isFilterApplied && accessories.map(product => <Card key={product._id} product={product}></Card>)}
        </div>
    </>)
}

const mapStateToProps = (state) => ({
    data: state.api.accessories,
    cart: state.cart
})

export default connect(mapStateToProps)(Accesories);


