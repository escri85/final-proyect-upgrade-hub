import React from 'react'
import { useState, useEffect } from 'react';


import './Search.scss';
import { getAccesoriesToApi, getManClothesToApi, getShoesToApi, getWomenClothesToApi } from '../../redux/actions/apiActions';
import { connect } from 'react-redux';
import Card from '../Card/Card';


const Search = (props) => {
    useEffect(() => {
        props.dispatch(getAccesoriesToApi())
        props.dispatch(getManClothesToApi())
        props.dispatch(getShoesToApi())
         props.dispatch(getWomenClothesToApi())
        console.log("Estas son las props", props);
        //eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

const searchAcc = props.accessories
 const searchManClot = props.manClothes
 const searchWmClot = props.womenClothes
 const searchSneakers = props.sneakers
console.log("este es el Search Acc", searchAcc);
const [inputValue, setInputValue] = useState()
// const [acc, setAcc] = useState("");
// const [man, setMan] = useState("");
// const [wom, setWom] = useState("");
// const [sneaker, setSneaker] = useState("");


console.log(inputValue);

const result = searchAcc.filter((element)=>
    element.title.includes(inputValue)
)
const result1 = searchManClot.filter((element)=>
    element.title.includes(inputValue)
)
const result2 = searchWmClot.filter((element)=>
    element.title.includes(inputValue)
)
const result3 = searchSneakers.filter((element)=>
    element.title.includes(inputValue)
)

const filteredProducts = [...result, ...result1, ...result2, ...result3]



console.log(filteredProducts);
  return (
    <div>
     

        <input type="text" 
        onChange={(event) => {
            setInputValue(event.target.value)
            // setMan(event.target.value)
            // setWom(event.target.value)
            // setSneaker(event.target.value)
        } }
        placeholder='...'></input>
        {/* <button onClick={searchAcc}
        >Search</button>
     */}
       {filteredProducts.map(product => 
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