import React from "react";
import StarRatings from "react-star-ratings";
import AddReview from "./AddReview";

const ClientUnit = ({ unit }) => {
  return (
    <div className="unit-cont box card-border">
      <div className="unit-header">
        <div className="d-flex">
          <h5 className="unit-h1">Name: </h5>
          <span className="det-style mx-2">{unit?.body?.name ? unit?.body?.name : unit?.name}</span>
        </div>

        <div className="unit-details">
          <div className="d-flex">
            <h5 className="unit-head-name  fw-bold">Unit Head:</h5>
            <span className="det-style mx-2">{unit?.body?.unitHead ? unit?.body?.unitHead : unit?.unithead}</span>
          </div>
          <div className="star-rating-cont my-3">
          <StarRatings
            rating={4}
            starRatedColor="blue"
            name="rating"
            numberOfStars={5}
            starDimension="20px"
            starSpacing="5px"
          /></div>
          <div className="actions mt-4">
            <AddReview unitId={unit?.id} />
            </div>
        </div>
      </div>
    </div>
  );
};

export default ClientUnit;