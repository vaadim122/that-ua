import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFilm } from "../../redux/actions/tasks.actions";
import { Container } from "react-bootstrap";
import Header from "../Header/Header";
import FilmContent from "./FilmContent";

const Film = ({ list_id }) => {
  const dispatch = useDispatch();
  const films = useSelector(({ filmsReducer }) => filmsReducer);
  const Authenticated = localStorage.getItem("Authenticated");

  useEffect(() => {
    if (list_id && Authenticated) {
      const token = localStorage.getItem("MyToken");
      dispatch(getFilm(list_id, token));
    }
  }, [list_id, Authenticated]);

  return films.length > 0 ? (
    <div className="film-detail">
      <Header />
      <Container className="full-width">
        <FilmContent films={films} />
      </Container>
    </div>
  ) : (
    ""
  );
};
export default Film;
