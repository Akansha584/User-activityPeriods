import React, { Component } from "react";
import { Button, Modal, Table } from "react-bootstrap";

class ModalData extends Component {
  state = {
    show: false,
    setShow: false,
  };

  handleClose = () => {
    this.setState({
      setShow: false,
    });
  };

  handleShow = () => {
    this.setState({
      setShow: true,
    });
  };

  render() {
    return (
      <>
        <Button variant="primary" onClick={this.handleShow}>
          <b>{this.props.name}</b> <br /> {this.props.location}
        </Button>

        <Modal show={this.state.setShow} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Start Time</th>
                  <th>End Time</th>
                </tr>
              </thead>
              <tbody>
                {this.props.activityPeriods.map((key, index) => {
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{key.start_time}</td>
                      <td>{key.end_time}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default ModalData;
