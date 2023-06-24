import React,{ useContext, useEffect, useState } from 'react';
import authContext from './AuthContext';
import {useNavigate} from 'react-router-dom';

const Profile = () => {

    const navigate = useNavigate();

    const [userDetails, setUserDetails] = useContext(authContext);

    const [profile, setProfile] = useState({});
    
    useEffect(()=>{
        if(!userDetails.id){
            alert("please Login first");
            navigate('/');
        }
        fetch(`https://dummyjson.com/users/${userDetails.id}`)
        .then(response => response.json())
        .then(data=>setProfile(data))
        .catch(error => console.log("There was an error fetching",error));
    },[])

    return (        
            <div className='profile'>
                <h1>Profile</h1>
                <p>Id: {profile.id} </p>
                <p>First Name: {profile.firstName} </p>
                <p>Last Name: {profile.lastName} </p>
                <p>Maiden Name: {profile.maidenName} </p>
                <p>Age: {profile.age} </p>
                <p>Gender: {profile.gender} </p>
                <p>Email: {profile.email} </p>
                <p>Phone: {profile.phone} </p>
                <p>User Name: {profile.username} </p>
                <p>Password: {profile.password} </p>
                <p>Birth Date: {profile.birthDate} </p>
                <p>Blood Group: {profile.bloodGroup} </p>
                <p>Height: {profile.height} </p>
                <p>Weight: {profile.weight} </p>
                <p>EyeColor: {profile.eyeColor} </p>
                <p>Domain: {profile.domain} </p>
                <p>ip: {profile.ip} </p>
                <p>macAddress: {profile.macAddress} </p>
                <p>University: {profile.university} </p>
                <img src={profile.image}/>
            </div>
    );
};

export default Profile;