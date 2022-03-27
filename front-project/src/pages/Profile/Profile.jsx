import { ProfileNavbar, UserSettingsModal } from '../../components';
import { useContext, useEffect, useState } from 'react';
import { Card } from '@nextui-org/react';
import {connect} from 'react-redux';
import { ProfileContext } from '../../Contexts/ProfileContext';
import './Profile.scss';
import { FormattedMessage  as T} from 'react-intl';
import FavLis from './Components/FavLis';
import Nofavs from '../../assets/img/Nofavs.jpeg'


const Profile = ({dispatch, user}) =>{
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
                <div className='profile__content'>
                    <div className='profile__content-leftbar'>
                        <ProfileNavbar/>
                    </div>
                    <div className='profile__content-main'>
                        <div className='profile__content-main-favproducts'>
                            <img src='https://media.discordapp.net/attachments/902982333215412254/957345972722204732/1.jpeg?width=952&height=675'></img>
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
