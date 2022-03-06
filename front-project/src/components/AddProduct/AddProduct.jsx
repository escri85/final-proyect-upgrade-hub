import React, { useState } from "react";
import { InputNumber } from "primereact/inputnumber";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import axios from "axios";
import { Button } from "primereact/button";
import { Dropdown } from 'primereact/dropdown';
import swal from "sweetalert";
import "./AddProduct.scss";
const AddProduct = () => {
  const INITIAL_STATE = {
    title: "",
    categorie: "",
    price: 0,
    description: "",
    stock: 0,
    image: "",
  };

  const [newProduct, setNewProduct] = useState(INITIAL_STATE);
  const [catego,setCatego] = useState({});
const [routesCategorie,setRoutescategorie] = useState('')

 
  const handleChange = (event) => {
    const names = event.target.name;
    const values = event.target.value;
    setNewProduct({
      ...newProduct,
      [names]: values,
    });
  };
  const postApi =  () => {
    const addProduct = {
      title: newProduct.title,
      price: newProduct.price,
      categorie: newProduct.categorie,
      description: newProduct.description,
      stock: newProduct.stock,
      image: newProduct.image,
    }
   console.log(addProduct);
     const sendProduct =  axios.post(`http://localhost:4000/${routesCategorie}`, addProduct);
      
   console.log('sendproduct',routesCategorie);
    console.log(
      "el producto se envio desde el front correctamente",
      sendProduct
    );
  };
  const onSubmit = (event) => {
    event.preventDefault();
    swal("Producto subido!!");
    postApi();
  };
  const onCityChange = (event) => {
    console.log(event.value.name);
    const values = event.value
    setCatego(values);
    console.log(catego);
    switch (catego.name) {
      case 'Accesorios':
        setRoutescategorie('accesories')
        break;
        case "Ropa para hombre":
        setRoutescategorie('manproducts')
        break;
        // case "Complementos":
        // setRoutescategorie('accesories')
        // break;
        case "Ropa para mujer":
        setRoutescategorie('woman')
        break;
        case "Sneakers":
        setRoutescategorie('sneakers')
        break;
      default:
        break;
    }
}
const categories = [
  { name: 'Accesorios'},
  { name:  "Ropa para hombre" },
  { name: "Complementos"},
  { name: "Sneakers"},
  { name:  "Ropa para mujer"}
];
  return (
    <div className="addProduct">
      <div className="addProduct__edit">
        <h1>Edita tu articulo</h1>
        <form action="" onSubmit={onSubmit} className="form">
          <label htmlFor="categorias">Categoria del producto</label>
          <Dropdown
          id="categorias"
            value={catego}
            options={categories}
            onChange={onCityChange}
            optionLabel="name"
            placeholder="Elige una categoria"
          />
          <label htmlFor="titulo">Pon un nombre a tu articulo</label>
          <InputText
            id="titulo"
            onChange={handleChange}
            placeholder="articulo"
            name="title"
          />
          <label htmlFor="stacked">Pon un precio</label>

          <InputNumber
            inputId="stacked"
            onValueChange={handleChange}
            showButtons
            mode="currency"
            currency="EUR"
            name="price"
          />
          <label htmlFor="descripcion">Descripcion</label>
          <InputTextarea
            id="descripcion"
            onChange={handleChange}
            rows={5}
            cols={30}
            autoResize
            placeholder="Describe brevemente tu articulo"
            name="description"
          />
          <label htmlFor="stock">Cuantos articulos vas a vender</label>

          <InputNumber
            id="stock"
            inputId="minmax-buttons"
            onValueChange={handleChange}
            mode="decimal"
            showButtons
            min={0}
            max={100}
            name="stock"
          />
          <label htmlFor="url">Pon tu direccion de imagen</label>
          <InputText
            id="url"
            onChange={handleChange}
            placeholder="imagen"
            name="image"
          />
          <Button label="Submit" />
        </form>
      </div>
      <div className="addProduct__confirm">
        <h1>Asi se vera en nuestra pagina</h1>
        <div className="el-wrapper">
          <div className="box-up">
            <img className="img" src={newProduct.image} alt="" />
            <div className="img-info">
              <div className="info-inner">
                <span className="p-name">{newProduct.title}</span>
                {/* <span className="p-company">{product.categorie}</span> */}
              </div>
              <div className="a-size">{newProduct.description}</div>
            </div>
          </div>

          <div className="box-down">
            <div className="h-bg">
              <div className="h-bg-inner"></div>
            </div>

            <a className="cart" htmlFor="#">
              <span className="price">{newProduct.price}€</span>
              <span className="add-to-cart">
                <span className="txt">Añadir al carrito</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
