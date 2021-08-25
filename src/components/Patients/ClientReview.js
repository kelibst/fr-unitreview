import React from "react";
import Icofont from "react-icofont";
import StarRatings from "react-star-ratings";

const ClientReview = ({ review }) => {
  const { reviewer, body } = review;
  return (
    <div className="client-review">
      <div className="rev-header align-items-center mb-3 d-flex">
        {review?.reviewer?.sex === "male" ? (
          <Icofont icon="user-alt-4" size="2" />
        ) : (
          <Icofont icon="user-alt-2" size="2" />
        )}
        <h5 className="client-name ms-4 m-0">{reviewer?.name}</h5>
        <div className="star-rating-cont ms-4 my-3">
          <StarRatings
            rating={body?.score ? Number(body?.score) : 0}
            starRatedColor="blue"
            name="rating"
            numberOfStars={5}
            starDimension="20px"
            starSpacing="5px"
          />
        </div>
      </div>

      <h6 className="rev-title">Title: {body?.title}</h6>
      <p className="rev-title">Description: {body?.description}</p>
    </div>
  );
};

export default ClientReview;
