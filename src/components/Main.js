import React from 'react'


import {  Routes, Route } from 'react-router-dom'
import Home from './screens/Home'
import Profile from './screens/Profile'
import SelectAccount from './screens/SelectAccount'


require('es6-promise').polyfill();
require('isomorphic-fetch');

export default class Main extends React.Component {
    render(){
        return(
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/select-account" element={<SelectAccount />} />
            </Routes>
        )
    }
}
