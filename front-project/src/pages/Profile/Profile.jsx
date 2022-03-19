import { ProfileNavbar } from '../../components';
import { Divider } from 'primereact/divider';
import { Card } from '@nextui-org/react';
import {connect} from 'react-redux';
import './Profile.scss';


const Profile = ({dispatch, user}) =>{

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
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis nulla minima praesentium nemo incidunt quos temporibus? Eveniet autem saepe architecto placeat inventore dignissimos alias, illum, tenetur, possimus atque totam ex.</p>
                    </div>
                </div>
    </div>
}

const mapStateToProps = (state) =>({
    user: state.auth.user,
});


export default connect(mapStateToProps)(Profile);
