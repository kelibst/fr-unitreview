import React, { Component } from "react";
import { Button, ButtonGroup, Form, Modal } from "react-bootstrap";
import Icofont from "react-icofont";
import StarRatings from "react-star-ratings";
import { connect } from "react-redux";
import { createReview } from "../../store/actions/reviewsAction";
import ErrOrs from "../ErrOrs";
import Success from "../Success";
import { getParseTreeNode } from "typescript";
import { getPatSlotUnits } from "../../store/actions/PatientAction";

class AddReview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
    };
  }

  componentDidUpdate() {
    const { success } = this.props;
    const { show } = this.state;
    if (success?.type === "review_create_success") {
      let jwtToken = localStorage.getItem("patJwt");
      jwtToken = JSON.parse(jwtToken);
      jwtToken?.exp && show && getPatSlotUnits(jwtToken);
      show &&
        this.setState({
          ...this.state,
          show: false,
        });
    }
  }

  render() {
    const handleShow = () => {
      this.setState({
        show: true,
        formData: {
          title: "",
          score: 0,
          description: "",
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

    const changeRating = (rating) => {
      this.setState({
        ...this.state,
        formData: {
          ...this.state.formData,
          score: rating,
        },
      });
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      let jwtToken = localStorage.getItem("patJwt");
      jwtToken = JSON.parse(jwtToken);
      const { formData, show } = this.state;
      const { createReview, success, unitId, patient } = this.props;
      jwtToken?.exp && createReview(jwtToken, formData, unitId, patient.id);
    };
    const { show } = this.state;
    const { error, success } = this.props;

    return (
      <div className="side-btn">
        <Button variant="primary" onClick={handleShow}>
          Leave a review
          <Icofont icon="ui-add" className="unit-add" />
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Leave a review</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="form-container">
              <Form onSubmit={handleSubmit}>
                {/* {success?.message?.message && <Success />}
                {error.response && <ErrOrs />} */}
                <Form.Group controlId="title" className="pb-3">
                  <Form.Label>Title</Form.Label>
                  <Form.Control required type="text" onChange={handleChange} />
                </Form.Group>

                <Form.Group controlId="description" className="pb-3">
                  <Form.Label>Describe how you were treated!</Form.Label>
                  <Form.Control required type="text" onChange={handleChange} />
                </Form.Group>

                <div className="mt-1 mb-3">
                  <p className="text-secondary">Select your rating.</p>
                  <StarRatings
                    rating={this.state.formData?.score}
                    widgetRatedColors="blue"
                    changeRating={changeRating}
                    numberOfStars={5}
                    starDimension="30px"
                    starSpacing="5px"
                  />
                </div>
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
  patient: state.patientsData.patient,
  success: state.success,
  error: state.errors.err,
});
export default connect(mapStateToProps, { createReview, getPatSlotUnits })(AddReview);
