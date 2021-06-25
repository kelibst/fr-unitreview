import Axios from 'axios'

const authAdmin = data => dispatch => {
    const url = 'https://unitreview.herokuapp.com//api/v1/auth/login.json';
    
    Axios.post(url, data)
      .then(res => {
        const jwt = res.data.token
        localStorage.setItem('jwt', res.data.token);
        debugger
        dispatch({
          type: 'AUTH_ADMIN',
          payload: res.data,
        });
      })
      .catch(err => dispatch({
        type: 'CREATE_ERROR',
        payload: err,
      }));
  };
  
  const createAdmin = data => dispatch => {
    data = {
      ...data,
      "hospital_id": 1
    }
    const url = 'https://unitreview.herokuapp.com//api/v1/administrators.json';
    const userData = {
      administrator: data,
    };
    debugger
    Axios.post(url, userData)
      .then(res => dispatch({
        type: 'CREATE_USER',
        payload: res.data,
      }))
      .catch(err => console.log(err));
  };

  export {createAdmin, authAdmin }