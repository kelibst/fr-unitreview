/* eslint-disable no-case-declarations */
const initialState = {
  currentUser: {},
  currentPatient: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH_ADMIN':
      const { jwt } = action.payload;
      localStorage.setItem('jwt', jwt);
      
      return

    case 'CREATE_USER':
      return {
        ...state,
        currentUser: action.payload,
      };

    case 'FETCH_USER':
      
      return {
        ...state,
        currentUser: action.payload,
      };

    case 'LOG_OUT':
      return {
        ...state,
        currentUser: {},
      };

    default:
      return state;
  }
};

export default userReducer;
