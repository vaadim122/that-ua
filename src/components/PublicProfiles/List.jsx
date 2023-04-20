import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import axios from "axios";
import { REACT_APP_LIST_API } from "../../config";

import { getProfilePublc } from "../../redux/actions/profilesPublic.action";

const List = ({ id }) => {
  const Authenticated = localStorage.getItem("Authenticated");
  const token = localStorage.getItem("MyToken");
  const dispatch = useDispatch();
  const [list, setList] = useState([]);
  useEffect(() => {
    if (Authenticated) {
      //   dispatch(getProfilePublc(id, token));
      axios
        .get(`${REACT_APP_LIST_API}/public/profiles/${id}/lists`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
        .then(({ data }) => {
          setList(data);
        });
    }
  }, [Authenticated]);
  return (
    list.length > 0 && (
      <div className="public-profiles-page__list">
        <ul>
          <li className="public-profiles-page__list--title">User lists:</li>
          {list?.map((list, i) => (
            <li key={i}>
              <Link to={`/list/${list.id}`} aria-label={list?.name}>
                {list?.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )
  );
};
export default List;
