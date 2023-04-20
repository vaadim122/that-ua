import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addPublicFilm } from "../../redux/actions/tasks.actions";

import add_wishlist from "../../assets/images/in_wishlist.svg";

const AddWPublicBtn = ({ contentId, title }) => {
  const dispatch = useDispatch();
  const lists = useSelector(({ listReducer }) => listReducer);
  const about_me = useSelector(({ profileReducer }) => profileReducer);
  const [new_list, setNewList] = useState();

  useEffect(() => {
    if (lists) {
      setNewList(
        lists?.filter((obj) => {
          return obj.type === "Content";
        })
      );
    }
  }, [lists]);

  const [isActive, setActive] = useState("false");
  const ref = useRef(null);

  const handleToggle = () => {
    setActive(!isActive);
  };
  const useOutsideClick = (ref, callback) => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        callback();
      }
    };

    useEffect(() => {
      document.addEventListener("click", handleClick);

      return () => {
        document.removeEventListener("click", handleClick);
      };
    });
  };

  useOutsideClick(ref, () => {
    setActive(true);
  });

  const token = localStorage.getItem("MyToken");

  const handleMoveFilm = (listID) => {
    dispatch(addPublicFilm(about_me.id, listID, contentId, title, token));
    handleToggle();
  };

  return (
    <div className="add-btn" ref={ref}>
      <div
        className={`move-btn ${
          new_list?.length < 1 ? "move-btn__disable" : ""
        }`}
        onClick={handleToggle}
      >
        <span>
          <img src={add_wishlist} alt="add to wishlist" />
        </span>
      </div>
      <ul className={`add-btn__list ${!isActive ? "list-open" : ""}`}>
        {new_list?.map((list, i) => (
          <li key={i} onClick={() => handleMoveFilm(list?.id)}>
            {list?.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default AddWPublicBtn;
