import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPatient, getPatSlotUnits } from "../../store/actions/PatientAction";
import { fetchUnits } from "../../store/actions/unitAction";
import ClientUnit from "./ClientUnit";

class Clients extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const isNotEmpty = (obj) => Object.keys(obj).length !== 0;
    const { fetchPatient, fetchUnits, patient, units, getPatSlotUnits } = this.props;
    let jwtToken = localStorage.getItem("patJwt");
    jwtToken = JSON.parse(jwtToken);
    jwtToken?.exp && !patient.id && fetchPatient(jwtToken);
    jwtToken?.exp && getPatSlotUnits(jwtToken);
    jwtToken?.exp && !isNotEmpty(units) && fetchUnits();
  }

  render() {
    const { success, units, patient, patUnits } = this.props;
    const { reviewer_units_to_review } = patUnits
    const isNotEmpty = (obj) => Object.keys(obj).length !== 0;
    return (
      <div className="pat-dash container-lg">
        { isNotEmpty(patUnits) && (
          <div className="container-units">
            { patUnits?.map((unit) => <ClientUnit key={unit.id} unit={unit} SlotUnit={true} />)}{" "}
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
  patUnits: state.patientsData.patUnits
});
export default connect(mapStateToProps, { fetchPatient, fetchUnits, getPatSlotUnits })(Clients);
