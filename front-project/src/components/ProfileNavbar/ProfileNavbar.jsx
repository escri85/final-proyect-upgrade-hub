import { PanelMenu } from 'primereact/panelmenu';
import './ProfileNavbar.scss';

const ProfileNavbar = () =>{
        const items = [
            {
            label:'Favoritos',
            icon:'pi pi-fw pi-star-fill',
            items:[
                {
                    label:'Lista',
                    icon:'pi pi-fw pi-list'
                },
                {
                    label:'Vaciar lista',
                    icon:'pi pi-fw pi-trash'
                }
            ]
            },
            {
            label:'Ajustes',
            icon:'pi pi-fw pi-user',
            items:[
                {
                    label:'E-mail',
                    icon:'pi pi-fw pi-envelope'
                },
                {
                    label:'Contraseña',
                    icon:'pi pi-fw pi-lock'
                },
                {
                    label: 'Billetera',
                    icon: 'pi pi-fw pi-wallet'
                }
            ]
            },
            {
            label:'Pedidos',
            icon:'pi pi-fw pi-shopping-cart',
            items:[
                {
                    label:'Historial',
                    icon:'pi pi-fw pi-calendar',
                },
            ]
            }
        ];

    return <PanelMenu model={items} className="panelmenu"/>
}

export default ProfileNavbar;