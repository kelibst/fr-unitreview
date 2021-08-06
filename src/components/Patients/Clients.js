import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPatient } from '../../store/actions/PatientAction';
import { fetchUnits } from '../../store/actions/unitAction';
import Success from '../Success';

class Clients extends Component {

    constructor(props) {
        super(props);
    }
    componentDidMount() {
        const { fetchPatient, fetchUnits, patient, units } = this.props;
        let jwtToken = localStorage.getItem("patJwt");
        jwtToken = JSON.parse(jwtToken);
        jwtToken?.exp && fetchPatient(jwtToken);
        jwtToken?.exp && fetchUnits();
        console.log(patient, units)
    }
    
    render() {
        const { success } = this.props
        return (
            <div className="pat-dash">
                
                
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    success: state.success,
    error: state.errors.err,
    units: state.unitsData.units,
    patient: state.patientsData.patient,
  })
export default connect(mapStateToProps, {fetchPatient, fetchUnits })(Clients)