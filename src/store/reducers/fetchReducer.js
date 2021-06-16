/* eslint-disable no-case-declarations */
const initialState = {
  hospital: []
};
const fetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_HOSPITAL':
      // return {
      //   ...state,
      //   hospital: action.payload,
      // };
      debugger
      console.log(action)
    default:
      return state;
  }
};

export default fetchReducer;
