import React, { Component } from 'react';


export default class EditItems extends Component {
    constructor(props){
        super(props);
        const {id,name,description,price,quantity}=props.location.state.contact;
        this.state = {
            id,
          name,
          description,
          price,
          quantity,
        };
    }
  
  update = (e) => {
    e.preventDefault();
    if (
      this.state.name === '' ||
      this.state.description === '' ||
      this.state.price === '' ||
      this.state.quantity === ''
    ) {
      alert('invalid value');
      return;
    }
    this.props.updateContactHandler(this.state);
    this.setState({ name: '', description: '', price: '', quantity: '' });
    this.props.history.push('/itemlist');
  };
  render() {
    return (
      <div className="ui main">
        <h2>Edit Items</h2>
        <form className="ui form" onSubmit={this.update}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              placeholder="Name"
              onChange={(e) => {
                this.setState({ name: e.target.value });
              }}
            />
          </div>
          <div className="field">
            <label>description</label>
            <textarea
              type="text"
              name="description"
              value={this.state.description}
              placeholder="enter description"
              onChange={(e) => {
                this.setState({ description: e.target.value });
              }}
            />
          </div>
          <div className="field">
            <label>price</label>
            <input
              type="number"
              name="price"
              value={this.state.price}
              placeholder="enter price"
              onChange={(e) => {
                this.setState({ price: e.target.value });
              }}
            />
          </div>
          <div className="field">
            <label>quantity</label>
            <input
              type="number"
              name="quantity"
              value={this.state.quantity}
              placeholder="enter quantity"
              onChange={(e) => {
                this.setState({ quantity: e.target.value });
              }}
            />
          </div>
          <button className="ui button blue">update</button>
        </form>
      </div>
    );
  }
}
