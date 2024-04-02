import React from "react";
import { ReviewProps } from "./Review.types";
import "./Review.styled.css";

export const Review: React.FC<ReviewProps> = ({ rating, reviewTitle, reviewText, customerName }) => {
  return (
    <div className="review">
      <p>{customerName}</p>
      <p>Ratings: {rating}</p>
      <p>{reviewTitle}</p>
      <p>{reviewText}</p>
      {/* date, review type, etc. */}
    </div>
  );
};
