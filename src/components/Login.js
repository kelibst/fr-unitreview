import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import Icofont from "react-icofont";
import { connect } from "react-redux";
import { authAdmin, fetchAdmin } from '../store/actions/userAction'
import "./Auth.scss";
import ErrOrs from "./ErrOrs";
import Success from "./Success";

class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: {
        email: '', 
        password: ''
      }
    }
  }

  componentDidMount(){
    let jwtToken = localStorage.getItem('jwt')
    jwtToken = JSON.parse(jwtToken)
    const { fetchAdmin } = this.props
    jwtToken && fetchAdmin(jwtToken)
    debugger
  }

  componentDidUpdate(){
    const {
      currentUser, history, error, success
    } = this.props;
    let jwtToken = localStorage.getItem('jwt')
    jwtToken = JSON.parse(jwtToken)
    
    if (currentUser?.body) {
      history.push(`/dashboard/${currentUser?.body?.username}`)
    } 

    
  }
  render() {
    const { hospitalData } = this.props.hospital;
    const { authAdmin, success, error } = this.props

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
      authAdmin(data)
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
                <h4 className="fw-bold">Administrators Login</h4>
              </div>

              <p className="font-lg">
                This form is for head of Units to create a new account.{" "}
                <br></br> if you are a reviewer, you are probably at the wrong
                place.
              </p>
              <div className="form-footer">
                { success?.type && <Success /> }
                { error && <ErrOrs />}
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

            <Form.Group controlId="password" className="pb-3 my-2">
              <Form.Control
                required
                type="password"
                placeholder="Password"
                className="py-2"
                onChange={handleChange}
              />
            </Form.Group>

            <Button className="auth-btn" type="submit">
              Submit
            </Button>
            <p className="mt-3 font-weight-bolder auth-text">OR</p>
            <a href="/create-account" className="my-3 text-center btn-link">
              Register
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
export default connect(mapStateToProps, { authAdmin, fetchAdmin })(Login);
