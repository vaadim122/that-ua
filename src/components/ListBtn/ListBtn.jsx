import { Link } from "react-router-dom";

import "../../assets/scss/block/list-btn.scss";

const ListBtn = () => {
  return (
    <div className="list-btn">
      <ul>
        <li className="btn-create">
          <Link to="/">Новий список</Link>
        </li>
        <li className="btn-list active">
          <Link to="/sign-up">Топ 10</Link>
          <span className="btn-list__dots"></span>
        </li>
        <li className="btn-list">
          <Link to="/sign-in">Комедії</Link>
          <span className="btn-list__dots"></span>
        </li>
      </ul>
    </div>
  );
};
export default ListBtn;
