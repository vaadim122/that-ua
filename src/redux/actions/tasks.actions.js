import axios from "axios";
import { REACT_APP_LIST_API } from "../../config";

export const GET_FILMS = "FILMS/GET_FILMS";
export const CLEAR_FILMS = "FILMS/CLEAR_FILMS";
export const GET_FILM = "FILM/GET_FILM";
export const GET_LISTS = "LISTS/GET_LISTS";
export const ADD_LIST = "LISTS/ADD_LIST";
export const GET_ME = "LISTS/GET_ME";
// export const ADD_INSTAGRAM = "LISTS/ADD_INSTAGRAM";
export const MOVE_FILM = "FILMS/MOVE_FILM";
export const ADD_FILM = "FILMS/ADD_FILM";
export const DELETE_FILM = "FILMS/DELETE_FILM";
export const DELETE_LIST = "LISTS/DELETE_LIST";
export const EDIT_LIST = "LISTS/EDIT_LIST";
export const STATUS_LIST = "LISTS/STATUS_LIST";
export const GET_LINKING_CODE = "GET_LINKING_CODE";
export const GET_PROFILE = "PROFILE/GET_PROFILE";
export const EDIT_PROFILE = "PROFILE/EDIT_PROFILE";
export const GET_RECOMENDATION = "RECOMENDATION/GET_RECOMENDATION";

export const getThatList = (access_token) => (dispatch) => {
  axios
    .get(`${REACT_APP_LIST_API}/lists`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`,
      },
    })
    .then(({ data }) => {
      dispatch({
        type: GET_LISTS,
        payload: data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const addThatList = (name, profileId, access_token) => (dispatch) => {
  axios
    .post(
      `${REACT_APP_LIST_API}/lists`,
      {
        name: name,
        profileId: profileId,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token}`,
        },
      }
    )
    .then(({ data }) => {
      dispatch({
        type: ADD_LIST,
        payload: data,
      });
    });
};

export const editList = (newName, list_id, access_token) => (dispatch) => {
  axios
    .patch(
      `${REACT_APP_LIST_API}/lists/${list_id}`,
      {
        name: newName,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token}`,
        },
      }
    )
    .then(({ data }) => {
      dispatch({
        type: EDIT_LIST,
        payload: data,
      });
    });
};

export const editListStatus = (status, list_id, access_token) => (dispatch) => {
  axios
    .patch(
      `${REACT_APP_LIST_API}/lists/${list_id}`,
      {
        isPublic: status,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token}`,
        },
      }
    )
    .then(({ data }) => {
      dispatch({
        type: STATUS_LIST,
        payload: data,
      });
    });
};

export const getFilms = (id_list, token) => (dispatch) => {
  dispatch(clearState());
  axios
    // .get(`${REACT_APP_LIST_API}/lists/${id_list}/items?$top=${count}`, {
    .get(`${REACT_APP_LIST_API}/lists/${id_list}/items`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then(({ data }) => {
      dispatch({
        type: GET_FILMS,
        payload: data,
      });
    })
    .catch((error) => {
      // Handle error.
      console.log("An error occurred:", error.response.status);
      if (error.response.status === 401) {
        // window.location = "/";
      }
    });
};

export const clearState = () => ({ type: CLEAR_FILMS });

export const getFilm = (id_list, access_token) => (dispatch) => {
  axios
    .get(`${REACT_APP_LIST_API}/lists/${id_list}/items`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`,
      },
    })
    .then(({ data }) => {
      dispatch({
        type: GET_FILM,
        payload: data,
      });
    });
};

export const moveFilm =
  (film_id, list_id, newListID, access_token) => (dispatch) => {
    axios
      .patch(
        `${REACT_APP_LIST_API}/lists/${list_id}/items/${film_id}`,
        {
          title: "",
          listId: newListID,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${access_token}`,
          },
        }
      )
      .then(({ data }) => {
        dispatch({
          type: MOVE_FILM,
          payload: data,
        });
      });
  };

export const addFilm =
  (profile_id, list_id, titleFilm, access_token, active_list) => (dispatch) => {
    axios
      .post(
        `${REACT_APP_LIST_API}/lists/items`,
        {
          profileId: profile_id,
          title: titleFilm,
          listId: list_id,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${access_token}`,
          },
        }
      )
      .then(({ data }) => {
        setTimeout(() => {
          dispatch({
            type: ADD_FILM,
            payload: data,
            active_list: active_list,
          });
        }, 0);
      });
  };

export const addPublicFilm =
  (profile_id, list_id, contentId, title, access_token) => (dispatch) => {
    axios
      .post(
        `${REACT_APP_LIST_API}/lists/items`,
        {
          profileId: profile_id,
          title: title,
          listId: list_id,
          contentId: contentId,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${access_token}`,
          },
        }
      )
      .then(({ data }) => {
        setTimeout(() => {
          dispatch({
            type: ADD_FILM,
            payload: data,
          });
        }, 0);
      });
  };

export const getLinkingCode = (access_token) => (dispatch) => {
  axios
    .get(`${REACT_APP_LIST_API}/me/linking_code`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`,
      },
    })
    .then(({ data }) => {
      dispatch({
        type: GET_LINKING_CODE,
        payload: data,
      });
    });
};

export const deleteFilm = (list_id, film_id, access_token) => (dispatch) =>
  axios
    .delete(`${REACT_APP_LIST_API}/lists/${list_id}/items/${film_id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`,
      },
    })
    .then(({ data }) =>
      dispatch({
        type: DELETE_FILM,
        payload: film_id,
      })
    );

export const deleteList = (list_id, access_token) => (dispatch) =>
  axios
    .delete(`${REACT_APP_LIST_API}/lists/${list_id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`,
      },
    })
    .then(({ data }) =>
      dispatch({
        type: DELETE_LIST,
        payload: list_id,
      })
    );

export const getProfile = (access_token) => (dispatch) => {
  axios
    .get(`${REACT_APP_LIST_API}/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`,
      },
    })
    .then(({ data }) => {
      dispatch({
        type: GET_PROFILE,
        payload: data,
      });
    })
    .catch((error) => {
      console.log("An error occurred:", error.response.status);
      if (error.response.status === 401) {
        localStorage.clear();
        setTimeout(() => {
          window.location = "/login";
        }, 0);
      }
    });
};

export const editProfile =
  (name, base64Data, checked, access_token) => (dispatch) => {
    axios
      .patch(
        `${REACT_APP_LIST_API}/me`,
        {
          name: name,
          profileImageBase64: base64Data,
          isPublic: checked,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${access_token}`,
          },
        }
      )
      .then(({ data }) => {
        dispatch({
          type: EDIT_PROFILE,
          payload: data,
        });
        window.location.reload();
      });
  };

export const getRecomendation = (access_token, skip) => (dispatch) => {
  axios
    .get(`${REACT_APP_LIST_API}/ratings/recomendation?$top=1&$skip=${skip}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`,
      },
    })
    .then(({ data }) => {
      dispatch({
        type: GET_RECOMENDATION,
        payload: data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

// export const getProfile = (access_token) => (dispatch) => {
//   axios
//     .get(`${REACT_APP_LIST_API}/profiles`, {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${access_token}`,
//       },
//     })
//     .then(({ data }) => {
//       dispatch({
//         type: GET_PROFILE,
//         payload: data,
//       });
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };
