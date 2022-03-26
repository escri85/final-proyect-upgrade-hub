import React, { Component, useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { getAccesoriesToApi, getManClothesToApi, getShoesToApi, getWomenClothesToApi } from '../../redux/actions/apiActions';
import { connect } from 'react-redux';
import { Rating } from 'primereact/rating';
import { Button } from 'primereact/button';
import { TabView, TabPanel } from 'primereact/tabview';
import { Panel } from 'primereact/panel';


import './AdminSettings.scss';
import AddProduct from '../AddProduct/AddProduct';
import AdmingModalSettings from './AdminModalSettings/AdmingModalSettings';


const AdminSettings = (props) => {
    const [activeIndex, setActiveIndex] = useState(0)
    const [showAdminModal, setShowAdminModal] = useState(false);


    useEffect(() =>{
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

    const clickFromModal = (id) => {
        console.log(id)
        setShowAdminModal(!showAdminModal)
    };

    const getNames = (product) => product.title.toLowerCase();
    const getImage = (product) => <img src={product.image}></img>;
    const getStock = (product) => `${product.stock} unidades`;
    const getCategorie = (product) => product.categorie;
    const getPrice = (product) =>  `${product.price} €`;
    const getRating = (product) => <Rating value={product.rating} readOnly cancel={false}></Rating>;

    const lowStock = <div className='lastunits'>Últimas unidades</div>;
    const inStock = <div className='inStock'>En stock</div>;
    const outOfStock = <div className='outOfStock'>Fuera de stock</div>;
    const btnActions = <div className='btnActions'>;

        <div>
            <Button icon="pi pi-pencil" className='p-button-success btnActions-btn' iconPos="right" onClick={()=>{clickFromModal()}} />
        </div>
        <div>
            {/* ESTE BOTÓN NO MOSTRARÁ MODAL, MOSTRARÁ PANTALLA DE CONFIRMACIÓN Y ELIMINARÁ EL PRODUCTO */}
            <Button icon="pi pi-trash" className='p-button-warning btnActions-btn' iconPos="left" onClick={()=>{setShowAdminModal(!showAdminModal)}} />
        </div>
    </div>;

    const getStatus = (product) => {
        if(product.stock <4){
            return lowStock
        }else if(product.stock === 0){
            return outOfStock
        }else{
            return inStock
        }
    }

    return (
        <div className='adminpanel'>
            {(showAdminModal) ? <AdmingModalSettings/> : ''}
            <div className='adminpanel__header'>
                <Panel header = "Panel de administración" toggleable>
                    <p><i className='pi pi-pencil'></i> Edita el stock de almacén según necesidad</p>
                    <p><i className='pi pi-plus'></i> Sube tus productos mientras obtienes una vista previa</p>
                    <p><i className='pi pi-trash'></i> Elimina productos</p>
                </Panel>
            </div>
            <div className='adminpanel__products'>
            <TabView activeIndex={activeIndex} onTabChange={(e) =>setActiveIndex(e.index)}>
                <TabPanel className="adminpanel__products-tabpanel" header="Subir artículo" leftIcon='pi pi-plus'>
                    <div className='uploadProduct'>
                        <AddProduct/>
                        <p>Puedes pasar el ratón por encima de la vista previa para ver los detalles</p>
                    </div>
                </TabPanel>
                <TabPanel className="adminpanel__products-tabpanel" header="Acesorios" leftIcon='pi pi-pencil'>
                    <div className="card__accesories">
                        <DataTable value={allProducts.accessories} responsiveLayout="scroll">
                            <Column field="Nombre" header="Nombre" body={getNames}></Column>
                            <Column field="Imagen" header="Imagen" body={getImage}></Column>
                            <Column field="Categoría" header="Categoría" body={getCategorie}></Column>
                            <Column field="Precio" header="Precio" body={getPrice}></Column>
                            <Column field="Rating" header="Rating" body={getRating}></Column>
                            <Column field="Estado" header="Estado" body={getStatus}></Column>
                            <Column field="Stock" header="Stock" body={getStock}></Column>
                            <Column field="Acciones" header="Acciones" body={btnActions}></Column>
                        </DataTable>
                    </div>
                </TabPanel>
                <TabPanel className="adminpanel__products-tabpanel" header="Calzado" leftIcon='pi pi-pencil'>
                    <div className='card__sneakers'>
                        <DataTable value={allProducts.sneakers} responsiveLayout="scroll">
                            <Column field="Nombre" header="Nombre" body={getNames}></Column>
                            <Column field="Imagen" header="Imagen" body={getImage}></Column>
                            <Column field="Categoría" header="Categoría" body={getCategorie}></Column>
                            <Column field="Precio" header="Precio" body={getPrice}></Column>
                            <Column field="Rating" header="Rating" body={getRating}></Column>
                            <Column field="Estado" header="Estado" body={getStatus}></Column>
                            <Column field="Stock" header="Stock" body={getStock}></Column>
                            <Column field="Acciones" header="Acciones" body={btnActions}></Column>
                        </DataTable>
                    </div>
                </TabPanel>
                <TabPanel className="adminpanel__products-tabpanel" header="Ropa para mujer" leftIcon='pi pi-pencil'>
                    <div className='card__womenClothes'>
                        <DataTable value={allProducts.womanClothes} responsiveLayout="scroll">
                            <Column field="Nombre" header="Nombre" body={getNames}></Column>
                            <Column field="Imagen" header="Imagen" body={getImage}></Column>
                            <Column field="Categoría" header="Categoría" body={getCategorie}></Column>
                            <Column field="Precio" header="Precio" body={getPrice}></Column>
                            <Column field="Rating" header="Rating" body={getRating}></Column>
                            <Column field="Estado" header="Estado" body={getStatus}></Column>
                            <Column field="Stock" header="Stock" body={getStock}></Column>
                            <Column field="Acciones" header="Acciones" body={btnActions}></Column>
                        </DataTable>
                    </div>
                </TabPanel>
                <TabPanel className="adminpanel__products-tabpanel" header="Ropa para Hombre" leftIcon='pi pi-pencil'>
                    <div className='manClothes'>
                        <DataTable value={allProducts.manClothes} responsiveLayout="scroll">
                            <Column field="Nombre" header="Nombre" body={getNames}></Column>
                            <Column field="Imagen" header="Imagen" body={getImage}></Column>
                            <Column field="Categoría" header="Categoría" body={getCategorie}></Column>
                            <Column field="Precio" header="Precio" body={getPrice}></Column>
                            <Column field="Rating" header="Rating" body={getRating}></Column>
                            <Column field="Estado" header="Estado" body={getStatus}></Column>
                            <Column field="Stock" header="Stock" body={getStock}></Column>
                            <Column field="Acciones" header="Acciones" body={btnActions}></Column>
                        </DataTable>
                    </div>
                </TabPanel>
            </TabView>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    accessories:state.api.accessories,
    manClothes:state.api.manClothes,
    womenClothes:state.api.womenClothes,
    sneakers:state.api.sneakers
})


export default connect(mapStateToProps)(AdminSettings);
