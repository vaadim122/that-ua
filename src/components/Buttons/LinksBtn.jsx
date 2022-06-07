import { Link } from "react-router-dom";

import netflix from "../../assets/images/netflix.png";
import megogo from "../../assets/images/megogo.png";

const LinksBtn = (content) => {
  return (
    <div className="link-btn">
      <Link to={content.netflix_link}>
        <img src={netflix} alt="netflix" />
      </Link>

      <Link to={content.megogo_link} className="link-btn__megogo">
        <img src={megogo} alt="megogo" />
      </Link>
    </div>
  );
};
export default LinksBtn;
