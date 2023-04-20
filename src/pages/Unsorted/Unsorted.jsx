import React from "react";

import { useSelector } from "react-redux";

import UnsortedContent from "../../components/Unsorted/UnsortedContent";

const Unsorted = () => {
  const lists = useSelector(({ listReducer }) => listReducer);

  const list = lists?.find((obj) => {
    return obj.isSystem && obj.type === "Generic";
  });

  return <UnsortedContent list={list} />;
};
export default Unsorted;
