import React, { useEffect, useState, useRef } from "react";
import DleteList from "../ListBtn/DeleteList";
import RenameList from "./RenameList";

const EditList = ({ list, desctopList, mobileList }) => {
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

  return (
    <div ref={ref}>
      {mobileList ? (
        <span
          className="list-tytle-mb__dots d-block d-md-none"
          onClick={handleToggle}
        ></span>
      ) : (
        ""
      )}
      {desctopList ? (
        <span
          className="btn-list__dots d-none d-md-inline-block"
          onClick={handleToggle}
        ></span>
      ) : (
        ""
      )}
      <ul className={`list-edit ${!isActive ? "list-edit--open" : ""}`}>
        <RenameList list={list} setActive={setActive} />
        <DleteList list={list} setActive={setActive} />
      </ul>
    </div>
  );
};

export default EditList;
