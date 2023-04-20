import React from "react";

const DletePopup = ({ handleToggle, handleDelete, isActive }) => {
  return (
    <div className={`delete_film__popup ${isActive && "popup-open"}`}>
      <div className="delete_film__popup__content">
        <div className="delete_film__popup--close">
          <span onClick={handleToggle}></span>
        </div>
        <p className="margin-30t margin-30b">
          Do you really want to delete this item?
        </p>
        <div className="delete_film__popup--button">
          <button className={`btn-primary`} onClick={handleToggle}>
            Close
          </button>
          <button className={`btn-primary`} onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
export default DletePopup;
