import axios from "axios";
import { REACT_APP_LIST_API } from "../../config";

export const GET_CHECK_LIST = "LISTS/GET_CHECK_LIST";
export const GET_PUBLIC_LIST = "LISTS/GET_PUBLIC_LIST";

export const getPublcStatus = (id) => (dispatch) => {
  axios
    .get(`${REACT_APP_LIST_API}/lists/${id}/isPublic`)
    .then(({ data }) => {
      dispatch({
        type: GET_CHECK_LIST,
        payload: data,
      });
    })
    .catch((error) => {
      console.log(error);
      if (error.response.status === 400) {
        window.location = "/list_not_found";
        // window.location = "/";
      }
    });
};

export const getPublcList = (id) => (dispatch) => {
  axios
    .get(`${REACT_APP_LIST_API}/lists/${id}/publicItems`)
    .then(({ data }) => {
      dispatch({
        type: GET_PUBLIC_LIST,
        payload: data,
      });
    })
    .catch((error) => {
      // Handle error.
      console.log("An error occurred:", error.response.status);
      if (error.response.status === 404) {
        window.location = "/not_public_list";
        // window.location = "/";
      }
    });
};
