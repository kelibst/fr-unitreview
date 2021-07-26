import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchReviews } from "../../store/actions/reviewsAction";

class Reviews extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const { fetchReviews } = this.props;
    let jwtToken = localStorage.getItem("jwt");
    jwtToken = JSON.parse(jwtToken);
    jwtToken?.exp && fetchReviews(jwtToken);
  }

  render() {
    const { reviews } = this.props;
    return (
      <div className="patients">
        <h1 className="h6 ps-3 fw-bold">List of all Reviews</h1>
        <div className="patient-th">
          <p className="pa-tr">Name</p>
          <p className="pa-tr">Address</p>
          <p className="pa-tr">Email</p>
          <p className="pa-tr">Phone</p>
        </div>

        <div className="units-content pt-3">
          {/* {reviews && reviews.map((review) => <Patient patient={patient} />)} */}
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
  reviews: state.reviewsData.reviews,
});
export default connect(mapStateToProps, {fetchReviews})(Reviews);
