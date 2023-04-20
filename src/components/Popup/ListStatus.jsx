import React, { useState } from "react";
import { editListStatus } from "../../redux/actions/tasks.actions";
import { useDispatch } from "react-redux";
import useModal from "../../hook/hookOpenModal";

import "../../assets/scss/block/heading.scss";
import { Public } from "../UI/Public";
import { Private } from "../UI/Private";

const ListStatus = ({ list }) => {
  const { isOpen, toggle } = useModal();
  const dispatch = useDispatch();

  const token = localStorage.getItem("MyToken");

  const NewListStatus = () => {
    dispatch(editListStatus(!list?.isPublic, list.id, token));
    toggle();
  };
  return list ? (
    <div className="heading__status">
      <div className="heading__status__icon">
        {list?.isPublic ? (
          <div className="heading__status--block">
            <p className="status-active">
              <Public />
            </p>
            <p onClick={toggle}>
              <Private />
            </p>
          </div>
        ) : (
          <div className="heading__status--block">
            <p onClick={toggle}>
              <Public />
            </p>
            <p className="status-active">
              <Private />
            </p>
          </div>
        )}
      </div>
      <div className={`btn-create__form ${isOpen ? "popup-open" : ""}`}>
        <div className="btn-create__form--popup">
          <div className="btn-create__form--close">
            <span onClick={toggle}></span>
          </div>
          <div className="btn-create__text margin-5t margin-25b">
            {list?.isPublic
              ? "Are you sure you want to make this list private?"
              : "Are you sure you want to make this list public?"}
          </div>

          <div className="btn-create__form--button">
            <button className={`btn-primary`} onClick={toggle}>
              No
            </button>
            <button className={`btn-primary`} onClick={NewListStatus}>
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};
export default ListStatus;
