import React from 'react';
import { NavLink } from 'react-router-dom';
import ContactCard from './ContactCard';
import '../style/Home.css';

const ItemList = (props) => {
  console.log(props);
  const deleteHandlerId = (id) => {
    props.getDeleteId(id);
  };
  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHandler={deleteHandlerId}
        key={contact.id}
      />
    );
  });
  return (
    <div
      className=" ui main container flex"
      style={{display:'flex',justifyContent:'space-between'}}
    >
      <h2>Item List</h2>
      <NavLink to="/add">
        <button className="ui button blue right">Add Items</button>
      </NavLink>
      <NavLink activeClassName="active" to="/">
        <button className="ui button blue right">Home</button>
      </NavLink>

      <div className="primary_1">{renderContactList}</div>
    </div>
  );
};

export default ItemList;
