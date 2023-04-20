import { GET_PROFILES_PUBLIC } from "../actions/profilesPublic.action";

const initialState = [];

export const profilesPublicReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILES_PUBLIC:
      return action.payload;
    default:
      return state;
  }
};

// export const profilePublicReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case GET_PROFILE_PUBLIC:
//       return action.payload;
//     default:
//       return state;
//   }
// };
