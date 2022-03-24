import { useEffect } from 'react'
import { connect } from 'react-redux'
import { getAccesoriesToApi, getManClothesToApi, getWomenClothesToApi } from '../../../../redux/actions/apiActions'
import './NoCart.scss'

//MUI
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea, CardActions } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { addProductToCart } from '../../../../redux/actions/cartActions';


export const NoCart = (props) => {

    useEffect(() => {
        props.dispatch(getAccesoriesToApi())
        props.dispatch(getManClothesToApi())
        props.dispatch(getWomenClothesToApi())

         //eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const allProducts = {
        accessories: props.accessories,
        manClothes: props.manClothes,
        womanClothes: props.womenClothes,
    }


    const result = allProducts.accessories.filter((element)=>
        element.title.includes("Pañuelo")
    )

    const result1 = allProducts.womanClothes.filter((element)=>
        element.title.includes("Falda")
    )

    const result2 = allProducts.manClothes.filter((element)=>
        element.title.includes("cazadora")
    )

    const productsResult = [...result, ...result1, ...result2]

    return (<div className="c-nocart">

        <div className="c-nocart__div">
            <img src="https://cdn.discordapp.com/attachments/954061730814787637/955412143614857236/Nueva_Coleccion.png" alt="icono" />
        </div>

        <div className="c-nocart__examples">
                {productsResult.map((item) => (
                    <Card key={item.id} sx={{ maxWidth: 200 , maxheight: 350, margin: 1 }}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="140"
                            image={item.image}
                            alt="imagen cart"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {item.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {item.price}
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                        <IconButton onClick={()=>{props.dispatch(addProductToCart(item))}} aria-label="add to favorites">
                            <AddShoppingCartIcon color="action" />
                        </IconButton>
                        </CardActions>
                    </Card>
                ))}
        </div>
    </div>)
}

const mapStateToProps = state => ({
    
    accessories: state.api.accessories,
    manClothes:state.api.manClothes,
    womenClothes:state.api.womenClothes,
});

export default connect(mapStateToProps)(NoCart)