import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class ProductList extends Component {
  render() {
    let { onAddToCart, productsData, setStateModal } = this.props;

    return (
      <div className="row">
        {productsData.map((product) => {
          return (
            <ProductItem
              key={product.id}
              item={product}
              setStateModal={setStateModal}
              onAddToCart={onAddToCart}
            />
          );
        })}
      </div>
    );
  }
}
