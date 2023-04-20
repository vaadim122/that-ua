import React from "react";
import { useSelector } from "react-redux";
import List from "./List";
import { useParams } from "react-router-dom";
import PublicList from "../PublicList/PublicList";

const ListPage = () => {
  const Authenticated = localStorage.getItem("Authenticated");
  const { id } = useParams();
  const lists = useSelector(({ listReducer }) => listReducer);
  let myList = true;

  if (lists.length > 0) {
    myList = lists.some((el) => {
      if (el.id === id) {
        return true;
      } else {
        return false;
      }
    });
  }

  return Authenticated ? (
    lists.length > 0 ? (
      myList ? (
        <List />
      ) : (
        <PublicList />
      )
    ) : (
      ""
    )
  ) : (
    <PublicList />
  );
};

export default ListPage;
