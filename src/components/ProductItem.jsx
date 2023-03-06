import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    let { item, setStateModal, onAddToCart } = this.props;
    return (
      <div className="col-4 mt-4">
        <div className="card">
          <img className="card-img-top" src={item.image} alt={item.image} />
          <div className="card-body">
            <h4 className="card-title">{item.name}</h4>
            <p className="card-text">{item.price} $</p>
            <div className="d-flex align-items-center">
              <button
                onClick={() => {
                  setStateModal(item, true);
                }}
                className="btn btn-danger me-4"
              >
                Detail
              </button>
              <button
                onClick={() => {
                  onAddToCart(item);
                }}
                className="btn btn-dark"
              >
                add to cart <i className="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
