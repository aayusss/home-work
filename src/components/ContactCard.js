import React from 'react';
import { NavLink } from 'react-router-dom';

const ContactCard = (props) => {
  const { id, name, description,price,quantity } = props.contact;
  return (
    <div className="item">
      <div className="content">
        <NavLink
          to={{ pathname: `/contact/${id}`, state: { contact: props.contact } }}
        >
          <div className="header">{name}</div>
          <div className="description">{description}</div>
          <div className="description">{price}</div>
          <div className="description">{quantity}</div>
        </NavLink>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: 'red', marginTop: '7px',marginLeft:'10px' }}
        onClick={() => {
          props.clickHandler(id);
        }}
      ></i>
       <NavLink
          to={{ pathname: `/edit`, state: { contact: props.contact } }}
        >
      <i
        className="edit alternate outline icon"
        style={{ color: 'red', marginTop: '7px' }}
        onClick={() => {
          props.clickHandler(id);
        }}
        ></i>
        </NavLink>
      
    </div>
  );
};

export default ContactCard;
