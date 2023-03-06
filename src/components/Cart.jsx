import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

export default class Cart extends Component {
  tongTien = (products) => {
    let sum = 0;
    products.map((prod) => {
      return (sum += prod.product.price * prod.quantity);
    });
    return sum;
  };
  renderProduct = (products, onQuantity, onDelete) => {
    return products.map((prod) => {
      return (
        <tr key={prod.product.id}>
          <td>{prod.product.id}</td>
          <td>
            <img
              src={prod.product.image}
              alt={prod.product.image}
              width="150"
            />
          </td>
          <td>{prod.product.name}</td>
          <td className="d-flex align-items-center justify-content-around">
            <button
              className="btn btn-primary"
              onClick={() => {
                onQuantity("-", prod);
              }}
            >
              -
            </button>
            <i style={{ fontWeight: 500, marginTop: "5px" }}>{prod.quantity}</i>
            <button
              className="btn btn-primary"
              onClick={() => {
                onQuantity("+", prod);
              }}
            >
              +
            </button>
          </td>
          <td>{prod.product.price} $</td>
          <td>{prod.product.price * prod.quantity} $</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => {
                onDelete(prod.product);
              }}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    let { onClose, item, stateCart, onQuantity, onDelete, onCheckout } =
      this.props;

    return (
      <div>
        <Modal show={stateCart} onHide={onClose} size="xl">
          <Modal.Header closeButton>
            <Modal.Title>Giỏ hàng</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Table bordered>
              <thead>
                <tr>
                  <th>Mã sản phẩm</th>
                  <th>Hình ảnh</th>
                  <th>Tên sản phẩm</th>
                  <th>Số lượng</th>
                  <th>Đơn giá</th>
                  <th>Thành tiền</th>
                </tr>
              </thead>
              <tbody>
                {item.length > 0
                  ? this.renderProduct(item, onQuantity, onDelete)
                  : null}
              </tbody>
            </Table>
          </Modal.Body>
          <Modal.Footer>
            <div className="d-flex align-items-baseline justify-content-between w-100">
              <p>Tổng tiền:{this.tongTien(item)} $</p>
              <div>
                <Button variant="secondary" onClick={onClose} className="me-4">
                  Close
                </Button>
                <Button variant="success" onClick={onCheckout}>
                  Thanh toán
                </Button>
              </div>
            </div>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
