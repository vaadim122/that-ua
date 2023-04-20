import { Link } from "react-router-dom";
import rating from "../../assets/images/rage.png";
import useAnalyticsEventTracker from "../../hook/useAnalyticsEventTracker";
import DeleteBtn from "../Buttons/DeleteBtn";

const TopInfo = ({ content, film_id, list_id, publickList }) => {
  const filmId = film_id;
  const ListId = list_id;
  const gaEventTracker = useAnalyticsEventTracker("Film");

  return (
    <div className="content-item__top">
      <div className="content-item__heading d-flex">
        <Link
          to={content?.id ? `/list/${list_id}/film/${content.id}` : "#"}
          onClick={() => gaEventTracker(content?.title)}
        >
          <p className="h3">
            {content?.title ? content?.title : content?.name}
          </p>
        </Link>
        {!publickList && <DeleteBtn film_id={filmId} list_id={ListId} />}
      </div>

      <div className="content-item__info padding-10t padding-sm-15t padding-20b">
        {content?.runtimeMinutes ? (
          <span className="p f-hour"> {content?.runtimeMinutes}min</span>
        ) : null}
        {content?.imdbRating ? (
          <span className="f-rating">
            <img src={rating} alt="rating" width="30" height="16" />{" "}
            {content?.imdbRating}
          </span>
        ) : null}
        {content?.type ? (
          <div className="content-item__type">
            <span className="p"> {content?.type}</span>
          </div>
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
  );
};
export default TopInfo;
