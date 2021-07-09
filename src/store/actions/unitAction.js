import Axios from 'axios';
  const createUnit = (jwtToken, data) => dispatch => {
    const { token } = jwtToken;
    const unitData = {
      unit: data,
    };
    const getUnitAxios = Axios.create({
      baseURL: "https://unitreview.herokuapp.com/api/v1/",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
   
    getUnitAxios.post('/units.json', unitData)
      .then(res => {
        const succPayload = {
          message: "Unit was successfully created!",
          type: "unit_create_success",
        };
        dispatch({
        type: 'SUCC_MSG',
        payload: succPayload,
      })})
      .catch(err => {
        dispatch({
        type: 'CREATE_ERROR',
        payload: {
          ...err,
          response: err?.response
        },
      })
    });
  };
export { createUnit }  