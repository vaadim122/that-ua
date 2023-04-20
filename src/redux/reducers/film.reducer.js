import { GET_FILM } from "../actions/tasks.actions";

const initialSatet = [];

export const filmReducer = (state = initialSatet, action) => {
  switch (action.type) {
    case GET_FILM:
      return action.payload;

    default:
      return state;
  }
};
