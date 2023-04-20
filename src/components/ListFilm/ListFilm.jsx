import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Col, Row } from "react-bootstrap";

import FilmPromo from "../FilmPromo/FilmPromo";
import ListBtn from "../ListBtn/ListBtn";

import { getFilms } from "../../redux/actions/tasks.actions";
import Header from "../Header/Header";
import EmptyList from "../../pages/List/EmptyList";
import ListStatus from "../Popup/ListStatus";

const ListFilm = ({ list }) => {
  const dispatch = useDispatch();
  const films = useSelector(({ filmsReducer }) => filmsReducer);

  const Authenticated = localStorage.getItem("Authenticated");
  useEffect(() => {
    if (list?.id && Authenticated) {
      const token = localStorage.getItem("MyToken");
      dispatch(getFilms(list?.id, token));
    }
  }, [list?.id]);

  return Authenticated ? (
    <>
      <Header list_id={list?.id} />
      <Container className="full-width">
        {films.length > 0 ? (
          <>
            <ListBtn />
            <div className="margin-15t d-none d-md-inline-block">
              <div className="heading">
                <h1>{list?.name}</h1>
                <ListStatus list={list} />
              </div>
            </div>
            <div className="list-tytle-mb d-block d-md-none padding-30t">
              <div className="heading">
                <h5>{list?.name}</h5>
                <ListStatus list={list} />
              </div>
            </div>
            <Row>
              {films?.map((content) => (
                <FilmPromo
                  key={content?.id}
                  content={content.content}
                  name={content.title}
                  id_list={content?.list?.id}
                  film_id={content?.id}
                />
              ))}
            </Row>
            <Col xs={12} className="padding-35t padding-35b loader-more">
              {/* {isFetching} */}
            </Col>
          </>
        ) : (
          <EmptyList id={list?.id} />
        )}
      </Container>
    </>
  ) : null;
};

export default ListFilm;
