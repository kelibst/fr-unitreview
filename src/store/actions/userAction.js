import Axios from "axios";

const authAdmin = (data) => (dispatch) => {
  const url = "https://unitreview.herokuapp.com/api/v1/auth/login.json";

  Axios.post(url, data)
    .then((res) => {
      const jwtToken = JSON.stringify(res.data);
      localStorage.setItem("jwt", jwtToken);
      const { username, token } = res.data;
      const userAxios = Axios.create({
        baseURL: "https://unitreview.herokuapp.com/api/v1/",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      userAxios
        .get(`/administrators/${username}.json`)
        .then((res) => {
          const succPayload = {
            message: "Welcome Back!",
            type: "login_success",
          };

          dispatch({
            type: "SUCC_MSG",
            payload: succPayload,
          });

          dispatch({
            type: "FETCH_USER",
            payload: res.data,
          });
        })
        .catch((err) =>
          dispatch({
            type: "CREATE_ERROR",
            payload: err,
          })
        );
    })
    .catch((err) =>
      dispatch({
        type: "CREATE_ERROR",
        payload: err,
      })
    );
};

const createAdmin = (data) => (dispatch) => {
  data = {
    ...data,
    hospital_id: 1,
  };
  const url = "https://unitreview.herokuapp.com//api/v1/administrators.json";
  const userData = {
    administrator: data,
  };

  Axios.post(url, userData)
    .then((res) =>
      dispatch({
        type: "CREATE_USER",
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: "CREATE_ERROR",
        payload: err,
      })
    );
};

const fetchAdmin = (jwtToken) => (dispatch) => {
  const { token, username } = jwtToken;
  ;
  const userAxios = Axios.create({
    baseURL: "https://unitreview.herokuapp.com/api/v1/",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  userAxios.get(`/administrators/${username}.json`).then((res) => {
    const succPayload = {
      message: "Welcome Back!",
      type: "login_success",
    };

    dispatch({
      type: "SUCC_MSG",
      payload: succPayload,
    });

    dispatch({
      type: "FETCH_USER",
      payload: res.data,
    })
  }).catch((err) =>
      dispatch({
        type: "CREATE_ERROR",
        payload: err,
      })
    );;
};

export { createAdmin, authAdmin, fetchAdmin };
