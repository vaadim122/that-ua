import { useEffect, useState } from "react";
import { Star } from "./StarUI";

export const StarComponent = ({ category, setRates, rates }) => {
  const [hover, setHover] = useState(0);

  // const [localRating, setLocalRating] = useState(category?.rate);
  const addCartegory = (index) => {
    // setLocalRating(index);
    setRates(
      // rates?.map((el) => {
      //   if (el?.categoryName === category?.categoryName) {
      //     return { ...el, rate: index };
      //   } else {
      //     return el;
      //   }
      // })
      (prev) =>
        prev.map((item) =>
          item?.categoryName === category?.categoryName
            ? { ...item, rate: index }
            : item
        )
    );
  };
  return (
    <>
      <p>{category?.categoryName}</p>
      <div className="stars-block">
        {[...Array(10)].map((star, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={index}
              className={index <= (hover || category?.rate) ? "on" : "off"}
              onClick={() => addCartegory(index)}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(category?.rate)}
            >
              <span className="star">
                <Star />
              </span>
            </button>
          );
        })}
      </div>
    </>
  );
};
