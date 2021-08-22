const initialState = {
  units: {},
  unit: {},
};
const unitsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_UNIT":
      return {
        ...state,
        unit: action.payload,
      };
    case "GET_UNITS":
      return {
        ...state,
        units: action.payload,
      };

    case "SET_CURRENT_UNITS":
        return {
          ...state,
          unit: action.payload,
    }; 
    case "UPDATE_UNITS":
      
      const res = action.payload;
      const unitUpdate = [ res, ...state.units];
      
      return {
        ...state,
        units: unitUpdate,
      };
    default:
      return state;
  }
};

export default unitsReducer;
