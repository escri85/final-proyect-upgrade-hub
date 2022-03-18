import React from 'react'
import { useState, useEffect, useContext } from 'react';


import './Search.scss';
import { getAccesoriesToApi, getManClothesToApi, getShoesToApi, getWomenClothesToApi } from '../../redux/actions/apiActions';
import { connect } from 'react-redux';
import Card from '../Card/Card';
import { FilterContext } from '../../Contexts/FilterContext';


const Search = (props) => {
    const [filteredProducts] = useContext(FilterContext);

    useEffect(() => {
        props.dispatch(getAccesoriesToApi())
        props.dispatch(getManClothesToApi())
        props.dispatch(getShoesToApi())
        props.dispatch(getWomenClothesToApi())
    },[])

    const allProducts = {
        accessories: props.accessories,
        manClothes: props.manClothes,
        womanClothes: props.womenClothes,
        sneakers: props.sneakers
    }

const result = allProducts.accessories.filter((element)=>
    element.title.includes(filteredProducts)
)
const result1 = allProducts.manClothes.filter((element)=>
    element.title.includes(filteredProducts)
)
const result2 = allProducts.womanClothes.filter((element)=>
    element.title.includes(filteredProducts)
)
const result3 = allProducts.sneakers.filter((element)=>
    element.title.includes(filteredProducts)
)

const productsResult = [...result, ...result1, ...result2, ...result3]
console.log('RESULTADOS DE LA BÚSQUEDA-->',productsResult);

return (
        <div>
        {productsResult.map(product =>
        <Card product={product} />
        )}
        </div>
)
}
const mapStateToProps = (state) => ({
    accessories:state.api.accessories,
    manClothes:state.api.manClothes,
    womenClothes:state.api.womenClothes,
    sneakers:state.api.sneakers
})
export default connect(mapStateToProps)(Search)