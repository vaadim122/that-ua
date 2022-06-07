import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container } from "react-bootstrap";
import FilmPromo from "../../components/FilmPromo/FilmPromo";
import Heading from "../../components/Heading/Heading";
import ListBtn from "../../components/ListBtn/ListBtn";

import { getFilms } from "../../redux/actions/tasks.actions";

// import contents from "./data.js";

function TopList() {
  const dispatch = useDispatch();
  const films = useSelector(({ taskReducer }) => taskReducer);
  useEffect(() => {
    dispatch(getFilms());
  }, []);
  console.log(films);
  return (
    <Container>
      <Heading />
      <ListBtn />
      {films.map((content, i) => (
        <FilmPromo key={i} content={content} />
      ))}
    </Container>
  );
}

export default TopList;
