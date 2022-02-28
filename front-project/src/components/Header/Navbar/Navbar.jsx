
import React from 'react';
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';

// import { useNavigate } from "react-router-dom";

const Navbar = () => {
//   const navigate = useNavigate()

    const items = [
        {
            label: 'Hombre',
            
            items: [
                {
                    label: 'Ropa',
                },
                {
                    label: 'Calzado',
          
                },
                // {
                //     separator: true
                // },
                {
                    label: 'Complementos',
                }
            ]
        },
        {
            label: 'Mujer',
            items: [
                {
                    label: 'Ropa',
                },
                {
                    label: 'Calzado',
                },
                {
                    label: 'Complementos',
                },
            ]
        },
        {
            label:'Subir producto',
            icon:'pi pi-fw pi-plus',
        },

   
        {
            label: "Carrito",
            icon: 'pi pi-fw pi-shopping-cart',
            // items: [
            //     {
            //         label: 'Edit',
            //         icon: 'pi pi-fw pi-pencil',
            //         items: [
            //             {
            //                 label: 'Save',
            //                 icon: 'pi pi-fw pi-calendar-plus'
            //             },
            //             {
            //                 label: 'Delete',
            //                 icon: 'pi pi-fw pi-calendar-minus'
            //             }
            //         ]
            //     },
            //     {
            //         label: 'Archieve',
            //         icon: 'pi pi-fw pi-calendar-times',
            //         items: [
            //             {
            //                 label: 'Remove',
            //                 icon: 'pi pi-fw pi-calendar-minus'
            //             }
            //         ]
            //     }
            // ]
        },
        {
            label: "Cuenta",
            icon: "pi pi-fw pi-power-off",
            items: [
              {
                label: "Logout",
                icon: "pi pi-fw pi-cog",
                // command: () => {
                //  navigate("/login");
                // },
              },
              { label: "Sign Out", icon: "pi pi-fw pi-power-off" },
            ],
          }
    ];

    const start = <img alt="logo" src="showcase/images/logo.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} height="40" className="mr-2"></img>;
    const end = <InputText placeholder="Search" type="text" />;

    return (
        <div>
            <div className="card">
                <Menubar model={items} start={start} end={end} />
            </div>
        </div>
    );
}
                 
export default Navbar