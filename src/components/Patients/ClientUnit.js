import React from "react";
import StarRatings from "react-star-ratings";

const ClientUnit = ({ unit }) => {
  const { name, unitHead, score } = unit.body;
  return (
    <div className="unit-cont box col-md-4 col-lg-3 card-border">
      <div className="unit-header">
        <div className="d-flex">
          <h5 className="unit-h1">Name: </h5>
          <span className="det-style">{name}</span>
        </div>

        <div className="unit-details">
          <div className="d-flex">
            <h6 className="unit-head-name fw-bold">Unit Head:</h6>
            <span className="det-style">{unitHead}</span>
          </div>

          <StarRatings
            rating={4}
            starRatedColor="blue"
            name="rating"
            numberOfStars={5}
            starDimension="20px"
            starSpacing="15px"
          />
        </div>
      </div>
    </div>
  );
};

export default ClientUnit;
