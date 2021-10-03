import React from 'react'
import { Route } from 'react-router'
import { useSelector } from 'react-redux'
import Redirect from './Redirect'

const Logout = ({children,...rest}) => {
    const { currentUser } = useSelector((state) => state.user);
    return currentUser? <Route {...rest}/>:<Redirect/>;
};

export default Logout
