import "./Card.scss";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { connect } from "react-redux";
import { Rating } from "primereact/rating";
import { addProductToCart } from "../../redux/actions/cartActions";
import { useEffect, useState } from "react";

const Card = (props) => {

  const product = props.product;
  
  const [favList, setFavlist] = useState([]);

  const addFavList = () => {
    setFavlist([...favList, product]);
    console.log(favList);
  };

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
          </div>
          <div className="a-size">
            {product.description}{" "}
            {product.stock < 4 ? (
              <h5 className="lastUnits">Solo quedan {product.stock} </h5>
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
          <span className="price">{product.price}€</span>
          <span className="add-to-cart">
            <button
              onClick={productAdd}
              className="txt"
            >
              Añadir al carrito
            </button>
          </span>
          <span className="fav">
            <IconButton aria-label="add to favorites" onClick={addFavList}>
              <FavoriteIcon color="action" />
            </IconButton>
          </span>
        </div>
      </div>
    </div>
    {modalAddPage && <div className="modal-add">
      Jose es el mejor del mundo
    </div>}
    </>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Card);
