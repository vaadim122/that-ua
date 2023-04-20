import { MOVE_FILM } from "../actions/tasks.actions";

const initialSatet = [];

export const filmMoveReducer = (state = initialSatet, action) => {
  switch (action.type) {
    case MOVE_FILM:
      return action.payload;

    default:
      return state;
  }
};
