import "./Card.scss";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { connect } from "react-redux";
import { Rating } from "primereact/rating";
import { addProductToCart } from "../../redux/actions/cartActions";
import { FormattedMessage  as T} from 'react-intl';
import { useContext, useEffect, useState } from "react";
import { FavContext } from "../../Contexts/FavContext";
import {red} from '@mui/material/colors';



const Card = (props) => {
  const primary = red[500];

  const product = props.product;

  //Context

  const [favInfo, setFavInfo] = useContext(FavContext);

  const addFavList = (item) => {
    const duplicatedFav = favInfo.find(element =>element._id === item._id);
    
    if(duplicatedFav) {
      const positionToDelete = favInfo.indexOf(duplicatedFav)
      favInfo.splice(positionToDelete, 1)
      setFavInfo([...favInfo])
    }else {
      setFavInfo([...favInfo, item])
    }
  }
  useEffect(() => {
    localStorage.setItem("productsFav", JSON.stringify(favInfo))
  }, [favInfo]);


  //Modal  
  
  const [modalAddPage, setModalAddPage] = useState(false)

  const productAdd = () => {

    props.dispatch(addProductToCart(product));  

    setModalAddPage(true)

    setTimeout(function() {
      setModalAddPage(false)
  }, 2000);

  }

  return (
    <>
    <div key={product._id} className="el-wrapper">
      <div className="box-up">
        <img className="img" src={product.image} alt="" />
        <div className="img-info">
          <div className="info-inner">
            <span className="p-name">{product.title}</span>
            <span className="p-company">{product.categorie}</span>
            <Rating value={product.rating} readOnly stars={5} cancel={false} />
                      <span className="price">{product.price} €</span>
          </div>
          <div className="a-size">
            {product.description}{" "}
            {product.stock < 4 ? (
              <h5 className="lastUnits"><T id="card.stock"/> {product.stock} </h5>
            ) : (
              ""
            )}{" "}
          </div>
        </div>
      </div>

      <div className="box-down">
        <div className="h-bg">
          <div className="h-bg-inner"></div>
        </div>

        <div className="cart">

          <span className="add-to-cart">
            <button
              onClick={productAdd}
              className="txt"
            >
              <T id="card.addToCart"/>
            </button>
          </span>
          <span className="fav">
            <IconButton aria-label="add to favorites" onClick={()=>{addFavList(product)}}>
              <FavoriteIcon color="error" />
            </IconButton>
          </span>
        </div>
      </div>
    </div>
    {modalAddPage && <div className="modal-add">
      <h5>Producto añadido al carrito</h5>
    </div>}
    </>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Card);
