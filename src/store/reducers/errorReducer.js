const errorReducer = (state = { err: {} }, action) => {
  switch (action.type) {
    case 'CREATE_ERROR':
      const {payload } = action
      return {
        err: {
          response: payload?.response,
          config: payload?.config,
          message: payload?.message,
          request: payload?.request
        }
      };
    case 'UNLOAD_ERROR':
      
      return {
        ...state,
        err: action.payload,
      };
    default:
      return state;
  }
};

export default errorReducer;
