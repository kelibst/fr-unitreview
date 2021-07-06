const initialState = {
  units: {}
};
const fetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_HOSPITAL':
      return {
        ...state,
        hospitalData: action.payload,
      };
    case 'GET_UNIT':
      return {
        ...state,
        units: action.payload
      }
    default:
      return state;
  }
};

export default unitsReducer;
