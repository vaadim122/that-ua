import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";
import FilmPromo from "../../components/FilmPromo/FilmPromo";
import ListBtn from "../../components/ListBtn/ListBtn";

import { getFilms, clearState } from "../../redux/actions/tasks.actions";
// import useInfiniteScroll from "../../store/useInfiniteScroll";
import Header from "../../components/Header/Header";
import EmptyList from "./EmptyList";
import EditList from "../../components/Popup/EditList";
import ListStatus from "../../components/Popup/ListStatus";

const List = () => {
  const lists = useSelector(({ listReducer }) => listReducer);
  const { id } = useParams();
  const Authenticated = localStorage.getItem("Authenticated");
  const dispatch = useDispatch();
  const films = useSelector(({ filmsReducer }) => filmsReducer);

  // const [count, setCount] = useState(10);

  const list = lists?.find((obj) => {
    return obj.id === id;
  });
  useEffect(() => {
    if (id && Authenticated) {
      const token = localStorage.getItem("MyToken");
      dispatch(getFilms(id, token));
    }
    // return () => dispatch(clearState());
  }, [id]);

  // const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems);

  // function fetchMoreListItems() {
  //   setTimeout(() => {
  //     setCount((prevState) => prevState + 4);
  //     setIsFetching(false);
  //   }, 100);
  // }

  return Authenticated ? (
    <>
      <Header list_id={id} />
      <Container className="full-width">
        {films.length > 0 ? (
          <>
            <ListBtn />

            <div className="heading margin-15t d-none d-md-inline-block">
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
              {!list?.isSystem ? (
                <>
                  <EditList list={list} mobileList={true} />
                </>
              ) : (
                // <EditList list={films[0]?.list} mobileList={true} />
                ""
              )}
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
          <EmptyList id={id} />
        )}
      </Container>
    </>
  ) : null;
};

export default List;
