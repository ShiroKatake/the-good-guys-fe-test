"use client";
import Link from "next/link";
import { Review } from "./components/Review/Review";
import { ReviewModel } from "@/models/cms/Review.types";
import { SortMethod, reviewSort } from "@/utils/reviewSort/reviewSort";
import { useState } from "react";

interface ProductProps {
  productId: string;
  reviews: ReviewModel[];
}

export const Product: React.FC<ProductProps> = ({ productId, reviews }) => {
  const [sortMethod, setSortMethod] = useState<SortMethod>("highestRating");
  const sortedReviews = reviewSort(reviews, sortMethod);

  return (
    <main>
      <Link href="/">Back to home</Link>
      <h1>Product: {productId}</h1>

      <select value={sortMethod} onChange={(e) => setSortMethod(e.target.value as SortMethod)}>
        <option value="newest">Newest</option>
        <option value="highestRating">Highest Rating</option>
        <option value="lowestRating">Lowest Rating</option>
      </select>

      {sortedReviews.map((review: any) => {
        return (
          <Review
            key={review.REVIEW_HDR_ID}
            rating={review.RATING}
            reviewTitle={review.REVIEW_TITLE}
            reviewText={review.REVIEW_TEXT}
            customerName={review.CUSTOMER_NAME}
          ></Review>
        );
      })}
    </main>
  );
};
