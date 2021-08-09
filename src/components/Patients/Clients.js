import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPatient } from "../../store/actions/PatientAction";
import { fetchUnits } from "../../store/actions/unitAction";
import ClientUnit from "./ClientUnit";

class Clients extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const isNotEmpty = (obj) => Object.keys(obj).length !== 0;
    const { fetchPatient, fetchUnits, patient, units } = this.props;
    let jwtToken = localStorage.getItem("patJwt");
    jwtToken = JSON.parse(jwtToken);
    jwtToken?.exp && !patient.id && fetchPatient(jwtToken);
    jwtToken?.exp && !isNotEmpty(units) && fetchUnits();
  }

  render() {
    const { success, units, patient } = this.props;
    const isNotEmpty = (obj) => Object.keys(obj).length !== 0;
    return (
      <div className="pat-dash container-lg">
        { isNotEmpty(units) && (
          <div className="container-units">
            { units?.map((unit) => <ClientUnit unit={unit} />)}{" "}
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  success: state.success,
  error: state.errors.err,
  units: state.unitsData.units,
  patient: state.patientsData.patient,
});
export default connect(mapStateToProps, { fetchPatient, fetchUnits })(Clients);
