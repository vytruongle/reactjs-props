import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";

export default class ModalProduct extends Component {
  render() {
    let { content, controlModal, onClose } = this.props;
    return (
      <>
        <Modal show={controlModal} onHide={onClose} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Thông số chi tiết</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-5">
                <h3 style={{ fontSize: "24px" }}>{content.name}</h3>
                <img src={content.image} alt={content.image} width="250" />
              </div>
              <div className="col-7">
                <Table striped bordered hover>
                  <tbody>
                    <tr>
                      <th>Alias</th>
                      <th>{content.alias}</th>
                    </tr>
                    <tr>
                      <th>Description</th>
                      <th>{content.description}</th>
                    </tr>
                    <tr>
                      <th>Short Description</th>
                      <th>{content.shortDescription}</th>
                    </tr>
                    <tr>
                      <th>Quantity</th>
                      <th>{content.quantity}</th>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={onClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
