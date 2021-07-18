import Axios from "axios";
const createPatient = (jwtToken, data) => (dispatch) => {
  const { token } = jwtToken;
  const patientData = {
    reviewer: data,
  };
  const createPatientAxios = Axios.create({
    baseURL: "https://unitreview.herokuapp.com",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  createPatientAxios
    .post("/reviewers.json", patientData)
    .then((res) => {
      const succPayload = {
        message: "Patient  was successfully added!",
        type: "patient_create_success",
      };

      //DISPATCH AND ACTION TO UPDATE THE STATE FOR PATIENTS AND ADD THE NEWLY CREATED PATIENT
      dispatch({
        type: "UPDATE_PATIENTS",
        payload: res.data,
      });

      dispatch({
        type: "SUCC_MSG",
        payload: succPayload,
      });
    })
    .catch((err) => {
      dispatch({
        type: "CREATE_ERROR",
        payload: err,
      });
    });
};
const fetchPatients = (jwtToken) => (dispatch) => {
  const { token } = jwtToken;

  const getPatientsAxios = Axios.create({
    baseURL: "https://unitreview.herokuapp.com/",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  getPatientsAxios
    .get("/reviewers.json")
    .then((res) => {
      dispatch({
        type: "GET_PATIENTS",
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

const loginPatientIn = (data) => (dispatch) => {
  const url =
    "https://unitreview.herokuapp.com/api/v1/auth/reviewer/login.json";
  Axios.post(url, data)
    .then((res) => {
      debugger;
      const jwtToken = JSON.stringify(res.data);
      localStorage.setItem("patJwt", jwtToken);
      const { username, token } = res.data;
      const userAxios = Axios.create({
        baseURL: "https://unitreview.herokuapp.com",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      userAxios.get(`/reviewers/${username}.json`)
      .then((res) => {
        debugger
        const succPayload = {
          message: "Welcome Back!",
          type: "login_success",
        };

        dispatch({
          type: "SUCC_MSG",
          payload: succPayload,
        });

        dispatch({
          type: "GET_PATIENT",
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
    .catch((err) => {
      dispatch({
        type: "CREATE_ERROR",
        payload: err,
      });
    });
};

const fetchPatient = (jwtToken) => (dispatch) => {
  const { token, username } = jwtToken;
  const userAxios = Axios.create({
    baseURL: "https://unitreview.herokuapp.com/api/v1/",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  userAxios
    .get(`/reviewers/${username}.json`)
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
        type: "GET_PATIENT",
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch({
        type: "CREATE_ERROR",
        payload: err,
      })
    );
};

export { createPatient, fetchPatients, loginPatientIn, fetchPatient };
