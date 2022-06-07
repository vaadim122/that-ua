import { Link } from "react-router-dom";
import rating from "../../assets/images/rage.png";
import DeleteBtn from "../Buttons/DeleteBtn";

const TopInfo = (content) => {
  return (
    <div className="content-item__top">
      <Link to="../">
        <h3>{content.title}</h3>
      </Link>
      {content.delete_icon ? <DeleteBtn /> : ""}
      <div className="content-item__info padding-15t padding-25b">
        <span className="p f-category">{content.category}</span>·
        <span className="p f-hour"> {content.time}</span>
        <span className="f-rating">
          <img src={rating} alt="rating" /> {content.rating}
        </span>
      </div>
    </div>
  );
};
export default TopInfo;
