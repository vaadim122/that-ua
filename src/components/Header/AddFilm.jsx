import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import useModal from "../../hook/hookOpenModal";

import { addFilm } from "../../redux/actions/tasks.actions";

import plus_icon from "../../assets/images/plus-header.svg";

const AddFilm = ({ list_id }) => {
  const { isOpen, toggle } = useModal();
  const Authenticated = localStorage.getItem("Authenticated");
  const [new_list, setNewList] = useState();
  const [text, setText] = useState("");
  const [selectedOption, setSelectedOption] = useState();
  const dispatch = useDispatch();

  const lists = useSelector(({ listReducer }) => listReducer);
  const about_me = useSelector(({ profileReducer }) => profileReducer);

  useEffect(() => {
    if (lists) {
      setNewList(
        lists?.filter((obj) => {
          return obj.type === "Content";
        })
      );
    }
  }, [lists]);

  const options = new_list?.map((list, i) => ({
    key: i,
    value: list.id,
    label: list.name,
  }));

  const handleChange = (env) => {
    setSelectedOption(env);
  };

  const handeAddFilm = (e) => {
    e.preventDefault();
    if (Authenticated) {
      const token = localStorage.getItem("MyToken");
      dispatch(
        addFilm(about_me.id, selectedOption.value, text, token, list_id)
      );
    }
    setSelectedOption();
    setText("");

    toggle();
  };

  return (
    <div className="header-insta-link">
      <span className="header__plus-btn" onClick={toggle}>
        <img
          src={plus_icon}
          className="d-inline-block align-top"
          alt="add film"
          width="25"
          height="25"
        />
      </span>
      <div className={`btn-create__form ${isOpen && "popup-open"}`}>
        <div className="btn-create__form--popup">
          <div className="btn-create__form--close">
            <span onClick={toggle}></span>
          </div>
          <div className="btn-create__form--icon margin-5t margin-25b"></div>
          <label htmlFor="list" className="p-small margin-20b">
            Add movie*
            <input
              type="text"
              id="add-list"
              onChange={({ target: { value } }) => setText(value)}
              value={text}
              name="list"
            />
          </label>
          <label htmlFor="list" className="p-small margin-0b">
            Select Wishlist
          </label>
          <Select
            className="btn-create__select margin-40b"
            value={selectedOption}
            options={options}
            onChange={handleChange}
          />

          <div className="btn-create__form--button">
            <button className={`btn-primary`} onClick={toggle}>
              Close
            </button>
            <button
              className={`btn-primary ${
                text.length < 1 || !selectedOption?.value
                  ? "btn-primary__disabled"
                  : ""
              }`}
              onClick={handeAddFilm}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddFilm;
