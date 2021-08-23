import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchPatient } from '../../store/actions/PatientAction';

class ClientView extends Component {
    constructor(props) {
        super(props);
      }

      componentDidMount() {
        const isNotEmpty = (obj) => Object.keys(obj).length !== 0;
        const { patient, fetchPatient } = this.props;
        let jwtToken = localStorage.getItem("patJwt");
        jwtToken = JSON.parse(jwtToken);
        jwtToken?.exp && !patient.id && fetchPatient(jwtToken); 
      }
      
    render() {
        const { body, id } = this.props.patient
        console.log(this.props.match)
        return (
            <div className="clientview">
                <div className="clientview-content">
                    <div className="clientview-img">
                        <h1 className="text-capitalize">{body?.name}</h1>
                    </div>
                    <div className="clientview-det">
                    <h5 className="unit-head-name  fw-bold">Unit Head:</h5>
                    
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
  });
export default connect(mapStateToProps, {fetchPatient})(ClientView)