import React from "react";
import ReactGA from "react-ga";

const useAnalyticsEventTracker = (category = "Film") => {
  const eventTracker = (action = "action", label = "label") => {
    ReactGA.event({ category, action, label });
  };
  return eventTracker;
};
export default useAnalyticsEventTracker;
