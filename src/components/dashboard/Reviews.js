import React, { Component } from "react";
import { connect } from "react-redux";

class Reviews extends Component {
  render() {
    return (
      <div className="patients">
        <h1 className="h6 ps-3 fw-bold">List of all Reviews</h1>
        <div className="patient-th">
          <p className="pa-tr">Name</p>
          <p className="pa-tr">Address</p>
          <p className="pa-tr">Email</p>
          <p className="pa-tr">Phone</p>
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
  units: state.unitsData.units,
  patients: state.patientsData.patients,
});
export default connect(mapStateToProps, {})(Reviews);
