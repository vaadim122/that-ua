import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { deleteList } from "../../redux/actions/tasks.actions";
import useModal from "../../hook/hookOpenModal";

import DletePopup from "../Popup/DeletePopup";

const DleteList = ({ list, setActive }) => {
  const { isOpen, toggle } = useModal();

  const dispatch = useDispatch();
  const { id } = useParams();

  const token = localStorage.getItem("MyToken");

  const handleToggle = () => {
    setActive("false");
    toggle();
  };

  const handleDeleteList = () => {
    dispatch(deleteList(list.id, token));
    toggle();
    if (list.id === id) {
      setTimeout(() => {
        window.location.href = `/`;
      }, 50);
    }
  };

  return (
    <li>
      <span className="list-edit__link" onClick={handleToggle}>
        Delete
      </span>
      <DletePopup
        handleToggle={handleToggle}
        handleDelete={handleDeleteList}
        isActive={isOpen}
      />
    </li>
  );
};
export default DleteList;
