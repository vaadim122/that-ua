import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";
import FilmPromo from "../../components/FilmPromo/FilmPromo";

import {
  getPublcStatus,
  getPublcList,
} from "../../redux/actions/public.actions";
import Header from "../../components/Header/Header";
import EmptyList from "../List/EmptyList";

const PublicList = () => {
  const { id } = useParams();
  const publickList = true;
  const [list, setList] = useState(true);

  const listsPublic = useSelector(
    ({ publicReducer }) => publicReducer.isPublic
  );
  const films = useSelector(({ publicListReducer }) => publicListReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(getPublcStatus(id));
    }
  }, [id]);

  useEffect(() => {
    setList(listsPublic);
    if (list) {
      dispatch(getPublcList(id));
    }
  }, [listsPublic, id]);

  return listsPublic ? (
    <>
      <Header list_id={id} />
      <Container className="full-width">
        {films.length > 0 ? (
          <>
            <div className="heading margin-15t d-none d-md-inline-block">
              <div className="heading">
                <h1>{films[0]?.list.name}</h1>
              </div>
            </div>

            <div className="list-tytle-mb d-block d-md-none padding-30t">
              <div className="heading">
                <h5>{films[0]?.list.name}</h5>
              </div>
            </div>
            <Row>
              {films?.map((content, i) => (
                <FilmPromo
                  key={i}
                  content={content.content}
                  name_list={content.title}
                  id_list={content?.list?.id}
                  film_id={content.id}
                  publickList={publickList}
                />
              ))}
            </Row>
            <Col xs={12} className="padding-35t padding-35b loader-more">
              {/* {isFetching} */}
            </Col>
          </>
        ) : (
          <EmptyList id={id} disabelBtn={true} />
        )}
      </Container>
    </>
  ) : (
    ""
  );
};

export default PublicList;
