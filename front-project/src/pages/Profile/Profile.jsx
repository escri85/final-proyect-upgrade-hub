import { ProfileNavbar, UserSettingsModal } from '../../components';
import { Divider } from 'primereact/divider';
import { useContext } from 'react';
import { Card } from '@nextui-org/react';
import {connect} from 'react-redux';
import { ProfileContext } from '../../Contexts/ProfileContext';
import './Profile.scss';


const Profile = ({dispatch, user}) =>{
    const [profileNavbarActions, setProfileNavbarActions] = useContext(ProfileContext);

    const userLoggedIn = user.email;
    console.log(user)

    return <div className='profile'>
                <div className='profile__header'>
                    <Card bordered shadow={false} color="gradient" hoverable css={{ mw: "400px" }}>
                        <p>Has iniciado sesión como <span>{userLoggedIn}</span></p>
                    </Card>
                </div>
                <div className='profile__content'>
                    <div className='profile__content-leftbar'>
                        <ProfileNavbar/>
                    </div>
                    <div className='profile__content-main'>
                        <div className='profile__content-main-favproducts'>
                        {/* SHOW FAV PRODUCTS */}
                        {(profileNavbarActions.showFavProducts)
                        ?
                            (profileNavbarActions.showFavProducts.length <3)
                            ?
                            /* AQUÍ RECORREREMOS A FUTURO EL LOCAL STORAGE DE PRODUCTOS FAVORITOS
                            ESTE MAP ES UNA PRUEBA SIMPLEMENTE */
                            profileNavbarActions.showFavProducts.map(product=>{
                                <p>{product.title}</p>
                                //CARTA -> PRODUCTOS
                            })
                            :
                            <p>Vaya! Todavía no has añadido tus productos favoritos!</p>
                        :
                        <p>Puedes usar el menú para acceder a los datos de tu perfil, buscar tus productos favoritos, etc</p>
                        }
                        </div>
                        {/* ¿ CAMBIAR E-MAIL ?  -> profileNavbarActions.showUserMail */}
                        {
                        (profileNavbarActions.showUserMailSettings)
                        ?
                        <UserSettingsModal/>
                        :
                        <p>INACTIVO</p>
                        }
                    </div>
                </div>
    </div>
}

const mapStateToProps = (state) =>({
    user: state.auth.user,
});


export default connect(mapStateToProps)(Profile);
