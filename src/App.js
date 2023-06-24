import React from 'react';
import Login from './Components/Login';
import Profile from './Components/Profile';
import {Routes, Route} from 'react-router-dom';

const App = () => {
    return (
        <>
            <Routes>
                <Route path='/profile' element={<Profile />}/> 
                <Route path='/' element={<Login />}/> 
            </Routes>
        </>
    );
};

export default App;