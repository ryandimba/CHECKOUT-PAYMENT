import React, { useEffect, useState } from 'react';
import axios from "axios";
import { userData } from './Helpers';

function Profile() {
    const [userDetails, setUserDetails] = useState([]);
    const [username, setUsername] = useState('');

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const storedUsername = localStorage.getItem('username');

                if (storedUsername) {
                    setUsername(storedUsername);
                    const response = await axios.get(
                        `https://checkout-barber-django-rest-api.onrender.com/api/users/details/byid/?username=${storedUsername}`
                    );
                    setUserDetails(response.data); // Make sure response.data is what you expect
                    console.log(response.data)
                }
            } catch (error) {
                console.error('Error fetching user details:', error);
            }
        };
        fetchUserDetails();
    }, [username]);

    const { userName,phoneNumber } = userData()
    return (
        <div className="container">
        Welcome {userName}, your phone number is {phoneNumber}
            {userDetails.map((list, index) => (
                <div key={index}>
                    ID: {list.id}
                    <p></p>
                    Name: {list.fullname}
                    <p></p>
                    Email: {list.email}
                    <p></p>
                    Birthdate: {list.birthdate}
                    <p></p>
                    Locaton: {list.location}
                </div>
            ))}
        </div>
    );
}

export default Profile;
