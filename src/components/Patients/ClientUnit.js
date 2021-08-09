import React from "react";
import StarRatings from "react-star-ratings";

const ClientUnit = ({ unit }) => {
  const { name, unitHead, score } = unit.body;
  return (
    <div className="unit-cont box card-border">
      <div className="unit-header">
        <div className="d-flex">
          <h5 className="unit-h1">Name: </h5>
          <span className="det-style mx-2">{name}</span>
        </div>

        <div className="unit-details">
          <div className="d-flex">
            <h5 className="unit-head-name  fw-bold">Unit Head:</h5>
            <span className="det-style mx-2">{unitHead}</span>
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
        </div>
      </div>
    </div>
  );
};

export default ClientUnit;
