import React, { useState } from "react";
import { addThatList } from "../../redux/actions/tasks.actions";
import { useDispatch, useSelector } from "react-redux";
import useModal from "../../hook/hookOpenModal";

const CreateList = () => {
  const { isOpen, toggle } = useModal();
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const profile = useSelector(({ profileReducer }) => profileReducer);
  const token = localStorage.getItem("MyToken");

  const handleToggle = () => {
    toggle();
    setText("");
  };

  const createListNew = () => {
    dispatch(addThatList(text, profile?.id, token));
    toggle();
    setText("");
  };

  return (
    <li className="btn-create margin-15t">
      <div className="btn-create__button" onClick={handleToggle}>
        <span className="d-none d-md-inline-block">New List</span>
      </div>
      <span className="d-block d-md-none list-btn__mobile-title">New</span>
      <div className={`btn-create__form ${isOpen ? "popup-open" : ""}`}>
        <div className="btn-create__form--popup">
          <div className="btn-create__form--close">
            <span onClick={handleToggle}></span>
          </div>
          <div className="btn-create__form--icon margin-5t margin-25b"></div>
          <label htmlFor="list" className="p-small margin-40b">
            List name*
            <input
              type="text"
              id="add-list"
              onChange={({ target: { value } }) => setText(value)}
              value={text}
              name="list"
            />
          </label>
          <div className="btn-create__form--button">
            <button className={`btn-primary`} onClick={handleToggle}>
              Close
            </button>
            <button
              className={`btn-primary ${
                text.length < 1 ? "btn-primary__disabled" : ""
              }`}
              onClick={createListNew}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};
export default CreateList;
