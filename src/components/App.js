import React, { Component } from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { fetchHospital } from "../store/actions/fetchAction";
import About from "../containers/About";
import HomePage from "../containers/pages/HomePage";
import Login from "./Login";
import SignUp from "./SignUp";
import Dashboard from "./dashboard/Dashboard";
import PatientLogin from "./Patients/PatientLogin";

class App extends Component {
  componentDidMount() {
    const { fetchHospital } = this.props;
    fetchHospital();
  }
  render() {
    const { hospitalData } = this.props.hospital;
    return (
      <Router>
        <div className="wrapper d-block">
          <Switch>
            <Route exact path="/login" component ={Login} />
            <Route exact path="/client/login" component ={PatientLogin} />
            <Route exact path="/create-account" component={SignUp} />
            <Route exact path="/about" component={About} />
            <Route path="/dashboard/admin" component={Dashboard}/>
            <Route
            path="/"
              render={(props) => (
                <HomePage {...props} hospital={hospitalData} />
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}
const mapStateToProps = (state) => ({
  hospital: state.hospital,
});

export default connect(mapStateToProps, { fetchHospital })(App);
