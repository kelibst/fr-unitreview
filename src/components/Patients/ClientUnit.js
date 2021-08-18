import React from "react";
import StarRatings from "react-star-ratings";
import AddReview from "./AddReview";

const ClientUnit = ({ unit, SlotUnit }) => {
  return (
    <div className="unit-cont box card-border">
      <div className="unit-header">
        <div className="d-flex">
          <h5 className="unit-h1">Name: </h5>
          <span className="det-style mx-2">{unit?.body?.name}</span>
        </div>

        <div className="unit-details">
          <div className="d-flex">
            <h5 className="unit-head-name  fw-bold">Unit Head:</h5>
            <span className="det-style mx-2">{unit?.body?.unitHead}</span>
          </div>
          <div className="star-rating-cont my-3">
          <StarRatings
            rating={unit?.body?.score ? Number(unit?.body?.score)  : 0 }
            starRatedColor="blue"
            name="rating"
            numberOfStars={5}
            starDimension="20px"
            starSpacing="5px"
          /></div>
          {
            SlotUnit  && <div className="actions mt-4">
            <AddReview unitId={unit?.id} />
            </div>
          }
          
        </div>
      </div>
    </div>
  );
};

export default ClientUnit;
