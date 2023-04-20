import { Col } from "react-bootstrap";

import "../../assets/scss/block/film-promo.scss";

import AddWBtn from "../Buttons/AddWBtn";
import DeleteBtn from "../Buttons/DeleteBtn";
import Moment from "moment";

const UnsortedPromo = (content) => {
  const name = content.name;
  const date = content.date;
  const originalImageUrl = content.originalImageUrl;
  const id = content.film_id;
  const ListId = content.id_list;

  content = content.content;
  return (
    <Col xs={12} md={6} lg={4}>
      <div className="content-item padding-15t padding-10b">
        <div className="content-item__box ">
          {content?.image ? (
            <Col xs={5} className="content-item__img">
              <img src={content?.image} alt="promo" loading="lazy" />
            </Col>
          ) : (
            ""
          )}
          {!content?.image ? (
            originalImageUrl ? (
              <Col xs={5} className="content-item__img">
                <img src={originalImageUrl} alt="promo" loading="lazy" />
              </Col>
            ) : (
              ""
            )
          ) : (
            ""
          )}
          <Col
            xs={content?.image || originalImageUrl ? 7 : 12}
            className="content-item__content"
          >
            <div className="content-item__top">
              <div className="content-item__date-add padding-10b">
                {Moment(date).format("DD.MM.YYYY")}
              </div>
              <div className="content-item__heading d-flex">
                <p className="h3">{content?.title ? content?.title : name}</p>
              </div>
              <div className="content-item__info padding-10t padding-sm-15t padding-20b">
                {content?.runtimeMinutes ? (
                  <span className="p f-hour">{content?.runtimeMinutes}min</span>
                ) : null}
                <div className="p f-category">
                  {content?.genres
                    ? content?.genres?.map((el, i) => (
                        <span key={i}>
                          {el}
                          <span className="f-category__dots">·</span>
                        </span>
                      ))
                    : null}
                </div>
              </div>
            </div>
            <p className="content-item__content--text  padding-20t">
              {content?.plot ? content?.plot : ""}
            </p>
            <div className="content-item__bottom content-item__bottom-unsortent content-item__bottom--list padding-5t padding-sm-20t">
              <AddWBtn film_id={id} list_id={ListId} />
              <DeleteBtn film_id={id} list_id={ListId} />
            </div>
          </Col>
        </div>
      </div>
    </Col>
  );
};
export default UnsortedPromo;
