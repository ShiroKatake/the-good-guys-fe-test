import React from "react";
import { ReviewProps } from "./Review.types";

export const Review: React.FC<ReviewProps> = ({ rating, reviewTitle, reviewText, customerName }) => {
  return (
    <div>
      <div>{rating}</div>
      <div>{reviewTitle}</div>
      <div>{reviewText}</div>
      <div>{customerName}</div>
    </div>
  );
};
