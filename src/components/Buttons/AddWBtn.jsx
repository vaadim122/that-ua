import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { moveFilm } from "../../redux/actions/tasks.actions";

import add_wishlist from "../../assets/images/in_wishlist.svg";

const AddWBtn = ({ list_id, film_id, detailPaga }) => {
  const dispatch = useDispatch();
  const lists = useSelector(({ listReducer }) => listReducer);
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

  const handleMoveFilm = (newListID) => {
    dispatch(moveFilm(film_id, list_id, newListID, token));
    handleToggle();
    if (detailPaga) {
      setTimeout(() => {
        window.location.href = `/list/${newListID}`;
      }, 90);
    }
  };

  return (
    <div className="add-btn" ref={ref}>
      <div
        className={`move-btn ${
          new_list?.length <= 1 ? "move-btn__disable" : ""
        }`}
        onClick={handleToggle}
      >
        <span>
          <img
            src={add_wishlist}
            alt="add to wishlist"
            width="21"
            height="26"
          />
        </span>
      </div>
      <ul className={`add-btn__list ${!isActive ? "list-open" : ""}`}>
        {new_list?.map((list, i) =>
          list.id !== list_id ? (
            <li key={i} onClick={() => handleMoveFilm(list?.id)}>
              {list?.name}
            </li>
          ) : null
        )}
      </ul>
    </div>
  );
};
export default AddWBtn;
