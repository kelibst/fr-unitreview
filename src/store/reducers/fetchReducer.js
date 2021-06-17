/* eslint-disable no-case-declarations */
const initialState = {
  hospitalData: []
};
const fetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_HOSPITAL':
      return {
        ...state,
        hospitalData: action.payload,
      };
    default:
      return state;
  }
};

export default fetchReducer;
