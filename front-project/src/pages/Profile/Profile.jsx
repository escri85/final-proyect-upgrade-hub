import { ProfileNavbar } from '../../components';
import { Divider } from 'primereact/divider';
import { useContext } from 'react';
import { Card } from '@nextui-org/react';
import {connect} from 'react-redux';
import { ProfileContext } from '../../Contexts/ProfileContext';
import './Profile.scss';


const Profile = ({dispatch, user}) =>{
    const [profileNavbarActions, setProfileNavbarActions] = useContext(ProfileContext);

    const userLoggedIn = user.email;

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
                        {(profileNavbarActions.showFavProducts)
                        ?
                            (profileNavbarActions.showFavProducts.length <3)
                            ?
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
                </div>
    </div>
}

const mapStateToProps = (state) =>({
    user: state.auth.user,
});


export default connect(mapStateToProps)(Profile);
