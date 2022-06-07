import axios from "axios";

export const GET_FILMS = "FILMS/GET_FILMS";

export const getFilms = () => (dispatch) =>
  axios
    .get("https://629e33f1c6ef9335c0b09906.mockapi.io/filmsthat")
    .then(({ data }) => {
      dispatch({
        type: GET_FILMS,
        payload: data,
      });
    });
