import React from "react";

const Rating = props => {
  let stars = Math.round(props.children);
  let rating = "";
  for (let i = 1; i <= 5; i++) {
    rating += stars < i ? "☆" : "★";
  }

  return <p className="rating-stars">{rating}</p>;
};

export default Rating;
