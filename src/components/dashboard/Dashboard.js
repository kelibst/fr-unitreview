import React, { Component } from "react";
import { connect } from "react-redux";
import NavBar from "../../containers/layouts/NavBar";
import { BrowserRouter, Route, Switch, useRouteMatch } from "react-router-dom";
import SideBar from "../../containers/layouts/SideBar";
import { fetchAdmin } from "../../store/actions/userAction";
import "./Dashboard.scss";
import Units from "./Units";
import DashNav from "./DashNav";
import Success from "../Success";
import ErrOrs from "../ErrOrs";
import successWithMessage from "../../store/actions/successAction";
import Patients from "../Patients/Patients";
import Reviews from "./Reviews";

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    let jwtToken = localStorage.getItem("jwt");
    jwtToken = JSON.parse(jwtToken);
    const { fetchAdmin, currentUser, history } = this.props;
    !currentUser.id && jwtToken?.token?.length && fetchAdmin(jwtToken);
    !currentUser.id && !jwtToken?.token?.length && history.push("/login");
  }

  componentDidUpdate(prevProps, prevState) {
    const { history, currentUser } = this.props;
    let jwtToken = localStorage.getItem("jwt");
    jwtToken = JSON.parse(jwtToken);
    this.props !== prevProps && !jwtToken?.exp && history.push("/login");
  }
  render() {
    const {
      hospital,
      currentUser,
      success,
      error,
      history,
      successWithMessage,
    } = this.props;
    const logUserOut = () => {
      localStorage.removeItem("jwt");
      history.push("/login");
      console.log("run")
    };
    const { path } = this.props?.match
    return (
      <div className="dashboard bg-light">
        <SideBar hospital={hospital} user={currentUser} />
        <div className="container-fluid bg-white dash-content">
          {success?.message?.message && <Success />}
          {error?.response && <ErrOrs />}
          <DashNav currentUser={currentUser} logUserOut={logUserOut} />
            <Switch>
              <Route path={`${path}/clients`}>
                <Patients />
              </Route>

              <Route path={`${path}/reviews`}>
                <Reviews />
              </Route>
              <Route path={`${path}`}>
                <Units />
              </Route>
            </Switch>
        </div>
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
export default connect(mapStateToProps, { fetchAdmin, successWithMessage })(
  Dashboard
);
