import React, { useState } from "react";
import { editList } from "../../redux/actions/tasks.actions";
import { useDispatch } from "react-redux";
import useModal from "../../hook/hookOpenModal";

const RenameList = ({ list, setActive }) => {
  const { isOpen, toggle } = useModal();
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const token = localStorage.getItem("MyToken");

  const handleToggle = () => {
    setActive("false");
    toggle();
    setText("");
  };

  const NewNameList = () => {
    dispatch(editList(text, list.id, token));
    toggle();
    setText("");
  };

  return (
    <li>
      <span className="list-edit__link" onClick={handleToggle}>
        Edit
      </span>
      <div className={`btn-create__form ${isOpen ? "popup-open" : ""}`}>
        <div className="btn-create__form--popup">
          <div className="btn-create__form--close">
            <span onClick={handleToggle}></span>
          </div>
          <div className="btn-create__form--icon margin-5t margin-25b"></div>
          <label htmlFor="list" className="p-small margin-40b">
            New name*
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
              onClick={NewNameList}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};
export default RenameList;
