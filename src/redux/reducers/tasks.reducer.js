import { GET_FILMS } from "../actions/tasks.actions";

const initialSatet = [];

export const taskReducer = (state = initialSatet, action) => {
  switch (action.type) {
    case GET_FILMS:
      return [...state, ...action.payload];

    default:
      return state;
  }
};
