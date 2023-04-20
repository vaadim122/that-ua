/* eslint-disable array-callback-return */
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { REACT_APP_LIST_API } from "../../config";
import RateBtn from "./RateBtn";

const RecomendationPopup = () => {
  const [filmsRate, setFilmsRate] = useState([]);

  const Authenticated = localStorage.getItem("Authenticated");
  const token = localStorage.getItem("MyToken");
  const lists = useSelector(({ listReducer }) => listReducer);

  const getRating = async (content_id) => {
    try {
      const res = await axios(
        `${REACT_APP_LIST_API}/ratings/${content_id}?$expand=rates`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const rate = res.data.avgRate ? res.data.avgRate : 0;
      setFilmsRate((prev) => [...prev, rate]);
    } catch (e) {
      console.error(e.message);
    }
  };

  useEffect(() => {
    if (lists && Authenticated) {
      lists?.map((obj) => {
        if (obj.type === "Content") {
          axios
            .get(`${REACT_APP_LIST_API}/lists/${obj.id}/items`, {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
            })
            .then(({ data }) => {
              data.map((film) => {
                getRating(film.contentId);
              });
            });
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lists]);

  return <RateBtn lists={lists} filmsRate={filmsRate} />;
};
export default RecomendationPopup;
