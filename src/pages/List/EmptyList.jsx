import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import ListBtn from "../../components/ListBtn/ListBtn";

import EditList from "../../components/Popup/EditList";
import ListStatus from "../../components/Popup/ListStatus";

const EmptyList = ({ id, disabelBtn }) => {
  const [defaultText, setDefaultText] = useState("");

  const lists = useSelector(({ listReducer }) => listReducer);
  const Authenticated = localStorage.getItem("Authenticated");
  const list = lists?.find((obj) => {
    return obj.id === id;
  });

  useEffect(() => {
    let t = setTimeout(() => {
      setDefaultText("List is empty");
    }, 700);
    return () => clearTimeout(t);
  }, []);

  return Authenticated ? (
    <>
      {!disabelBtn ? <ListBtn /> : ""}
      <div className="margin-15t d-none d-md-inline-block">
        <div className="heading">
          <h1>{list?.name}</h1>
          <ListStatus list={list} />
        </div>
      </div>
      <div className="list-tytle-mb d-block d-md-none padding-30t">
        <div className="heading">
          <h5>{list?.name}</h5>
          <ListStatus list={list} />
        </div>
        {!list?.isSystem ? <EditList list={list} mobileList={true} /> : ""}
      </div>
      <div className="padding-15t">
        <p>{defaultText}</p>
      </div>
    </>
  ) : null;
};

export default EmptyList;
