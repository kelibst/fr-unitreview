import React, { Component } from "react";
import { connect } from "react-redux";
import Patient from "../../containers/Patient/Patient";
import {
  addPatientToSlot,
  fetchPatients,
} from "../../store/actions/PatientAction";
import { fetchUnits } from "../../store/actions/unitAction";

class Patients extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { fetchPatients, fetchUnits } = this.props;
    let jwtToken = localStorage.getItem("jwt");
    jwtToken = JSON.parse(jwtToken);
    jwtToken?.exp && fetchPatients(jwtToken);
    jwtToken?.exp && fetchUnits();
  }

  render() {
    const { patients, units, addPatientToSlot, success } = this.props;
    const isNotEmpty = (obj) => Object.keys(obj).length !== 0;
    let jwtToken = localStorage.getItem("jwt");
    jwtToken = JSON.parse(jwtToken);
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
          {isNotEmpty(patients) &&
            patients.map((patient) => (
              <Patient
                patient={patient}
                key={patient.id}
                addPatientToSlot={addPatientToSlot}
                allUnits={units}
                success={success}
                jwtToken={jwtToken}
              />
            ))}
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
export default connect(mapStateToProps, {
  fetchPatients,
  fetchUnits,
  addPatientToSlot,
})(Patients);
