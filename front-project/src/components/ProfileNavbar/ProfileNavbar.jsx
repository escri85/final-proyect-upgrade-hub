import { PanelMenu } from 'primereact/panelmenu';
import { useContext } from 'react';
import { ProfileContext } from '../../Contexts/ProfileContext';
import './ProfileNavbar.scss';

const ProfileNavbar = () =>{
    const [profileNavbarActions, setProfileNavbarActions] = useContext(ProfileContext);

    var showFavProductsFlag = false;
    var showOrdersFlag = false;
    var showUserMailSettingsFlag = false;

        const items = [
            {
            label:'Favoritos',
            icon:'pi pi-fw pi-star-fill',
            items:[
                {
                    label:'Lista',
                    icon:'pi pi-fw pi-list',
                    command: () =>{
                        setProfileNavbarActions({
                            showFavProducts: !showFavProductsFlag,
                            showUserMailSettings: showUserMailSettingsFlag,
                            showOrders: showOrdersFlag,
                        });
                        console.log(profileNavbarActions)
                    }
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
                    icon:'pi pi-fw pi-envelope',
                    command: () =>{
                        setProfileNavbarActions({
                            showFavProducts: showFavProductsFlag,
                            showUserMailSettings: !showUserMailSettingsFlag,
                            showOrders: showOrdersFlag
                        })
                        console.log(profileNavbarActions);
                    }
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
                    command: () =>{
                        setProfileNavbarActions({
                            showFavProducts: showFavProductsFlag,
                            showUserMailSettings: showUserMailSettingsFlag,
                            showOrders: !showOrdersFlag
                        });
                        console.log(profileNavbarActions)
                    }
                },
            ]
            }
        ];

    return <PanelMenu model={items} className="panelmenu"/>
}

export default ProfileNavbar;