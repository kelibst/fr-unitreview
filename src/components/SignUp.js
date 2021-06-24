import React, { Component } from 'react'
import { Button, Form } from "react-bootstrap";
import './Auth.scss';


class SignUp extends Component {
    render() {
        const handleChange = (e) => {};

        const handleSubmit = (e) => {
          e.preventDefault();
        };

        return (
            <div className="login d-flex auth">
            <div className="bg-light auth-header-cont col-md-4">
                <div className="auth-header">
                <h6 className="fw-bold my-5">Create Your Account</h6>
                <p className="font-lg">This form is for head of Units to create a new account. <br></br> if you are a reviewer, you are probably at the wrong place.</p>
                </div>
               
            </div>
            <div className="col-md-8 px-auto auth-form-cont bg-white">
          <Form
            className="auth-form"
            onSubmit={handleSubmit}
          >
              <h6 className="fw-bold my-5">Create Your Account</h6>
            <Form.Group controlId="fullName" className="pb-3">
            
              <Form.Control
                required
                type="text"
                placeholder="Enter Your Full Name"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="role" className="pb-3">
            
              <Form.Control
                required
                type="text"
                placeholder="Head of Health Information"
                onChange={handleChange}
              />
             <Form.Text className="text-muted">
               Enter your role.
              </Form.Text> 
            </Form.Group>

            <Form.Group controlId="phone" className="pb-3">
            
            <Form.Control
              required
              type="phone"
              placeholder="+233546249862"
              onChange={handleChange}
            />
           <Form.Text className="text-muted">
             Enter a valid phone number.
            </Form.Text> 
          </Form.Group>
  
            <Form.Group controlId="email" className="pb-3">
              <Form.Control
                required
                type="email"
                placeholder="keli@gmail.com"
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
            <a href="/signup" className="my-3 text-center w-100 btn-link">
              {" "}
              Register
            </a>
          </Form>
        </div>
        </div>
        )
    }
}
export default SignUp