import { GET_LINKING_CODE } from "../actions/tasks.actions";

const initialSatet = [];

export const linkingCodeReducer = (state = initialSatet, action) => {
  switch (action.type) {
    case GET_LINKING_CODE:
      return action.payload;
    default:
      return state;
  }
};
