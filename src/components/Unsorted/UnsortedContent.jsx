import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Col, Row } from "react-bootstrap";
import Heading from "../Heading/Heading";

import { getFilms } from "../../redux/actions/tasks.actions";
import useInfiniteScroll from "../../store/useInfiniteScroll";
import Header from "../Header/Header";
import EmptyList from "../../pages/List/EmptyList";
import UnsortedPromo from "./UnsortedPromo";
const UnsortedContent = ({ list }) => {
  const dispatch = useDispatch();
  const films = useSelector(({ filmsReducer }) => filmsReducer);

  const [count, setCount] = useState(20);
  const [loading, setLoading] = useState(false);

  const Authenticated = localStorage.getItem("Authenticated");

  useEffect(() => {
    if (list?.id && Authenticated) {
      const token = localStorage.getItem("MyToken");
      dispatch(getFilms(list?.id, token, count));

      if (films.length > 0) {
        setLoading(true);
      }
    }
  }, [list?.id, Authenticated, count]);

  useEffect(() => {
    if (films.length > 0) {
      setLoading(true);
    }
  }, [films.length]);
  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems);

  function fetchMoreListItems() {
    setTimeout(() => {
      setCount((prevState) => prevState + 6);
      setIsFetching(false);
    }, 500);
  }

  return Authenticated ? (
    <>
      <Header />
      <Container className="full-width">
        {loading ? (
          <>
            <Heading name={list?.name} />
            <div className="list-tytle-mb d-block d-md-none padding-30t">
              <h5>{list?.name}</h5>
            </div>
            <Row>
              {films?.map((content, i) => (
                <UnsortedPromo
                  key={i}
                  content={content.content}
                  name={content.title}
                  date={content.dateAdded}
                  id_list={content.list.id}
                  film_id={content.id}
                  originalImageUrl={content.originalImageUrl}
                />
              ))}
            </Row>
            <Col xs={12} className="padding-35t padding-35b loader-more">
              {isFetching}
            </Col>
          </>
        ) : (
          <EmptyList id={list?.id} disabelBtn={true} />
        )}
      </Container>
    </>
  ) : null;
};

export default UnsortedContent;
