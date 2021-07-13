import Axios from 'axios';
const createPatient = (jwtToken, data) => dispatch => {
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
   
    createPatientAxios.post('/reviewers.json', patientData)
      .then(res => {
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
        type: 'SUCC_MSG',
        payload: succPayload,
      })})
      .catch(err => {
        dispatch({
        type: 'CREATE_ERROR',
        payload: err
      })
    });
  };

  export { createPatient }