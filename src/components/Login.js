import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import './Auth.scss';

class Login extends Component {
  render() {
    const handleChange = (e) => {};

    const handleSubmit = (e) => {
      e.preventDefault();
    };
    return (
      <div className="login d-flex auth">
          <div className="bg-light col-md-4">
              <div className="auth-header">
                   Form left side
              </div>
             
          </div>
          <div className="col-md-8 px-auto auth-form-cont bg-white">
        <Form
          className="auth-form"
          onSubmit={handleSubmit}
        >
            <h6 className="fw-bold my-5">Login</h6>
          <Form.Group controlId="username" className="pb-3">
            
            <Form.Control
              required
              type="username"
              placeholder="Enter Username"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="email" className="pb-3">
            <Form.Control
              required
              type="email"
              placeholder="Enter email"
              onChange={handleChange}
            />
            <Form.Text className="text-muted">
              We will never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="password" className="pb-5">
            <Form.Control
              required
              type="password"
              placeholder="Password"
              onChange={handleChange}
            />
          </Form.Group>

          <Button className="btn btn-primary w-100" type="submit">
            Submit
          </Button>
          <p className="text-center mt-3 font-weight-bolder auth-text">OR</p>
          <a href="/create-account" className="my-3 text-center btn-link">
            {" "}
            Register
          </a>
        </Form>
      </div>
      </div>
    );
  }
}
export default Login;
