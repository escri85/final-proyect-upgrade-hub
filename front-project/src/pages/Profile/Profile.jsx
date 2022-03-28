import { ProfileNavbar, UserSettingsModal } from '../../components';
import { useContext, useEffect, useState } from 'react';
import { Card, Button } from '@nextui-org/react';
import {connect} from 'react-redux';
import { ProfileContext } from '../../Contexts/ProfileContext';
import './Profile.scss';
import { FormattedMessage  as T} from 'react-intl';
import FavLis from './Components/FavLis';
import Nofavs from '../../assets/img/Nofavs.jpeg'
import { useNavigate } from "react-router-dom";

const Profile = ({dispatch, user}) =>{

    const navigate = useNavigate();

    const [profileNavbarActions, setProfileNavbarActions] = useContext(ProfileContext);

    const [favFlag, setFavFlag] = useState(true);

    const [listFav, setListFav] = useState([])

    useEffect(() => {
        setListFav(JSON.parse(localStorage.getItem("productsFav")))
    }, [favFlag]);

    const userLoggedIn = user.email;

    return <div className='profile'>
                <div className='profile__header'>
                    <Card bordered shadow={false} color="gradient" hoverable css={{ mw: "400px" }}>
                        <p>< T id='profile.session'/> <span>{userLoggedIn}</span></p>
                    </Card>
                </div>
                { user.role === "admin" && <><h5 className='profile__header__h5'>Puedes acceder a Administración para gestionar stocks y productos</h5>
                    <div className='profile__subheader'>
                    <Button onClick={()=>{navigate('/admin')}} shadow color="error" auto rounded>
                        Admin stocks 
                    </Button>
                </div></>}
                <div className='profile__content'>
                    <div className='profile__content-leftbar'>
                        <ProfileNavbar/>
                    </div>
                    <div className='profile__content-main'>
                        <div className='profile__content-main-favproducts'>
                        {/* SHOW FAV PRODUCTS */}
                        {(profileNavbarActions.showFavProducts)
                        ?
                            (listFav.length)
                            ?
                            <FavLis favFlag={favFlag} setFavFlag={setFavFlag} listFav={listFav} />
                            :
                            <img src={Nofavs} alt="Nofavs" />
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
                        ""
                        }
                    </div>
                </div>
    </div>
}

const mapStateToProps = (state) =>({
    user: state.auth.user,
});


export default connect(mapStateToProps)(Profile);
