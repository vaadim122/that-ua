import { GET_RECOMENDATION } from "../actions/tasks.actions";

const initialState = [];

export const recomendationReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECOMENDATION:
      return action.payload;
    default:
      return state;
  }
};
