import React from "react";
import { useSelector } from "react-redux";
import Film from "../../components/Film/Film";
import FilmPublick from "../../components/Film/FilmPublick";

const FilmPage = () => {
  const lists = useSelector(({ listReducer }) => listReducer);
  const Authenticated = localStorage.getItem("Authenticated");
  const publickList = true;

  let myList = true;
  const list_id = window.location.pathname.split("/")[2];

  if (lists.length > 0) {
    myList = lists.some((el) => {
      if (el.id === list_id) {
        return true;
      } else {
        return false;
      }
    });
  }

  return Authenticated ? (
    lists.length > 0 ? (
      myList ? (
        <Film list_id={list_id} />
      ) : (
        <FilmPublick publickList={publickList} list_id={list_id} />
      )
    ) : (
      ""
    )
  ) : (
    <FilmPublick publickList={publickList} list_id={list_id} />
  );
};
export default FilmPage;
