import "./ManShoesPage.scss";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getShoesToApi } from "../../../redux/actions/apiActions";
import Card from "../../../components/Card/Card";

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
    const [morrisonActived, setMorrisonActived] = useState();
    const [vejaActived, setVejaActived] = useState();
    const [pumaActived, setPumaActived] = useState();
    const [dcActived, setDcActived] = useState();
    const [munichActived, setMunichActived] = useState();

    const isFilterApplied =
        nikeActived ||
        adidasActived ||
        converseActived ||
        vansActived ||
        morrisonActived ||
        vejaActived ||
        dcActived ||
        pumaActived ||
        munichActived;

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
        if (morrisonActived) {
        categories.push("Morrison");
        }
        if (vejaActived) {
        categories.push("Veja");
        }
        if (pumaActived) {
        categories.push("Puma");
        }
        if (dcActived) {
        categories.push("DC");
        }
        if (munichActived) {
        categories.push("Munich");
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
    const handleChangeMorrison = (event) =>setMorrisonActived(event.target.checked);
    const handleChangeVeja = (event) => setVejaActived(event.target.checked);
    const handleChangePuma = (event) => setPumaActived(event.target.checked);
    const handleChangeDc = (event) => setDcActived(event.target.checked);
    const handleChangeMunich = (event) => {setMunichActived(event.target.value);};
    const handleChangePrice = (event) => {
        setMaxPrice(event.target.value)
        setInputValue(event.target.value) 
    };

    return (
        <>

        <div className="c-finder">
            <label htmlFor="checkbox">Nike</label>
            <input type="checkbox" onChange={handleChangeNike} />

            <label htmlFor="checkbox">Adidas</label>
            <input type="checkbox" onChange={handleChangeAdidas} />

            <label htmlFor="checkbox">Converse</label>
            <input type="checkbox" onChange={handleChangeConverse} />

            <label htmlFor="checkbox">Vans</label>
            <input type="checkbox" onChange={handleChangeVans} />

            <label htmlFor="checkbox">Morrison</label>
            <input type="checkbox" onChange={handleChangeMorrison} />

            <label htmlFor="checkbox">Veja</label>
            <input type="checkbox" onChange={handleChangeVeja} />

            <label htmlFor="checkbox">Puma</label>
            <input type="checkbox" onChange={handleChangePuma} />

            <label htmlFor="checkbox">DC</label>
            <input type="checkbox" onChange={handleChangeDc} />

            <label htmlFor="checkbox">Munich</label>
            <input type="checkbox" onChange={handleChangeMunich} />

            <label htmlFor="precio">Precio</label>
            <input type="range" value={inputValue} max="170" min="10" step="10" onChange={handleChangePrice} />
            <p>{inputValue}</p>
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
