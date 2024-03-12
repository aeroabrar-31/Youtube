import React from "react";
import { button_list_data } from "../../utils/constants";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 7,
  },
  desktop: {
    breakpoint: { max: 2000, min: 1024 },
    items: 5,
    // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const ButtonsList = () => {
  return (
    <div className="border-3 border-green-600 shadow-lg">
      {button_list_data.map((data, index) => {
        return (
          <button key={index} className="px-5 py-1 rounded-lg bg-gray-200 mx-2">
            {data}
          </button>
        );
      })}
    </div>
  );
};

export default ButtonsList;
