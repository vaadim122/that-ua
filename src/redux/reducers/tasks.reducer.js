import {
  GET_FILMS,
  MOVE_FILM,
  GET_FILM,
  DELETE_FILM,
  ADD_FILM,
  CLEAR_FILMS,
  EDIT_LIST,
} from "../actions/tasks.actions";

const initialState = [];

export const filmsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FILMS:
      return action.payload;
    case GET_FILM:
      return action.payload;
    case ADD_FILM:
      return action.active_list === action.payload.listId
        ? [...state, action.payload]
        : state;
    case MOVE_FILM:
      return state.filter(({ id }) => id !== action.payload.id);
    case DELETE_FILM:
      return state.filter(({ id }) => id !== action.payload);
    // case EDIT_LIST:
    //   const newState = state;
    //   newState[0].list.name = action.payload.name;
    //   console.log(newState);
    //   return [...state];
    case CLEAR_FILMS:
      return [];
    default:
      return state;
  }
};
