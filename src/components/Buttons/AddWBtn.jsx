import add_wishlist from "../../assets/images/add_wishlist.svg";

const AddWBtn = () => {
  return (
    <div className="move-btn">
      <span>
        <img src={add_wishlist} alt="add to wishlist" /> У Вішлсіт
      </span>
    </div>
  );
};
export default AddWBtn;
