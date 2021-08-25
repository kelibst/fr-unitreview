import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchPatient } from '../../store/actions/PatientAction';
import { fetchUnit } from '../../store/actions/unitAction';

class ClientView extends Component {
    constructor(props) {
        super(props);
      }

      componentDidMount() {
        const isNotEmpty = (obj) => Object.keys(obj).length !== 0;
        const { patient, fetchPatient, fetchUnit, match } = this.props;
        
        let jwtToken = localStorage.getItem("patJwt");
        jwtToken = JSON.parse(jwtToken);
        jwtToken?.exp && !patient.id && fetchPatient(jwtToken); 
        fetchUnit(jwtToken, match?.params?.id)
      }
      
    render() {
        const { unit } = this.props

        return (
            <div className="clientview">
                <div className="clientview-content">
                    <div className="clientview-img">
                        <h1 className="text-capitalize">{unit?.body?.name}</h1>
                    </div>
                    <div className="clientview-det">
                    <h5 className="unit-head-name  fw-bold">Unit Head: {unit?.body?.unitHead}</h5>
                    <h5 className="unit-head-name  fw-bold">Unit Head: {unit?.body?.score}</h5>
                    <h5 className="unit-head-name  fw-bold">Unit Head: {unit?.body?.reviews}</h5>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    success: state.success,
    error: state.errors.err,
    patient: state.patientsData.patient,
    unit: state.unitsData.unit,
  });
export default connect(mapStateToProps, {fetchPatient, fetchUnit})(ClientView)