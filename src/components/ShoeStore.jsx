import React, { Component } from "react";
import data from "../data/data.json";
import ProductList from "./ProductList";
import ModalProduct from "./ModalProduct";
import Cart from "./Cart";

export default class ShoeStore extends Component {
  state = {
    productDetail: data[0],
    itemCart: [],
    show: false,
    showCart: false,
  };

  setStateModal = (sp, nextState) => {
    this.setState({
      productDetail: sp,
      show: nextState,
    });
  };

  handleClose = () => {
    this.setState({
      show: false,
    });
  };

  handleCloseCart = () => {
    this.setState({
      showCart: false,
    });
  };

  handleOpenCart = () => {
    this.setState({
      showCart: true,
    });
  };

  handleAddToCart = (prod) => {
    const cloneCart = [...this.state.itemCart];
    const foundProduct = cloneCart.find((item) => {
      return item.product.id === prod.id;
    });
    //Nếu chưa có sản phẩm
    if (!foundProduct) {
      //tạo 1 cart item mới
      const cartItem = {
        product: prod,
        quantity: 1,
      };
      cloneCart.push(cartItem);
    }
    // Nếu đã có sản phẩm
    else {
      foundProduct.quantity += 1;
    }

    this.setState({
      itemCart: cloneCart,
    });
  };

  handleQuanity = (type, prod) => {
    const cloneCart = this.state.itemCart;
    const foundProduct = cloneCart.find((item) => {
      return item.product.id === prod.product.id;
    });

    if (type === "-" && foundProduct.quantity > 1) {
      foundProduct.quantity -= 1;
    }

    if (type === "+" && foundProduct.quantity < foundProduct.product.quantity) {
      foundProduct.quantity += 1;
    }
    this.setState({
      cart: cloneCart,
    });
  };

  handleDeleteItem = (prod) => {
    const cloneCart = [...this.state.itemCart];
    const foundProduct = cloneCart.findIndex((item) => {
      return item.product.id === prod.id;
    });
    if (typeof foundProduct === "number") {
      cloneCart.splice(foundProduct, 1);
    }
    this.setState({
      itemCart: cloneCart,
    });
  };

  handleCheckout = () => {
    this.setState({
      itemCart: [],
      showCart: false,
    });
  };
  render() {
    let products = data;

    return (
      <div>
        <div
          style={{
            position: "fixed",
            fontSize: "28px",
            top: 10,
            right: 10,
            width: 60,
            height: 60,
            lineHeight: "60px",
            borderRadius: 15,
            color: "#fff",
            backgroundColor: "#000",
            textAlign: "center",
            cursor: "pointer",
          }}
          onClick={this.handleOpenCart}
        >
          <i className="fa-brands fa-opencart"></i>
        </div>
        <ProductList
          productsData={products}
          setStateModal={this.setStateModal}
          onAddToCart={this.handleAddToCart}
        />
        <ModalProduct
          content={this.state.productDetail}
          controlModal={this.state.show}
          onClose={this.handleClose}
        />
        <Cart
          onClose={this.handleCloseCart}
          item={this.state.itemCart}
          stateCart={this.state.showCart}
          onQuantity={this.handleQuanity}
          onDelete={this.handleDeleteItem}
          onCheckout={this.handleCheckout}
        />
      </div>
    );
  }
}
