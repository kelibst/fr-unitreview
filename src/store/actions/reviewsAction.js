import Axios from "axios";
import { getPatSlotUnits } from "./PatientAction";

const fetchReviews = (jwtToken) => (dispatch) => {
  const { token } = jwtToken;

  const getReviewsAxios = Axios.create({
    baseURL: "https://unitreview.herokuapp.com",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  getReviewsAxios
    .get("/reviews.json")
    .then((res) => {
      dispatch({
        type: "GET_REVIEWS",
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: "CREATE_ERROR",
        payload: {
          ...err,
          response: err?.response,
        },
      });
    });
};

const fetchUnitReviews = (unitUsername) => (dispatch) => {

  const getReviewsAxios = Axios.create({
    baseURL: "https://unitreview.herokuapp.com",
  });

  getReviewsAxios
    .get(`/api/v1/units-reviews/${unitUsername}.json`)
    .then((res) => {
      dispatch({
        type: "GET_UNIT_REVIEWS",
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: "CREATE_ERROR",
        payload: {
          ...err,
          response: err?.response,
        },
      });
    });
};

const createReview = (jwtToken, formData, unitId, patientId) => (dispatch) => {
  const { token } = jwtToken;
  const data = {
    review: {
      ...formData,
      unit_id: unitId,
      reviewer_id: patientId,
    },
  };
  const postReviewAxios = Axios.create({
    baseURL: "https://unitreview.herokuapp.com/",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  postReviewAxios
    .post("/reviews.json", data)
    .then((res) => {
      const succPayload = {
        message: "Review was successfully added!",
        type: "review_create_success",
      };

      if (  res?.data?.error == "You do not have a slot to review this unit.") {
         dispatch({
            type: "CREATE_ERROR",
            payload: {
              ...res,
              response: res?.data,
            },
          })
      } else {
            let jwtToken = localStorage.getItem("patJwt");
            jwtToken = JSON.parse(jwtToken);

            const { token, username } = jwtToken;
            const patSlotUnitsAxios = Axios.create({
              baseURL: "https://unitreview.herokuapp.com/",
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });
            patSlotUnitsAxios
              .get(`/api/v1/units/reviewing/${username}.json`)
              .then((res) => {
                dispatch({
                  type: "GET_PAT_SLOTS",
                  payload: res.data,
                });
              })
              .catch((err) =>
                dispatch({
                  type: "CREATE_ERROR",
                  payload: {
                    ...err,
                    response: err?.response,
                  },
                })
              );


            dispatch({
              type: "SUCC_MSG",
              payload: succPayload,
            });
          };
      })
    .catch((err) => {
      dispatch({
        type: "CREATE_ERROR",
        payload: {
          ...err,
          response: err?.response,
        },
      });
    });
};

export { fetchReviews, fetchUnitReviews, createReview };
