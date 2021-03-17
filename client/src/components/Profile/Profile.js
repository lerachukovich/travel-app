import React, { useContext, useEffect } from 'react';
import { Card, CardBody, CardHeader, CardImg } from 'reactstrap';
import { AuthContext } from '../../context/AuthContext';
import {dictionary} from './../../data/dictionary';

import './Profile.scss';

const Profile = ({language, setSearchVisibility}) => {
    const auth = useContext(AuthContext);

    useEffect(()=> setSearchVisibility(), [setSearchVisibility]);

    return (
        <div>            
            <Card className="country-card" >
                <CardHeader>{dictionary[language]['profile-message']}!</CardHeader>
                <CardImg src={auth.photo} alt='avatar' />
                <CardBody>{dictionary[language]['me']} {auth.name}</CardBody>
            </Card>
        </div>
    )
}

export default Profile;
