import { ProfileNavbar, UserSettingsModal } from '../../components';
import { Divider } from 'primereact/divider';
import { useContext } from 'react';
import { Card } from '@nextui-org/react';
import {connect} from 'react-redux';
import { ProfileContext } from '../../Contexts/ProfileContext';
import './Profile.scss';
import { FormattedMessage  as T} from 'react-intl';
import FavLis from './Components/FavLis';


const Profile = ({dispatch, user}) =>{
    const [profileNavbarActions, setProfileNavbarActions] = useContext(ProfileContext);

    const listFav = JSON.parse(localStorage.getItem("productsFav"));

    console.log("Esta es la lista", listFav);

    const userLoggedIn = user.email;

    return <div className='profile'>
                <div className='profile__header'>
                    <Card bordered shadow={false} color="gradient" hoverable css={{ mw: "400px" }}>
                        <p>< T id='profile.session'/> <span>{userLoggedIn}</span></p>
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
                            (listFav.length > 1)
                            ?
                            <FavLis listFav={listFav} />
                            :
                            <p><T id='profile.favs'/></p>
                        :
                        <p>< T id='profile.menu'/></p>
                        }
                        </div>
                        {/* ¿ CAMBIAR E-MAIL ?  -> profileNavbarActions.showUserMail */}
                        {
                        (profileNavbarActions.showUserMailSettings)
                        ?
                        <UserSettingsModal/>
                        :
                        <p>< T id='profile.inactive'/></p>
                        }
                    </div>
                </div>
    </div>
}

const mapStateToProps = (state) =>({
    user: state.auth.user,
});


export default connect(mapStateToProps)(Profile);
