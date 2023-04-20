import React, { useState, useEffect } from "react";

import { useSelector } from "react-redux";
import "../../assets/scss/block/list-btn.scss";
import ButtonList from "./ButtonList";
import CreateList from "./CreateList";

const ListBtn = () => {
  const lists = useSelector((state) => state?.listReducer);

  const [new_list, setNewList] = useState();

  // const new_list = lists?.filter((obj) => {
  //   return obj.type == "Content";
  // });
  useEffect(() => {
    if (lists) {
      setNewList(
        lists?.filter((obj) => {
          return obj.type === "Content";
        })
      );
    }
  }, [lists]);

  return (
    <div className="list-btn margin-15t">
      <ul>
        <CreateList />
        {new_list?.map((list, i) => (
          <ButtonList list={list} key={i} />
        ))}
      </ul>
    </div>
  );
};
export default ListBtn;
