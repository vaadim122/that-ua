import like from "../../assets/images/like.png";
import dislike from "../../assets/images/dislike.png";

const LikesBtn = (content) => {
  return (
    <div className="voice-btn">
      <span className="like-film">
        <img src={like} alt="like" /> {content.like}
      </span>
      <span className="dilike-film">
        <img src={dislike} alt="dislike" /> {content.dislike}
      </span>
    </div>
  );
};
export default LikesBtn;
