import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import Icofont from "react-icofont";
import { connect } from "react-redux";
import { createAdmin } from "../store/actions/userAction";
import ErrOrs from "./ErrOrs";
import Success from "./Success";
import "./Auth.scss";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        email: "",
        password: "",
      },
    };
  }
  render() {
    const { hospitalData } = this.props.hospital;
    const { createAdmin, history, error, success} = this.props;
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
      const { data } = this.state;
      createAdmin(data);
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
              <h4 className="fw-bold">Create an Administrators Account</h4>
            </div>

            <p className="font-lg">
              This form is for head of Units to create a new account. <br></br>{" "}
              if you are a reviewer, you are probably at the wrong place.
            </p>
            <div className="form-footer">
              {success?.type && <Success />}
              {error && <ErrOrs />}
            </div>
          </div>
        </div>
        <div className="col-md-8 px-auto auth-form-cont bg-white">
          <Form className="auth-form" onSubmit={handleSubmit}>
            <h4 className="fw-bold my-5">Create Your Account</h4>
            <Form.Group controlId="name" className="pb-3 my-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                required
                type="text"
                className="py-2"
                placeholder="Enter Your Full Name"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="role" className="pb-3 my-3">
              <Form.Label>Role</Form.Label>
              <Form.Control
                required
                type="text"
                className="py-2"
                placeholder="Head of Health Information"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="phone" className="pb-3 my-3">
              <Form.Label>Enter a valid Phone number.</Form.Label>
              <Form.Control
                required
                type="phone"
                className="py-2"
                placeholder="+233546249862"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="email" className="pb-3 my-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                required
                type="email"
                className="py-2"
                placeholder="keli@gmail.com"
                onChange={handleChange}
              />
              <Form.Text className="text-muted">
                We will never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="password" className="pb-5 my-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                type="password"
                className="py-2"
                placeholder="Password"
                onChange={handleChange}
              />
            </Form.Group>

            <Button className="btn btn-primary" type="submit">
              Submit
            </Button>
            <p className="mt-3 font-weight-bolder auth-text">OR</p>
            <a href="/login" className="my-3 text-center btn-link">
              Login
            </a>
          </Form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  hospital: state.hospital,
  currentUser: state.userData.currentUser,
  success: state.success,
  error: state.errors.err
});
export default connect(mapStateToProps, { createAdmin })(SignUp);
