import React, { Component } from "react";
import { Button, ButtonGroup, Form, Modal } from "react-bootstrap";
import Icofont from "react-icofont";
import { connect } from "react-redux";
import { createPatient } from "../../store/actions/PatientAction";
import ErrOrs from "../ErrOrs";
import Success from "../Success";

class AddPatient extends Component {
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
        formData: {
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
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      let jwtToken = localStorage.getItem("jwt");
      jwtToken = JSON.parse(jwtToken);
      const { formData, show } = this.state;
      const { createPatient, success } = this.props;
      debugger
      jwtToken && createPatient(jwtToken, formData);
      success?.type === "patient_create_success" && show && handleClose();
    };
    const { show } = this.state;
    const { error, success } = this.props;

    return (
      <div className="unit-side-btn">
        <Button
          variant="transparent"
          className="btn unit-btn"
          onClick={handleShow}
        >
          Add new patient
          <Icofont icon="ui-add" className="unit-add" />
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add a new Patient</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="form-container">
              <Form onSubmit={handleSubmit}>
                {success?.message?.message && <Success />}
                {error.response && <ErrOrs />}
                <Form.Group controlId="name" className="pb-3">
                  <Form.Label>Enter a unique Patient name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    //   placeholder="Enter a unique Unit name"
                    //   value={name}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group controlId="address" className="pb-3">
                  <Form.Label>Enter patient's address.</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    //   placeholder="Enter the head of the unit's name."
                    //   value={address}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group controlId="email" className="pb-3">
                  <Form.Label>Enter patient's email address.</Form.Label>
                  <Form.Control
                    required
                    type="email"
                    //   placeholder="Enter the head of the unit's name."
                    //   value={address}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group controlId="phone" className="pb-3">
                  <Form.Label>Enter patient's phone number.</Form.Label>
                  <Form.Control
                    required
                    type="phone"
                    //   placeholder="Enter the head of the unit's name."
                    //   value={address}
                    onChange={handleChange}
                  />
                </Form.Group>
                <ButtonGroup controlId="sex" aria-label="gender">
                  <Button variant="primary">Male</Button>
                  <Button variant="success">Female</Button>
                </ButtonGroup>
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
export default connect(mapStateToProps, { createPatient })(AddPatient);
