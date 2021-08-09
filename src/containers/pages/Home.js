import React, { Component } from "react";
import { connect } from "react-redux";
import ClientUnit from "../../components/Patients/ClientUnit";
import { fetchPatient } from "../../store/actions/PatientAction";
import { fetchUnits } from "../../store/actions/unitAction";

class Home extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const { fetchPatient, fetchUnits, patient, units } = this.props;
    let jwtToken = localStorage.getItem("patJwt");
    jwtToken = JSON.parse(jwtToken);
    jwtToken?.exp && fetchPatient(jwtToken);
    jwtToken?.exp && fetchUnits();
    console.log(this.props);
  }

  render() {
    const { success, units, patient } = this.props;
    const isNotEmpty = (obj) => Object.keys(obj).length !== 0;

    return (
      <div className="pat-dash container-lg">
        { isNotEmpty(units) && (
          <div className="unit-container">
            <h1 className="units-home- fw-bold text-center my-4">This summarises what our clients have to say about our performance.</h1>
          <div className="container-units">
            {isNotEmpty(units) && units?.map((unit) => <ClientUnit unit={unit} />)}{" "}
          </div>
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
export default connect(mapStateToProps, { fetchPatient, fetchUnits })(Home);
