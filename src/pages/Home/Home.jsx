import React from "react";
import { useSelector } from "react-redux";

import ListFilm from "../../components/ListFilm/ListFilm";
import InstagramLinked from "../../components/Popup/InstagramLinked";

function TopList() {
  const lists = useSelector(({ listReducer }) => listReducer);
  const about_me = useSelector(({ profileReducer }) => profileReducer);

  const list = lists?.find((obj) => {
    return obj.isSystem && obj.type === "Content";
  });

  return (
    <>
      {about_me.length !== 0 ? (
        <InstagramLinked
          instagramLinked={about_me?.isInstagramLinked}
          telegramLinked={about_me?.isTelegramLinked}
        />
      ) : null}
      <ListFilm list={list} />
    </>
  );
}

export default TopList;
