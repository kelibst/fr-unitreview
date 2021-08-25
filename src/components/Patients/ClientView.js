import React, { Component } from "react";
import { connect } from "react-redux";
import StarRatings from "react-star-ratings";
import { fetchPatient } from "../../store/actions/PatientAction";
import { fetchUnit } from "../../store/actions/unitAction";
import { fetchUnitReviews } from "../../store/actions/reviewsAction";
import Icofont from "react-icofont";
class ClientView extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { patient, fetchPatient, fetchUnit, match, unit } = this.props;

    let jwtToken = localStorage.getItem("patJwt");
    jwtToken = JSON.parse(jwtToken);
    jwtToken?.exp && !patient.id && fetchPatient(jwtToken);
    jwtToken?.exp && fetchUnit(jwtToken, match?.params?.id);
    fetchUnitReviews(jwtToken, match?.params?.id)
  }

  componentDidUpdate(){
    const isNotEmpty = (obj) => Object.keys(obj).length !== 0; 
    let jwtToken = localStorage.getItem("patJwt");
    jwtToken = JSON.parse(jwtToken);
    
    const { patient, fetchPatient, fetchUnitReviews, match, unitReviews, error } = this.props;
//    isNotEmpty(unitReviews) && console.log(error) 
    jwtToken?.exp && !error?.response && unitReviews[0] === 'Empty' && fetchUnitReviews(jwtToken, match?.params?.id)
  }

  render() {
    const { unit } = this.props;

    return (
      <div className="clientview">
        <div className="clientview-content">
          <div className="clientview-img">
            <h1 className="text-capitalize unit-name">{unit?.body?.name}</h1>
          </div>
          <div className="clientview-det">
            <h5 className="unit-head-name  fw-bold">
             <Icofont icon="user-suited" />  {unit?.body?.unitHead}
            </h5>

            <div className="star-rating-cont my-3">
              <StarRatings
                rating={unit?.body?.score ? Number(unit?.body?.score) : 0}
                starRatedColor="blue"
                name="rating"
                numberOfStars={5}
                starDimension="20px"
                starSpacing="5px"
              />
            </div>
            <h5 className="unit-head-name  fw-bold">
              <Icofont icon="comment" /> {unit?.body?.reviews}
            </h5>
          </div>
          <hr></hr>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  success: state.success,
  error: state.errors.err,
  patient: state.patientsData.patient,
  unit: state.unitsData.unit,
  unitReviews: state.reviewsData.unitReviews,
});
export default connect(mapStateToProps, { fetchPatient, fetchUnitReviews, fetchUnit })(
  ClientView
);
