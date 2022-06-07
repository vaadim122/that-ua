import up_arrow from "../../assets/images/up-arrow.svg";

const MoveBtn = () => {
  return (
    <div className="move-btn">
      <span>
        <img src={up_arrow} alt="move" /> Наверх
      </span>
    </div>
  );
};
export default MoveBtn;
