import React from 'react';

const ItemDetails = (props) => {
  console.log(props);
  const { name,description,price,quantity } = props.location.state.contact;
  return (
    <div className="main">
      <div className="ui card centered">
        <div className="content">
          <div className="header">{name}</div>
          <div className="description">{description}</div>
          <div className="description">${price}</div>
          <div className="description">{quantity}</div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
