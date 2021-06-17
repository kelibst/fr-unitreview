import React, { Component } from "react";
import "./App.scss";
import SideBar from "./components/layouts/SideBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { fetchHospital } from "./store/actions/fetchAction";
import About from "./containers/About";
import HomePage from "./containers/pages/HomePage";

class App extends Component {
  componentDidMount() {
    const { fetchHospital } = this.props;
    fetchHospital();
  }
  render() {
    const { hospitalData } = this.props.hospital;
    return (
      <Router>
        <div className="wrapper d-block d-sm-flex">
          <SideBar hospital={hospitalData} />
          <Switch>
            <Route exact path="/about" component={About} />
            <Route path="/" component={HomePage} />
            
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
