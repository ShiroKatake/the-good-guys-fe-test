import React from "react";
import { ReviewProps } from "./Review.types";
import "./Review.styled.css";

export const Review: React.FC<ReviewProps> = ({ rating, reviewTitle, reviewText, customerName }) => {
  return (
    <div className="review">
      <p>{customerName ?? "Anonymous"}</p>
      <p>Ratings: {rating}</p>
      {reviewTitle && <p>{reviewTitle}</p>}
      {reviewText && <p>{reviewText}</p>}
      {/* date, review type, etc. */}
    </div>
  );
};
