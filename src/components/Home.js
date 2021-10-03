import React from 'react';
import '../style/Home.css'
import { LogoutInitiate } from '../Redux/Action';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const handleLogout = () => {
    if (currentUser) {
      dispatch(LogoutInitiate());
    }
  };
  return (
    <div className="primary_1">
      <h1>welcome</h1>
      <button className="btn btn-primary" onClick={handleLogout}>
        logout
      </button>
      <NavLink activeClassName="active" to="/add">
        <button className="btn">Add Item</button>
      </NavLink>
      <NavLink activeClassName="active" to="/itemlist">
        <button className="btn button_primary">itemList</button>
      </NavLink>
    </div>
  );
};

export default Home;
