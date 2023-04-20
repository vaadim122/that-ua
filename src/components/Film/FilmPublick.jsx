import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container } from "react-bootstrap";
import Header from "../Header/Header";
import FilmContent from "./FilmContent";

import {
  getPublcStatus,
  getPublcList,
} from "../../redux/actions/public.actions";

const FilmPublick = ({ publickList, list_id }) => {
  const listsPublic = useSelector(
    ({ publicReducer }) => publicReducer.isPublic
  );
  const [list, setList] = useState(true);
  const publicFilms = useSelector(({ publicListReducer }) => publicListReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    if (list_id) {
      dispatch(getPublcStatus(list_id));
    }
  }, [list_id]);

  useEffect(() => {
    setList(listsPublic);
    if (list) {
      dispatch(getPublcList(list_id));
    }
  }, [listsPublic, list_id]);

  return publicFilms.length > 0 ? (
    <div className="film-detail">
      <Header />
      <Container className="full-width">
        <FilmContent films={publicFilms} publickList={publickList} />
      </Container>
    </div>
  ) : (
    ""
  );
};
export default FilmPublick;
