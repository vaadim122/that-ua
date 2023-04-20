import React, { useEffect, useState } from "react";
import { getRecomendation } from "../../redux/actions/tasks.actions";
import { useSelector, useDispatch } from "react-redux";

import "../../assets/scss/block/recomendation.scss";
import FilmPromo from "../FilmPromo/FilmPromo";
import FilmRecomendation from "./FilmRecomendation";

const Recomendation = ({ setRecomendation }) => {
  const dispatch = useDispatch();
  const Authenticated = localStorage.getItem("Authenticated");
  let localSkip = +localStorage.getItem("skip");
  const [film] = useSelector(
    ({ recomendationReducer }) => recomendationReducer
  );
  const [skip, setSkip] = useState(0);
  const [btn, setBtn] = useState("Skip");

  useEffect(() => {
    if (skip === 0) {
      localSkip && setSkip(localSkip);
    }
  }, []);

  useEffect(() => {
    if (Authenticated) {
      const token = localStorage.getItem("MyToken");
      setBtn("Skip");
      localSkip
        ? dispatch(getRecomendation(token, localSkip))
        : dispatch(getRecomendation(token, skip));
    }
  }, [Authenticated, skip]);

  const handleToggle = () => {
    setRecomendation(false);
  };
  const handleSkip = () => {
    setSkip((prev) => prev + 1);
    window.localStorage.setItem("skip", skip + 1);
  };

  return (
    <div className="recomendation">
      <div className="recomendation__popup">
        <div className="recomendation__close">
          <span onClick={handleToggle}></span>
        </div>
        {film && (
          <div className="recomendation__film">
            <FilmRecomendation
              content={film?.content}
              source={film?.source}
              setBtn={setBtn}
            />
          </div>
        )}
        <div className="recomendation__skip">
          <button className="button" onClick={handleSkip}>
            {btn}
          </button>
        </div>
      </div>
    </div>
  );
};
export default Recomendation;
