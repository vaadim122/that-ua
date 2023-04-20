import {
  GET_LISTS,
  ADD_LIST,
  DELETE_LIST,
  EDIT_LIST,
  STATUS_LIST,
} from "../actions/tasks.actions";

const initialState = [];

export const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LISTS:
      return action.payload;
    case ADD_LIST:
      return [...state, action.payload];
    case EDIT_LIST:
      const index = state.findIndex((el) => el.id === action.payload.id);
      const newState = [...state];
      newState[index].name = action.payload.name;
      return newState;
    case STATUS_LIST:
      const sIndex = state.findIndex((el) => el.id === action.payload.id);
      const newStatusState = [...state];
      newStatusState[sIndex].isPublic = action.payload.isPublic;
      return newStatusState;
    case DELETE_LIST:
      return state.filter(({ id }) => id !== action.payload);

    default:
      return state;
  }
};
