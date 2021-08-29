const initialState = {
    reviews: {},
    review: {},
    unitReviews: ['Empty']
  };
  const reviewsReducer = (state = initialState, action) => {
    switch (action.type) {
      case "GET_REVIEW":
        return {
          ...state,
          review: action.payload,
        };
      case "GET_REVIEWS":
        return {
          ...state,
          reviews: action.payload,
        };
        case "GET_UNIT_REVIEWS":
          return {
            ...state,
            unitReviews: action.payload,
        };  
      case "UPDATE_REVIEWS":
        
        const res = action.payload;
        const reviewsUpdate = [ res, ...state.reviews];
        
        return {
          ...state,
          units: reviewsUpdate,
        };
      default:
        return state;
    }
  };
  
  export default reviewsReducer;