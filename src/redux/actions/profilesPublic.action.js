import axios from "axios";
import { REACT_APP_LIST_API } from "../../config";

export const GET_PROFILES_PUBLIC = "PROFILES/GET_PROFILES_PUBLIC";
// export const GET_PROFILE_PUBLIC = "PROFILES/GET_PROFILE_PUBLIC";

export const getProfilesPublc = (access_token) => (dispatch) => {
  axios
    .get(`${REACT_APP_LIST_API}/public/profiles`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`,
      },
    })
    .then(({ data }) => {
      dispatch({
        type: GET_PROFILES_PUBLIC,
        payload: data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

// export const getProfilePublc = (id, access_token) => (dispatch) => {
//   axios
//     .get(`${REACT_APP_LIST_API}/public/profiles/${id}/lists`, {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${access_token}`,
//       },
//     })
//     .then(({ data }) => {
//       dispatch({
//         type: GET_PROFILE_PUBLIC,
//         payload: data,
//       });
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };
