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

  export { fetchReviews }