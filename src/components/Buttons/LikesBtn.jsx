import like_icon from "../../assets/images/like.png";
import dislike_icon from "../../assets/images/dislike.png";

const LikesBtn = (content) => {
  return (
    <div className="voice-btn">
      <span className="like-film">
        <img src={like_icon} alt="like" /> {content.like}
      </span>
      <span className="dilike-film">
        <img src={dislike_icon} alt="dislike" /> {content.dislike}
      </span>
    </div>
  );
};
export default LikesBtn;
