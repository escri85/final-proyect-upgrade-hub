import './FavLis.scss'

//MUI

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea, CardActions } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { connect } from 'react-redux';
import { addProductToCart } from '../../../redux/actions/cartActions';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


    const FavLis = ({listFav, dispatch}) => {
    
    const list = listFav
    
    console.log("Este es el dispatch", dispatch);

    return (
        <div className="c-favlist">
        {
            list.map(element=>
                <Card key={element.id} sx={{ width: 250 , height: 400, margin: 1 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={element.image}
                            alt="imagen cart"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                                {(element.title).toLowerCase()}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {element.price}
                        </Typography>
                        </CardContent>
                        </CardActionArea>
                        <CardActions>
                        <IconButton onClick={()=>{dispatch(addProductToCart(element))}} aria-label="add to favorites">
                            <AddShoppingCartIcon color="action" />
                        </IconButton>
                        </CardActions>
                    </Card>
            )    
        }
        </div>
    )
}

const mapStateToProps = (state) => ({
    cart: state.cart
})

export default connect(mapStateToProps)(FavLis)