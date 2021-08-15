import Axios from "axios";

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

  const createReview = (jwtToken, formData, unitId, patientId) => (dispatch) => {
    const { token }= jwtToken;
    const data = {
      ...formData,
      unit_id: unitId,
      patient_id: patientId
    }
    const postReviewAxios = Axios.create({
      baseURL: "https://unitreview.herokuapp.com",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    postReviewAxios
      .post("/reviews", data)
      .then(() => {
        const succPayload = {
          message: "Review was successfully added!",
          type: "review_create_success",
        };
  
        dispatch({
          type: "SUCC_MSG",
          payload: succPayload,
        });
      })
      .catch(err => {
        dispatch({
          type: "CREATE_ERROR",
          payload: {
            ...err,
            response: err?.response,
          },
        });
      })
  }

  export { fetchReviews, createReview }