import React from "react";
import StarRatings from "react-star-ratings";
import AddReview from "./AddReview";
import Icofont from "react-icofont";
import { Link } from "react-router-dom";

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
          <h5 className="unit-head-name  fw-bold">
              <Icofont icon="comment" /> {unit?.body?.reviews}
            </h5>
          <div className="d-flex justify-content-between">
          {
            SlotUnit  &&
            <AddReview unitId={unit?.id} />
          }
          <Link to={`./unit/${unit?.body?.unit_username}`} className="btn btn-success">More</Link>
         </div> 
        </div>
      </div>
    </div>
  );
};

export default ClientUnit;
