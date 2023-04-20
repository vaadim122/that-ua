import { GET_PROFILE, EDIT_PROFILE } from "../actions/tasks.actions";

const initialSatet = [];

export const profileReducer = (state = initialSatet, action) => {
  switch (action.type) {
    case GET_PROFILE:
      return action.payload;
    case EDIT_PROFILE:
      return action.payload;

    default:
      return state;
  }
};
