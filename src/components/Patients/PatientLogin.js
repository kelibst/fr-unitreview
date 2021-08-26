import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import Icofont from "react-icofont";
import { connect } from "react-redux";
import {
  fetchPatient,
  loginPatientIn,
} from "../../store/actions/PatientAction";
import ErrOrs from "../ErrOrs";
import Success from "../Success";

class PatientLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmit: false,
      data: {
        email: "",
      },
    };
  }

  componentDidMount() {
    let jwtToken = localStorage.getItem("patJwt");
    jwtToken = JSON.parse(jwtToken);
    const { fetchPatient, error } = this.props;
    jwtToken?.token?.length && fetchPatient(jwtToken);
    const { patient, history } = this.props;
    patient?.dates?.created_at?.length && history.push(`/client/dashboard`)
  }

  componentDidUpdate(prevProps, prevState) {
    const { patient, history, fetchPatient, error, success } = this.props;
    let jwtToken = localStorage.getItem("patJwt");
    jwtToken = JSON.parse(jwtToken);

    const isNotEmpty = (obj) => Object.keys(obj).length !== 0;
    isNotEmpty(error) ?
      prevProps.error !== error &&
        jwtToken?.token?.length && !patient?.dates?.created_at?.length && fetchPatient(jwtToken) :
    success.type ===  "login_success" && 
      jwtToken?.token?.length && 
        !patient && fetchPatient(jwtToken) 

      patient?.dates?.created_at?.length &&
        history.push(`/client/dashboard`)
  }

  render() {
    const { hospitalData } = this.props.hospital;
    const { loginPatientIn, success, error } = this.props;

    const handleChange = (e) => {
      const { id, value } = e.target;
      const { data } = this.state;
      this.setState({
        ...this.state,
        data: {
          ...data,
          [id]: value,
        },
      });
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      this.setState({
        ...this.state,
        isSubmit: true
      })
      const { data } = this.state;
      loginPatientIn(data);
    };

    return (
      <div className="login d-flex auth">
        <div className="bg-light auth-header-cont col-md-4">
          <h1 className="auth-head home-brand">{hospitalData?.body?.name}</h1>
          <div className="auth-header">
            <div className="auth-header-title d-flex align-items-center">
              <Icofont
                icon="address-book"
                className="auth-header-icon text-primary"
              />
              <h4 className="fw-bold">Client Login</h4>
            </div>

            <p className="font-lg">
              Welcome! <br></br> If you have recently been to{" "}
              {hospitalData?.body?.name}, Kindly login using your{" "}
              <span className="text-scuess">email</span> and tell us how we treated you.
            </p>
            <div className="form-footer">
              {success?.type && <Success />}
              {error?.response && <ErrOrs />}
            </div>
          </div>
        </div>
        <div className="col-md-8 px-auto auth-form-cont bg-white">
          <Form className="auth-form" onSubmit={handleSubmit}>
            <h6 className="fw-bold my-5">Login</h6>
            <Form.Group controlId="email" className="pb-3 my-2">
              <Form.Control
                required
                type="email"
                className="py-2"
                placeholder="Enter email"
                onChange={handleChange}
              />
              <Form.Text className="text-muted">
                We will never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Button className="auth-btn" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  hospital: state.hospital,
  patient: state.patientsData.patient,
  success: state.success,
  error: state.errors.err,
});
export default connect(mapStateToProps, { fetchPatient, loginPatientIn })(
  PatientLogin
);
