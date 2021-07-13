import React, { Component } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import Icofont from "react-icofont";
import { connect } from "react-redux";
import { createUnit } from "../../store/actions/unitAction";
import ErrOrs from "../ErrOrs";
import Success from "../Success";

class AddUnit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
    };
  }
  componentDidUpdate(){
    const { show } = this.state
    const { success } = this.props

    success?.type === "unit_create_success" && show && this.setState({
      ...this.state,
      show: false
    })
  }
  render() {
    const handleShow = () => {
      this.setState({
        show: true,
        formData: {
          administrator_id: 1,
          hospital_id: 1,
        },
      });
    };
    const handleClose = () => {
      this.setState({
        ...this.state,
        show: false,
      });
    };

    const handleChange = (e) => {
      const { id, value } = e.target;
      this.setState({
        ...this.state,
        formData: {
          ...this.state.formData,
          [id]: value,
        },
      });
      success?.type === "unit_create_success" && show && handleClose();
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      let jwtToken = localStorage.getItem("jwt");
      jwtToken = JSON.parse(jwtToken);
      const { formData } = this.state;
      const { createUnit } = this.props;
      jwtToken && createUnit(jwtToken, formData);
    };
    const { show } = this.state;
    const { error, success } = this.props;
    return (
      <div className="side-btn">
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
          </Modal.Header>
          <Modal.Body>
            <div className="form-container">
              <Form onSubmit={handleSubmit}>
                {success?.message?.message && <Success />}
                {error.response && <ErrOrs />}
                <Form.Group controlId="name" className="pb-3">
                  <Form.Label>Enter a unique Unit name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    //   placeholder="Enter a unique Unit name"
                    //   value={name}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group controlId="unithead" className="pb-3">
                  <Form.Label>Enter the head of the unit's name.</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    //   placeholder="Enter the head of the unit's name."
                    //   value={address}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Button className="btn unit-form-btn w-100" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  hospital: state.hospital,
  currentUser: state.userData.currentUser,
  success: state.success,
  error: state.errors.err,
});
export default connect(mapStateToProps, { createUnit })(AddUnit);
