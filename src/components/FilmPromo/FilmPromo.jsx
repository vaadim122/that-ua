import { Row, Col } from "react-bootstrap";

import "../../assets/scss/block/film-promo.scss";

import TopInfo from "../TopInfo/TopInfo";
import LikesBtn from "../Buttons/LikesBtn";
import LinksBtn from "../Buttons/LinksBtn";
import MoveBtn from "../Buttons/MoveBtn";
import AddTopBtn from "../Buttons/AddTopBtn";
import AddWBtn from "../Buttons/AddWBtn";

const FilmPromo = (content) => {
  content = content.content;
  return (
    <Row className="padding-15t padding-15b content-item">
      <Col xs={6} className="content-item__img">
        <img src={content.promo_img} alt="promo" />
      </Col>
      <Col xs={6} className="content-item__content">
        <TopInfo {...content} />
        <p>{content.text}</p>
        <div className="content-item__bottom">
          <LikesBtn {...content} />
          {content.links_icon ? <LinksBtn {...content} /> : ""}
          {content.move_icon ? <MoveBtn /> : ""}
          {content.add_top ? <AddTopBtn /> : ""}
          {content.add_wishlist ? <AddWBtn /> : ""}
        </div>
      </Col>
    </Row>
  );
};
export default FilmPromo;
