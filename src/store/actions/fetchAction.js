
import Axios from 'axios';


const fetchHospital = () => dispatch => {
  const url = 'https://unitreview.herokuapp.com//api/v1/hospitals/1.json';
  Axios.get(url)
    .then(res => dispatch({
      type: 'GET_HOSPITAL',
      payload: res.data,
    }))
    .catch(err => dispatch({
      type: 'CREATE_ERROR',
      payload: err,
    }));
};

const getUnits = (jwtToken) => dispatch => {
  const { token } = jwtToken;
  const getUnitAxios = Axios.create({
    baseURL: "https://unitreview.herokuapp.com/api/v1/",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
 
  getUnitAxios.get('/units.json')
    .then(res => dispatch({
      type: 'GET_UNIT',
      payload: res.data,
    }))
    .catch(err => dispatch({
      type: 'CREATE_ERROR',
      payload: err,
    }));
};


export {fetchHospital, getUnits};
