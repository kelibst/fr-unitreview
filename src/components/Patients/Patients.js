import React, { Component } from "react";
import { connect } from "react-redux";
import Patient from "../../containers/Patient/Patient";
import { fetchPatients } from "../../store/actions/PatientAction";

class Patients extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { fetchPatients } = this.props;
    let jwtToken = localStorage.getItem("jwt");
    jwtToken = JSON.parse(jwtToken);
    jwtToken?.exp && fetchPatients(jwtToken);
  }
  render() {
    const { patients } = this.props;
    return (
      <div className="patients">
        <h1 className="h6 ps-3 fw-bold">List of patients</h1>
        <div className="patient-th">
            <p className="pa-tr">Name</p>
            <p className="pa-tr">Address</p>
            <p className="pa-tr">Email</p>
            <p className="pa-tr">Phone</p>
        </div>
        <div className="units-content pt-3">
          {patients && patients.map((patient) => <Patient patient={patient} />)}
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
export default connect(mapStateToProps, { fetchPatients })(Patients);
