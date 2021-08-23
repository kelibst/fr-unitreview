const initState = {
  patients: {},
  patient: {},
  patUnits: {}
};

const patientReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_PATIENTS":
      return {
        ...state,
        patients: action.payload,
      };
    case "GET_PATIENT":
      return {
        ...state,
        patient: action.payload,
      };
      case "GET_PAT_SLOTS":
      return {
        ...state,
        patUnits: action.payload,
      };
    case "UPDATE_PATIENTS":
      const res = action.payload;
      const patientsUpdate = [res, ...state.patients];
      return {
        ...state,
        patients: patientsUpdate,
      };
    default:
      return state;
  }
};

export default patientReducer;
