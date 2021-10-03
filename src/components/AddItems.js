import React, { Component } from 'react';

export default class AddItems extends Component {
  state = {
    name: '',
    description: '',
    price:'',
    quantity:'',
  };
  add = (e) => {
    e.preventDefault();
    if (this.state.name === '' || this.state.description === ''||this.state.price===''||this.state.quantity==='') {
      alert('invalid value');
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({ name: '', description: '' ,price:'',quantity:''});
    this.props.history.push('/itemlist');
  };
  render() {
    return (
      <div className="ui main">
        <h2>Add Items</h2>
        <form className="ui form" onSubmit={this.add}>
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
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}
