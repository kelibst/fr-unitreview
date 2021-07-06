import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import Icofont from "react-icofont";

class AddUnit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
    };
  }
  render() {
    const handleShow = () => {
      this.setState({
        show: true,
      });
    };
    const handleClose = () => {
      this.setState({
        show: false,
      });
    };
    const { show } = this.state;
    return (
      <div className="unit-side-btn">
        <Button
          variant="transparent"
          className="btn unit-btn"
          onClick={handleShow}
        >
          Add Unit
          <Icofont icon="ui-add" className="unit-add" />
        </Button>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton> 
        <Modal.Title>Add a new Unit</Modal.Title>
        <Modal.Body>
            Form here
        </Modal.Body>
        </Modal.Header>
        </Modal>
      </div>
    );
  }
}

export default AddUnit;
