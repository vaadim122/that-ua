import { GET_CHECK_LIST, GET_PUBLIC_LIST } from "../actions/public.actions";

const initialState = [];

export const publicReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHECK_LIST:
      return action.payload;
    default:
      return state;
  }
};

export const publicListReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PUBLIC_LIST:
      return action.payload;
    default:
      return state;
  }
};
