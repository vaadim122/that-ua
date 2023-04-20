import React from "react";
import { NavLink } from "react-router-dom";
import EditList from "../Popup/EditList";

const ButtonList = ({ list }) => {
  return (
    <li className="btn-list margin-15t">
      <NavLink
        to={`/list/${list.id}`}
        className={`${({ isActive }) => (isActive ? "active" : "")} 
                  ${
                    window.location.pathname === "/" &&
                    list.isSystem &&
                    list.type === "Content"
                      ? "active"
                      : ""
                  }
              `}
        aria-label={list?.name}
      >
        <span className="d-none d-md-inline-block">{list?.name}</span>
      </NavLink>
      {!list?.isSystem ? <EditList list={list} desctopList={true} /> : ""}
      <span className="d-block d-md-none list-btn__mobile-title">
        {list?.name}
      </span>
    </li>
  );
};
export default ButtonList;
