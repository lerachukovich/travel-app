import React, { useContext } from 'react';
import { Card, CardBody, CardHeader, CardImg } from 'reactstrap';
import { AuthContext } from '../../context/AuthContext';

import './Profile.scss';

const Profile = () => {
    const auth = useContext(AuthContext);

    return (
        <div>            
            <Card className="country-card" >
                <CardHeader>Hello from Profile Page</CardHeader>
                <CardImg src={auth.photo} alt='avatar' />
                <CardBody>I'm {auth.name}</CardBody>
            </Card>
        </div>
    )
}

export default Profile;
