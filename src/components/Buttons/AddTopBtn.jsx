import add_top from "../../assets/images/add-top.svg";

const AddTopBtn = () => {
  return (
    <div className="move-btn">
      <span>
        <img src={add_top} alt="add to top" /> В Мій Топ
      </span>
    </div>
  );
};
export default AddTopBtn;
