const initState = {
    patients: {},
    patient: {}
}

const patientReducer = (state = initState, action) => {
    switch(action.type){
        case "GET_PATIENTS":
            return {
                ...state,
                patients: action.payload
            }
        case "UPDATE_PATIENTS":
            const res = action.payload;
            const patientsUpdate = [...state.patients, res]
            return {
                ...state,
                patients: patientsUpdate
            }
        default:
            return state
    }
}

export default patientReducer