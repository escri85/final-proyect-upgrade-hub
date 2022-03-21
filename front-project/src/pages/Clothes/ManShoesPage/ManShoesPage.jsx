import "./ManShoesPage.scss";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getShoesToApi } from "../../../redux/actions/apiActions";
import Card from "../../../components/Card/Card";
import { FormattedMessage  as T} from 'react-intl';

const ManShoesPage = (props) => {
    useEffect(() => {
        props.dispatch(getShoesToApi());
        console.log(props.data);
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    //PRICE

    const [maxPrice, setMaxPrice] = useState(165);

    const manShoes = props.data.filter(
        (product) => product.subcategorie === "Man" && product.price < maxPrice
    );

    //FILTER

    const [nikeActived, setNikeActived] = useState();
    const [adidasActived, setAdidasActived] = useState();
    const [converseActived, setConverseActived] = useState();
    const [vansActived, setVansActived] = useState();

    const isFilterApplied =
        nikeActived ||
        adidasActived ||
        converseActived ||
        vansActived ;

    const getSelectedCategories = () => {
        const categories = [];

        if (nikeActived) {
        categories.push("Nike");
        }
        if (adidasActived) {
        categories.push("Adidas");
        }
        if (converseActived) {
        categories.push("Converse");
        }
        if (vansActived) {
        categories.push("Vans");
        }
        return categories;
    };

    const isCategorySelected = (category) => {
        const selectedCategories = getSelectedCategories();
        return selectedCategories.includes(category);
    };

    const filteredManShoes = props.data.filter(
        (product) => isCategorySelected(product.filter) && product.price <= maxPrice
    );

    const [inputValue, setInputValue] = useState(170);

    const handleChangeNike = (event) => setNikeActived(event.target.checked);
    const handleChangeAdidas = (event) => setAdidasActived(event.target.checked);
    const handleChangeConverse = (event) =>setConverseActived(event.target.checked);
    const handleChangeVans = (event) => setVansActived(event.target.checked);
    const handleChangePrice = (event) => {
        setMaxPrice(event.target.value)
        setInputValue(event.target.value) 
    };

    return (
        <>
        <div className="c-">
            <div className="c-finder">
                <label htmlFor="checkbox">Nike</label>
                <input type="checkbox" onChange={handleChangeNike} />

                <label htmlFor="checkbox">Adidas</label>
                <input type="checkbox" onChange={handleChangeAdidas} />

                <label htmlFor="checkbox">Converse</label>
                <input type="checkbox" onChange={handleChangeConverse} />

                <label htmlFor="checkbox">Vans</label>
                <input type="checkbox" onChange={handleChangeVans} />

                <label htmlFor="precio"><T id="checkBox.item.price" /></label>
                <input type="range" value={inputValue} max="170" min="10" step="10" onChange={handleChangePrice} />
                <p>{inputValue}</p>
            </div>
        </div>
        

        <div className="container">
            {isFilterApplied && filteredManShoes.map(product => <Card key={product._id} product={product}></Card>)}    
            {!isFilterApplied && manShoes.map(product => <Card key={product._id} product={product}></Card>)}
        </div>
        </>
    );
    };

    const mapStateToProps = (state) => ({
    data: state.api.sneakers,
    cart: state.cart,
    });

    export default connect(mapStateToProps)(ManShoesPage);
