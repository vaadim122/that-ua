import React, { useState } from "react";
import delete_ic from "../../assets/images/delete.png";
import { deleteFilm } from "../../redux/actions/tasks.actions";
import { useDispatch } from "react-redux";
import useModal from "../../hook/hookOpenModal";
import DletePopup from "../Popup/DeletePopup";

const DeleteBtn = ({ list_id, film_id, detailPaga }) => {
  const { isOpen, toggle } = useModal();
  const dispatch = useDispatch();

  const token = localStorage.getItem("MyToken");

  const handleDeleteFilm = () => {
    dispatch(deleteFilm(list_id, film_id, token));
    toggle();
    if (detailPaga) {
      setTimeout(() => {
        window.location.href = `/list/${list_id}`;
      }, 90);
    }
  };

  return (
    <div className="delete_film">
      <span className="delete_film__button" onClick={toggle}>
        <img src={delete_ic} alt="delete" width="100%" height="100%" />
      </span>
      <DletePopup
        handleToggle={toggle}
        handleDelete={handleDeleteFilm}
        isActive={isOpen}
      />
    </div>
  );
};
export default DeleteBtn;
