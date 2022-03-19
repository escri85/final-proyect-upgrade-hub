import { ProfileNavbar } from '../../components';
import { Divider } from 'primereact/divider';
import { Card } from '@nextui-org/react';
import './Profile.scss';


const Profile = () =>{
    return <div className='profile'>
                <div className='profile__leftbar'>
                <ProfileNavbar/>
                </div>
                <div className='profile__header'>
                    <Card bordered shadow={false} color="gradient" hoverable css={{ mw: "400px" }}>
                        <p>Bienvenido @Usuario Apellidos!</p>
                    </Card>
                </div>
                <div className='profile__content'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, vel. Dolorem earum quis expedita unde impedit voluptate beatae distinctio recusandae nobis alias nisi, amet sequi, commodi a aut atque dicta.</p>
                </div>
    </div>
}

export default Profile;
